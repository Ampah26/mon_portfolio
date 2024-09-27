import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { countries } from "countries-list";

const AddClientModal = ({ show, handleClose }) => {
  const countryOptions = Object.keys(countries).map((code) => ({
    value: code,
    label: countries[code].name,
  }));

  const handleCountryChange = (selectedOption) => {
    setClientData((prevData) => ({
      ...prevData,
      country: selectedOption ? selectedOption.value : "",
    }));
  };

  const [clientData, setClientData] = useState({
    type: "Organization",
    name: "",
    company_name: "",
    primary_contact: "",
    phone: "",
    client_group: "Gold",
    labels: "Corporate",
    projects: "",
    total_invoiced: "",
    payment_received: "",
    due: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    website: "",
    vat_number: "",
    fiscal_identification: "",
    currency: "USD",
    currency_symbol: "$",
  });

  const [isOrganization, setIsOrganization] = useState(true);

  const currencies = [
    { code: "USD", name: "US Dollar", symbol: "$" },
    //{ code: 'EUR', name: 'Euro', symbol: '€' },
  ];

  useEffect(() => {
    if (clientData.type === "Organization") {
      setIsOrganization(true);
    } else {
      setIsOrganization(false);
    }
  }, [clientData.type]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "currency") {
      const selectedCurrency = currencies.find(
        (currency) => currency.code === value
      );
      setClientData((prevData) => ({
        ...prevData,
        [name]: value,
        currency_symbol: selectedCurrency ? selectedCurrency.symbol : "",
      }));
    } else {
      setClientData((prevData) => {
        const updatedData = { ...prevData, [name]: value };

        // Calculer le montant restant si "total_invoiced" ou "payment_received" change
        if (name === "total_invoiced" || name === "payment_received") {
          const totalInvoiced = parseFloat(updatedData.total_invoiced) || 0;
          const paymentReceived = parseFloat(updatedData.payment_received) || 0;
          const due = totalInvoiced - paymentReceived;

          // Mettre à jour le champ "due"
          updatedData.due = due.toFixed(2);
        }

        return updatedData;
      });
    }
  };

  const handleTypeChange = (e) => {
    const { value } = e.target;
    setClientData((prevData) => ({
      ...prevData,
      type: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulaire soumis avec les données:", clientData);

    try {
      const response = await fetch("http://localhost:5000/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Client ajouté avec succès:", data);
        Swal.fire({
          title: "Succès",
          text: "Nouveau client ajouté avec succès !",
          icon: "success",
          confirmButtonText: "OK",
        });
        handleClose(); // Fermer le modal après soumission
      } else {
        console.error("Erreur lors de l'ajout du client");
        Swal.fire({
          title: "Erreur",
          text: "Erreur lors de l'ajout du client",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
      Swal.fire({
        title: "Erreur",
        text: "Erreur lors de la soumission du formulaire",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un Client</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          id="add-client-form"
          className="general-form"
          acceptCharset="utf-8"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="rise_csrf_token"
            value="bde860d90acd92894b2c7975d0839a63"
          />

          {/* Type de Client */}
          <div className="form-group d-flex">
            <Form.Check
              type="radio"
              label="Organization"
              name="type"
              value="Organization"
              checked={isOrganization}
              onChange={handleTypeChange}
              className="me-3" // Add margin end
            />
            <Form.Check
              type="radio"
              label="Individual"
              name="type"
              value="Individual"
              checked={!isOrganization}
              onChange={handleTypeChange}
            />
          </div>

          {/* Nom du Client */}
          {isOrganization ? (
            <div className="form-group">
              <input
                type="text"
                name="company_name"
                id="company_name"
                className="form-control p10"
                placeholder="Company Name"
                value={clientData.company_name}
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control p10"
                placeholder="Name"
                value={clientData.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="country">Pays</label>
            <div className="select-container">
              <select
                name="country"
                id="country"
                className="form-control p10"
                value={clientData.country}
                onChange={handleChange}
              >
                {/* Option placeholder */}
                <option value="" disabled selected>
                  Sélectionnez un pays
                </option>
                {countryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Téléphone */}
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              id="phone"
              className="form-control p10"
              placeholder="Phone"
              value={clientData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Groupe de Client */}
          <div className="form-group">
            Catégorie Client
            <select
              name="client_group"
              id="client_group"
              className="form-control p10"
              value={clientData.client_group}
              onChange={handleChange}
            >
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="VIP">VIP</option>
            </select>
          </div>

          {/* Labels */}
          <div className="form-group">
            Etiquette
            <select
              name="labels"
              id="labels"
              className="form-control p10"
              value={clientData.labels}
              onChange={handleChange}
            >
              <option value="Satisfied">Satisfied</option>
              <option value="Referral">Referral</option>
              <option value="Unsatisfied">Unsatisfied</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="form-group">
            <label> Nombre de projet</label>
            <input
              type="number"
              name="projects"
              id="projects"
              className="form-control p10"
              placeholder="Projects"
              value={clientData.projects}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Facture Total</label>
            <input
              type="number"
              name="total_invoiced"
              id="total_invoiced"
              className="form-control p10"
              placeholder="Total Invoiced"
              value={clientData.total_invoiced}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Payement reçu</label>
            <input
              type="number"
              name="payment_received"
              id="payment_received"
              className="form-control p10"
              placeholder="Payment Received"
              value={clientData.payment_received}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            Montant restant
            <input
              type="number"
              name="due"
              id="due"
              className="form-control p10"
              placeholder="Due"
              value={clientData.due}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label> Adresse </label>
            <input
              type="text"
              name="address"
              id="address"
              className="form-control p10"
              placeholder="Address"
              value={clientData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Ville</label>
            <input
              type="text"
              name="city"
              id="city"
              className="form-control p10"
              placeholder="City"
              value={clientData.city}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="state"
              id="state"
              className="form-control p10"
              placeholder="State"
              value={clientData.state}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="zip"
              id="zip"
              className="form-control p10"
              placeholder="Zip"
              value={clientData.zip}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="website"
              id="website"
              className="form-control p10"
              placeholder="Website"
              value={clientData.website}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="vat_number"
              id="vat_number"
              className="form-control p10"
              placeholder="VAT Number"
              value={clientData.vat_number}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="fiscal_identification"
              id="fiscal_identification"
              className="form-control p10"
              placeholder="Fiscal Identification"
              value={clientData.fiscal_identification}
              onChange={handleChange}
            />
          </div>

          {/* Currency */}
          <div className="form-group">
            <select
              name="currency"
              id="currency"
              className="form-control p10"
              value={clientData.currency}
              onChange={handleChange}
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name} ({currency.code})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="currency_symbol"
              id="currency_symbol"
              className="form-control p10"
              placeholder="Currency Symbol"
              value={clientData.currency_symbol}
              readOnly
            />
          </div>

          {/* Boutons */}
          <div className="form-group d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Annuler
            </button>
            <button type="submit" className="btn btn-primary ms-auto">
              Valider
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddClientModal;
