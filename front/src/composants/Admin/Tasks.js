import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import axios from "axios";
import { FaBeer } from "react-icons/fa"; // Import d'une icône spécifique (ici une icône de FontAwesome)
import {
  FaPlus,
  FaCheckCircle,
  FaSpinner,
  FaClipboardCheck,
} from "react-icons/fa"; // Import des icônes
import { Button } from "react-bootstrap";
import AddTaskModal from "../Modal/AddTaskModal";

const renderTask = (task) => {
  let priorityIcon;
  let priorityColor;

  switch (task.priority.toLowerCase()) {
    case "high":
      priorityIcon = (
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
          className="feather feather-arrow-up icon-14"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      );
      priorityColor = "#e18a00"; // Couleur pour haute priorité
      break;
    case "low":
      priorityIcon = (
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
          className="feather feather-arrow-down icon-14"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="5 12 12 19 19 12"></polyline>
        </svg>
      );
      priorityColor = "#aab7b7"; // Couleur pour basse priorité
      break;
    default:
      priorityIcon = null;
      priorityColor = "#ddd"; // Couleur par défaut pour priorité moyenne
      break;
  }

  return (
    <a
      key={task.id}
      className="kanban-item d-block"
      title={`Task info #${task.id}`}
      href="#"
    >
      <span className="avatar">
        <img
          src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"
          alt="Avatar"
          style={{ width: "30px", height: "30px", borderRadius: "50%" }}
        />
      </span>
      <div className="task-title">{task.title}</div>
      <div className="task-description">{task.description}</div>
      <div className="clearfix"></div>
      <div className="meta float-start mr5">
        <span
          className="sub-task-icon priority-badge"
          style={{ background: priorityColor }}
          aria-label={`Priority: ${task.priority}`}
          data-bs-toggle="tooltip"
        >
          {priorityIcon}
        </span>
        {task.labels && (
          <span className="task-labels">
            {task.labels.split(",").map((label, index) => {
              let labelColor;
              switch (label.trim().toLowerCase()) {
                case "feedback":
                  labelColor = "#0096FF"; // Bleu pour Feedback
                  break;
                case "design":
                  labelColor = "#28a745"; // Vert pour Design
                  break;
                case "amelioration":
                  labelColor = "#007bff"; // Bleu pour Amélioration
                  break;
                default:
                  labelColor = "#d3d3d3"; // Gris clair pour les autres labels
                  break;
              }
              return (
                <span
                  key={index}
                  className="task-label"
                  style={{
                    backgroundColor: labelColor,
                    color: "#fff",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    marginRight: "5px",
                  }}
                >
                  {label}
                </span>
              );
            })}
          </span>
        )}
      </div>
      <div className="clearfix"></div>
    </a>
  );
};

const Tasks = () => {
  const [view, setView] = useState("kanban");
  // État pour suivre la vue sélectionnée
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const [projects, setProjects] = useState([]); // État pour stocker les projets récupérés

  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState({
    "to do": [],
    "in progress": [],
    review: [],
    done: [],
  });

  const getProjectName = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    return project ? project.name : "Inconnu";
  };

  const getUserName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? `${user.nom} ${user.prenom}` : "Inconnu";
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksResponse = await fetch("http://localhost:5000/api/tasks");
        const tasksData = await tasksResponse.json();

        const response = await fetch("http://localhost:5000/api/tasks");
        const data = await response.json();
        const projectsResponse = await fetch(
          "http://localhost:5000/api/projects"
        );
        const projectsData = await projectsResponse.json();
        setProjects(projectsData);

        // Fetch users
        const usersResponse = await fetch("http://localhost:5000/api");
        const usersData = await usersResponse.json();
        setUsers(usersData);
        setTasks(tasksData);

        const tasksByStatus = data.reduce((acc, task) => {
          if (!acc[task.status]) {
            acc[task.status] = [];
          }
          acc[task.status].push(task);
          return acc;
        }, {});
        setTasks(tasksByStatus);
      } catch (error) {
        console.error("Erreur lors de la récupération des tâches:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <Navbar />

      <div id="left-menu-toggle-mask" style={{ height: "723px" }}>
        <Sidebar />
        <div className="page-container overflow-auto">
          <div
            className="main-scrollable-page scrollable-page"
            style={{
              height: "551px",
              position: "relative",
              overflow: "scroll",
            }}
          >
            <div
              id="page-content"
              className="page-wrapper pb0 clearfix"
              style={{ minHeight: "501px" }}
            >
              <div class="clearfix mb15 dashbaord-header-area">
                <div class="clearfix float-start">
                  <span class="float-start p10 pl0">
                    <span
                      style={{ backgroundColor: "#fff" }}
                      class="color-tag border-circle"
                    ></span>
                  </span>
                  <h4 class="float-start">Tâches</h4>
                </div>
              </div>
              <ul
                id="task-tabs"
                className="nav nav-tabs bg-white title"
                role="tablist"
              >
                <li>
                  <a
                    role="presentation"
                    data-bs-toggle="tab"
                    href="#kanban-view"
                    className={view === "kanban" ? "active show" : ""}
                    onClick={() => setView("kanban")}
                  >
                    Vue Kanban
                  </a>
                </li>
                <li>
                  <a
                    role="presentation"
                    data-bs-toggle="tab"
                    href="#list-view"
                    className={view === "list" ? "active show" : ""}
                    onClick={() => setView("list")}
                  >
                    Vue Liste
                  </a>
                </li>
                <div className="tab-title clearfix no-border">
                  <div className="title-button-group skip-dropdown-migration">
                    <a
                      href="#"
                      className="btn btn-default"
                      title="Add task"
                      onClick={handleShow}
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
                        className="feather feather-plus-circle icon-16"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                      Nouvelle tâche
                    </a>
                    <AddTaskModal show={showModal} handleClose={handleClose} />
                  </div>
                </div>
              </ul>

              {/* Kanban View */}
              {view === "kanban" && (
                <div id="kanban-view" className="tab-pane fade in active show">
                  <div className="bg-white">
                    <div id="kanban-wrapper" style={{ overflowX: "scroll" }}>
                      <ul
                        id="kanban-container"
                        className="kanban-container clearfix"
                        style={{ width: "1345px" }}
                      >
                        {Object.entries(tasks).map(([status, taskList]) => (
                          <li
                            key={status}
                            className={`kanban-col kanban-${status.replace(
                              " ",
                              "-"
                            )}`}
                          >
                            <div
                              className="kanban-col-title"
                              style={{
                                borderBottom: `3px solid ${
                                  status === "to do"
                                    ? "#F9A52D"
                                    : status === "in progress"
                                    ? "#1672B9"
                                    : status === "review"
                                    ? "#ad159e" // Violet pour review
                                    : "#00B393"
                                }`,
                              }}
                            >
                              {status.charAt(0).toUpperCase() + status.slice(1)}
                              <span
                                className={`kanban-item-count ${status.replace(
                                  " ",
                                  "-"
                                )}-task-count float-end`}
                              >
                                {taskList.length}
                              </span>
                            </div>
                            <div className="kanban-input general-form hide">
                              <input
                                type="text"
                                name="title"
                                value=""
                                id="title"
                                className="form-control"
                                placeholder="Add a task..."
                              />
                            </div>
                            <div
                              id={`kanban-item-list-${status.replace(
                                " ",
                                "-"
                              )}`}
                              className="kanban-item-list"
                              data-status-id={status}
                              style={{ height: "237.375px", overflowY: "auto" }}
                            >
                              {taskList.map(renderTask)}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {view === "list" && (
                <div id="list-view" className="tab-pane fade in active show">
                  <div className="bg-white">
                    <table
                      id="task-table"
                      className="display dataTable no-footer"
                      cellSpacing="0"
                      width="100%"
                      role="grid"
                      aria-describedby="task-table_info"
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
                            className="text-center w50 all sorting_asc bold-text"
                            tabIndex="0"
                          >
                            Title
                          </th>
                          <th className="all sorting bold-text" tabIndex="0">
                            Status
                          </th>
                          <th className="sorting bold-text" tabIndex="0">
                            Priority
                          </th>
                          <th className="sorting bold-text" tabIndex="0">
                            Start Date
                          </th>
                          <th className="sorting bold-text" tabIndex="0">
                            Deadline
                          </th>
                          <th className="sorting bold-text" tabIndex="0">
                            Projet
                          </th>
                          <th className="sorting bold-text" tabIndex="0">
                            Assigned To
                          </th>
                          <th className="sorting bold-text" tabIndex="0">
                            Collaborator
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
                        {Object.values(tasks)
                          .flat()
                          .map((task, index) => (
                            <tr
                              key={task.id}
                              className={index % 2 === 0 ? "even" : "odd"}
                            >
                              <td
                                className="text-center w50 all"
                                style={{ backgroundColor: "#f4f4f4" }}
                              >
                                {task.id}
                              </td>
                              <td
                                className="title-blue"
                                style={{ backgroundColor: "#f4f4f4" }}
                              >
                                {task.title}
                              </td>{" "}
                              {/* Titre en bleu */}
                              <td style={{ backgroundColor: "#f4f4f4" }}>
                                {task.status}
                              </td>
                              <td style={{ backgroundColor: "#f4f4f4" }}>
                                {task.priority}
                              </td>
                              <td style={{ backgroundColor: "#f4f4f4" }}>
                                {task.start_date
                                  ? new Date(
                                      task.start_date
                                    ).toLocaleDateString()
                                  : ""}
                              </td>
                              <td
                                className="deadline-red"
                                style={{ backgroundColor: "#f4f4f4" }}
                              >
                                {task.deadline
                                  ? new Date(task.deadline).toLocaleDateString()
                                  : ""}
                              </td>{" "}
                              {/* Deadline en rouge */}
                              <td
                                className="project-blue"
                                style={{ backgroundColor: "#f4f4f4" }}
                              >
                                {getProjectName(task.project_id)}
                              </td>{" "}
                              {/* Projet en bleu */}
                              <td style={{ backgroundColor: "#f4f4f4" }}>
                                {getUserName(task.assigned_to)}
                              </td>
                              <td style={{ backgroundColor: "#f4f4f4" }}>
                                {getUserName(task.collaborator)}
                              </td>
                              <td
                                className="text-center option w100"
                                style={{ backgroundColor: "#f4f4f4" }}
                              >
                                <a
                                  className="edit"
                                  title="Edit client"
                                  data-act="ajax-modal"
                                  data-title="Edit client"
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
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                  </svg>
                                </a>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
