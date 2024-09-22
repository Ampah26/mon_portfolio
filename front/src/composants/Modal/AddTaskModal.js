import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Importation des styles
import React, { useState, useEffect } from "react";

const AddTaskModal = ({ show, handleClose }) => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    project_id: "",
    assigned_to: "",
    collaborator: "",
    status: "to do",
    priority: "Medium",
    labels: "Bug",
    start_date: new Date(),
    deadline: new Date(),
  });

  const [projects, setProjects] = useState([]); // État pour stocker les projets récupérés
  const [dateError, setDateError] = useState("");
  const priorities = ["High", "Medium", "Low"];
  const statuses = ["to do", "in progress", "review", "done"];
  const labelOptions = ["Bug", "Amelioration", "Design", "Feedback"];
  const [users, setUsers] = useState([]);
  const [userError, setUserError] = useState("");

  // Récupérer les projets depuis le backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch projects
        const projectsResponse = await fetch(
          "http://localhost:5000/api/projects"
        );
        const projectsData = await projectsResponse.json();
        setProjects(projectsData);

        // Fetch users
        const usersResponse = await fetch("http://localhost:5000/api");
        const usersData = await usersResponse.json();
        setUsers(usersData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData(); // Appeler la fonction pour charger les données
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value === "" ? null : value,
    });
  };

  const handleDateChange = (date, field) => {
    setTaskData({
      ...taskData,
      [field]: date,
    });

    if (field === "start_date" && date > taskData.deadline) {
      setDateError("La date de début ne peut pas être après la date limite.");
    } else if (field === "deadline" && date < taskData.start_date) {
      setDateError("La date limite doit être après la date de début.");
    } else {
      setDateError("");
    }
  };

  const handleUserChange = () => {
    if (taskData.assigned_to === taskData.collaborator) {
      setUserError(
        "L'assigné et le collaborateur ne peuvent pas être la même personne."
      );
    } else {
      setUserError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier les dates avant la soumission
    if (taskData.deadline <= taskData.start_date) {
      setDateError("La date limite doit être après la date de début.");
      return;
    }
    if (
      taskData.assigned_to &&
      taskData.collaborator &&
      taskData.assigned_to === taskData.collaborator
    ) {
      setUserError(
        "L'assigné et le collaborateur ne peuvent pas être la même personne."
      );
      return;
    } else {
      setUserError(""); // Réinitialise l'erreur si la condition n'est pas remplie
    }

    console.log("Formulaire soumis avec les données:", taskData);

    try {
      const response = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Tâche ajoutée avec succès:", data);
        Swal.fire({
          title: "Succès",
          text: "Nouvelle tâche ajoutée avec succès !",
          icon: "success",
          confirmButtonText: "OK",
        });
        handleClose();
      } else {
        console.error("Erreur lors de l'ajout de la tâche");
        Swal.fire({
          title: "Erreur",
          text: "Erreur lors de l'ajout de la tâche",
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
        <Modal.Title>Ajouter une Tâche</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          id="add-task-form"
          className="general-form"
          acceptCharset="utf-8"
          onSubmit={handleSubmit}
        >
          {/* Titre de la tâche */}
          <div className="form-group mb-3">
            <label htmlFor="titre" className="form-label">
              Titre
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control p10"
              value={taskData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description de la tâche */}
          <div className="form-group mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="form-control p10"
              value={taskData.description}
              onChange={handleChange}
            />
          </div>

          {/* Projet */}
          <div className="form-group mb-3">
            <label htmlFor="project_id" className="form-label">
              Projet
            </label>
            <select
              name="project_id"
              id="project_id"
              className="form-control"
              value={taskData.project_id}
              onChange={handleChange}
            >
              <option value="">Sélectionner un projet</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}{" "}
                  {/* Affiche le nom du projet, mais enregistre l'ID */}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="assigned_to" className="form-label">
              Assigné à
            </label>
            <select
              name="assigned_to"
              id="assigned_to"
              className="form-control"
              value={taskData.assigned_to || ""} // Affiche la valeur vide si c'est null
              onChange={handleChange}
            >
              <option value="">Sélectionner un utilisateur</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.nom} {user.prenom}
                </option>
              ))}
            </select>
          </div>

          {/* Collaborateur */}
          <div className="form-group mb-3">
            <label htmlFor="collaborator" className="form-label">
              Collaborateur
            </label>
            <select
              name="collaborator"
              id="collaborator"
              className="form-control"
              value={taskData.collaborator || ""} // Affiche la valeur vide si c'est null
              onChange={handleChange}
            >
              <option value="">Sélectionner un collaborateur</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.nom} {user.prenom}
                </option>
              ))}
            </select>
          </div>

          {/* Erreur de validation des utilisateurs */}
          {userError && (
            <div className="alert alert-danger" role="alert">
              {userError}
            </div>
          )}

          {/* Statut */}
          <div className="form-group mb-3">
            <label htmlFor="status" className="form-label">
              Statut
            </label>
            <select
              name="status"
              id="status"
              className="form-control"
              value={taskData.status}
              onChange={handleChange}
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Priorité */}
          <div className="form-group mb-3">
            <label htmlFor="priority" className="form-label">
              Priorité
            </label>
            <select
              name="priority"
              id="priority"
              className="form-control"
              value={taskData.priority}
              onChange={handleChange}
            >
              {priorities.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </div>

          {/* Labels */}
          <div className="form-group mb-3">
            <label htmlFor="labels" className="form-label">
              Labels
            </label>
            <select
              name="labels"
              id="labels"
              className="form-control"
              value={taskData.labels}
              onChange={handleChange}
            >
              {labelOptions.map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Dates */}
          <div className="form-group mb-3 d-flex justify-content-between">
            <div className="w-48 me-2">
              <label htmlFor="start_date" className="form-label">
                Date de début
              </label>
              <DatePicker
                selected={taskData.start_date}
                onChange={(date) => handleDateChange(date, "start_date")}
                className="form-control"
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <div className="w-48 ms-2">
              <label htmlFor="deadline" className="form-label">
                Date limite
              </label>
              <DatePicker
                selected={taskData.deadline}
                onChange={(date) => handleDateChange(date, "deadline")}
                className="form-control"
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>

          {/* Erreur de validation des dates */}
          {dateError && (
            <div className="alert alert-danger" role="alert">
              {dateError}
            </div>
          )}

          {/* Boutons */}
          <div className="form-group d-flex justify-content-between mt-3">
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

export default AddTaskModal;
