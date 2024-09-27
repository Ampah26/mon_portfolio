import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import $ from "jquery";
import "feather-icons";
import axios from "axios";
import AddClientModal from "../Modal/AddClientModal";
import withReactContent from "sweetalert2-react-content";
import DeleteClientButton from "../Modal/DeleteClientButton";
import Swal from "sweetalert2";
import { handleDelete } from "../Modal/DeleteClientButton";

const MySwal = withReactContent(Swal);

const Clients = ({ client }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les données des clients depuis le backend
    const fetchClients = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/clients");
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des clients:", error);
      }
    };

    fetchClients();
  }, []);

  const getLabelClass = (label) => {
    switch (label) {
      case "Satisfied":
        return "label-satisfied";
      case "Unsatisfied":
        return "label-unsatisfied";
      case "Referral":
        return "label-referral";
      case "Inactive":
        return "label-inactive";
      default:
        return "";
    }
  };

  const handleDelete = async () => {
    const result = await MySwal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous ne pourrez pas récupérer ce client !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !",
      cancelButtonText: "Annuler",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(
          `http://localhost:5000/api/clients/delete/${client.id}`
        );
        MySwal.fire("Supprimé !", "Le client a été supprimé.", "success");
      } catch (error) {
        MySwal.fire(
          "Erreur !",
          "Une erreur est survenue lors de la suppression du client.",
          "error"
        );
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div id="js-init-chat-icon" class="init-chat-icon">
        <span id="js-chat-min-icon" data-type="open" class="chat-min-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-message-circle icon-18"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </span>
      </div>
      <div id="js-rise-chat-wrapper" class="rise-chat-wrapper hide"></div>
      <div id="left-menu-toggle-mask">
        <Sidebar />
        <div class="page-container overflow-auto">
          <div
            class="main-scrollable-page scrollable-page"
            style={{
              height: "638px",
              position: "relative",
              overflowY: "scroll",
            }}
          >
            <div
              id="page-content"
              class="page-wrapper clearfix"
              style={{ minHeight: "588px" }}
            >
              <div class="clearfix grid-button">
                <ul
                  id="client-tabs"
                  data-bs-toggle="ajax-tab"
                  class="nav nav-tabs bg-white title"
                  role="tablist"
                >
                  <li>
                    <a
                      role="presentation"
                      data-bs-toggle="tab"
                      data-bs-target="#clients_list"
                      aria-selected="false"
                      tabIndex="-1"
                      class="active show"
                    >
                      Clients
                    </a>
                  </li>

                  <div class="tab-title clearfix no-border">
                    <div class="title-button-group">
                      <a
                        class="btn btn-default"
                        title="Add client"
                        data-act="ajax-modal"
                        data-title="Add client"
                        onClick={handleShowModal}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          class="feather feather-plus-circle icon-16"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="16"></line>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        Nouveau client
                      </a>
                      <AddClientModal
                        show={showModal}
                        handleClose={handleCloseModal}
                      />
                    </div>
                  </div>
                </ul>
                <div class="tab-content">
                  <div
                    role="tabpanel"
                    class="tab-pane fade active show"
                    id="clients_list"
                  >
                    <div class="card">
                      <div class="table-responsive">
                        <div
                          id="client-table_wrapper"
                          class="dataTables_wrapper dt-bootstrap4 no-footer"
                        >
                          <div className="filter-section-container">
                            <div className="filter-section-flex-row">
                              <div className="filter-section-left">
                                <div className="filter-item-box">
                                  <div className="dropdown smart-filter-dropdown-container">
                                    <button
                                      className="btn btn-default smart-filter-dropdown dropdown-toggle caret"
                                      type="button"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="true"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-filter icon-16 mr5"
                                      >
                                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                      </svg>
                                      Filters
                                    </button>
                                    <div className="dropdown-menu w300">
                                      <div className="pb10 pl10"></div>
                                      <input
                                        type="text"
                                        className="form-control search-filter"
                                        placeholder="Search"
                                      />
                                      <div className="dropdown-divider"></div>
                                      <ul className="list-group smart-filter-list-group">
                                        <li>
                                          <a
                                            className="dropdown-item smart-filter-item list-group-item clickable"
                                            data-id="jyetvrypad"
                                          >
                                            All clients
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item smart-filter-item list-group-item clickable"
                                            data-id="oxwsislhvc"
                                          >
                                            Has due
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                                <div className="filter-item-box bookmarked-filter-button-wrapper">
                                  <button
                                    className="btn btn-default bookmarked-filter-button round"
                                    type="button"
                                    data-id="oxwsislhvc"
                                  >
                                    Has due
                                  </button>
                                </div>
                              </div>
                              <div className="filter-section-right">
                                <div className="filter-item-box">
                                  <div
                                    id="client-table_filter"
                                    className="dataTables_filter"
                                  >
                                    <label>
                                      <input
                                        type="search"
                                        className="form-control form-control-sm"
                                        placeholder="Search"
                                        aria-controls="client-table"
                                      />
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="filter-form hide"></div>
                            <div
                              id="client-table_processing"
                              className="dataTables_processing card"
                              style={{ display: "none" }}
                            >
                              <div className="table-loader">
                                <span className="loading"></span>
                              </div>
                            </div>
                          </div>
                          <table
                            id="client-table"
                            className="display dataTable no-footer"
                            cellSpacing="0"
                            width="100%"
                            role="grid"
                            aria-describedby="client-table_info"
                          >
                            <thead>
                              <tr role="row">
                                <th
                                  className="text-center w50 all sorting_asc sorting bold-text"
                                  tabIndex="0"
                                  aria-controls="task-table"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-sort="ascending"
                                  aria-label="ID: activate to sort column descending"
                                >
                                  ID
                                </th>
                                <th
                                  className="all sorting sorting bold-text"
                                  tabIndex="0"
                                  aria-controls="client-table"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Name: activate to sort column ascending"
                                >
                                  Name
                                </th>
                                <th
                                  className="sorting bold-text"
                                  tabIndex="0"
                                  aria-controls="client-table"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Primary contact: activate to sort column ascending"
                                >
                                  Primary contact
                                </th>
                                <th
                                  className="sorting bold-text"
                                  tabIndex="0"
                                  aria-controls="client-table"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Phone: activate to sort column ascending"
                                >
                                  Phone
                                </th>
                                <th
                                  className="sorting bold-text"
                                  tabIndex="0"
                                  aria-controls="client-table"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Client groups: activate to sort column ascending"
                                >
                                  Client groups
                                </th>
                                <th
                                  className="sorting bold-text"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Labels"
                                >
                                  Labels
                                </th>
                                <th
                                  className="sorting bold-text"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Projects"
                                >
                                  Projects
                                </th>
                                <th
                                  className="sorting bold-text"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Total invoiced"
                                >
                                  Total invoiced
                                </th>
                                <th
                                  className="sorting bold-text"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Payment Received"
                                >
                                  Payment Received
                                </th>
                                <th
                                  className="sorting bold-text"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Due"
                                >
                                  Due
                                </th>
                                <th
                                  className="text-center option w100 sorting bold-text"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label=""
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu icon-16"
                                  >
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                  </svg>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {clients.map((client, index) => (
                                <tr
                                  key={client.id}
                                  className={index % 2 === 0 ? "even" : "odd"}
                                >
                                  <td
                                    className="text-center w50 all"
                                    style={{ backgroundColor: "#f4f4f4" }}
                                  >
                                    {client.id}
                                  </td>
                                  <td
                                    className="all"
                                    style={{ backgroundColor: "#f4f4f4" }}
                                  >
                                    {client.name}
                                  </td>
                                  <td style={{ backgroundColor: "#f4f4f4" }}>
                                    {client.primary_contact}
                                  </td>
                                  <td style={{ backgroundColor: "#f4f4f4" }}>
                                    {client.phone}
                                  </td>
                                  <td style={{ backgroundColor: "#f4f4f4" }}>
                                    {client.client_group}
                                  </td>
                                  <td style={{ backgroundColor: "#f4f4f4" }}>
                                    <span
                                      className={`label ${getLabelClass(
                                        client.labels
                                      )}`}
                                      title="Label"
                                    >
                                      {client.labels}
                                    </span>
                                  </td>
                                  <td style={{ backgroundColor: "#f4f4f4" }}>
                                    {client.projects}
                                  </td>
                                  <td style={{ backgroundColor: "#f4f4f4" }}>
                                    {client.total_invoiced}
                                  </td>
                                  <td style={{ backgroundColor: "#f4f4f4" }}>
                                    {client.payment_received}
                                  </td>
                                  <td style={{ backgroundColor: "#f4f4f4" }}>
                                    {client.due}
                                  </td>
                                  <td
                                    className="text-center option w100"
                                    style={{ backgroundColor: "#f4f4f4" }}
                                  >
                                    <a
                                      className="edit"
                                      title="Edit client"
                                      data-post-id={client.id}
                                      data-act="ajax-modal"
                                      data-title="Edit client"
                                      data-action-url={`http://localhost:5000/api/clients/edit/${client.id}`}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-edit icon-16"
                                      >
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                      </svg>
                                    </a>
                                    <a
                                      title="Supprimer le client"
                                      className="delete"
                                      onClick={() =>
                                        handleDelete(
                                          client.id,
                                          setClients,
                                          clients
                                        )
                                      }
                                      style={{ cursor: "pointer" }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-x icon-16"
                                      >
                                        <line
                                          x1="18"
                                          y1="6"
                                          x2="6"
                                          y2="18"
                                        ></line>
                                        <line
                                          x1="6"
                                          y1="6"
                                          x2="18"
                                          y2="18"
                                        ></line>
                                      </svg>
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="ajaxModal"
        role="dialog"
        aria-labelledby="ajaxModal"
        data-bs-backdrop="static"
        data-bs-keyboard="true"
        aria-hidden="true"
        data-bs-focus="false"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4
                class="modal-title"
                id="ajaxModalTitle"
                data-title="RISE - Ultimate Project Manager and CRM"
              ></h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div id="ajaxModalContent"></div>
            <div id="ajaxModalOriginalContent" class="hide">
              <div class="original-modal-body">
                <div class="circle-loader"></div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
