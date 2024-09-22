import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "feather-icons";
import $ from "jquery";

const Dashboard = () => {
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalClients, setTotalClients] = useState(0);
  const [totalDue, setTotalDue] = useState(0);
  const [totalProjet, setTotalProjet] = useState(0);
  const [modifications, setModifications] = useState([]); // Renommer history

  const fetchTotals = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/dashboard-totals"
      );
      const data = await response.json();
      setTotalTasks(data.totalTasks);
      setTotalClients(data.totalClients);
      setTotalDue(data.totalDue);
      setTotalProjet(data.totalProjet);
    } catch (error) {
      console.error("Erreur lors de la récupération des totaux:", error);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/history");
      const data = await response.json();
      setModifications(data); // Utiliser "setModifications" au lieu de "setHistory"
    } catch (error) {
      console.error("Erreur lors de la récupération de l'historique:", error);
    }
  };

  useEffect(() => {
    fetchTotals();
    fetchHistory();
  }, []);

  return (
    <div>
      <Navbar />
      <div id="left-menu-toggle-mask" style={{ height: "723px" }}>
        <Sidebar />
        <div class="page-container overflow-auto">
          <div
            class="main-scrollable-page scrollable-page"
            style={{
              height: "631px",
              position: "relative",
              overflowY: "scroll",
            }}
          >
            <div
              id="page-content"
              class="page-wrapper clearfix dashboard-view"
              style={{ minHeight: "581px" }}
            >
              <div class="clearfix mb15 dashbaord-header-area">
                <div class="clearfix float-start">
                  <span class="float-start p10 pl0">
                    <span
                      style={{ backgroundColor: "#fff" }}
                      class="color-tag border-circle"
                    ></span>
                  </span>
                  <h4 class="float-start">Dashboard</h4>
                </div>
              </div>
              <div class="clearfix row">
                <div class="col-md-12 widget-container"></div>
              </div>
              <div class="dashboards-row clearfix row">
                <div class="widget-container col-md-3">
                  <div
                    id="js-clock-in-out"
                    class="card dashboard-icon-widget clock-in-out-card"
                  >
                    <div class="card-body">
                      <div class="widget-icon  bg-info ">
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
                          class="feather feather-clock icon"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>

                      <div class="widget-details">
                        <a
                          class="btn btn-default text-primary"
                          title="Clock Out"
                          id="timecard-clock-out"
                          data-post-id="255"
                          data-post-clock_out="1"
                          data-act="ajax-modal"
                          data-title="Clock Out"
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
                            class="feather feather-log-out icon-16"
                          >
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                          </svg>
                          Clock Out
                        </a>
                        <div
                          class="mt5 bg-transparent-white"
                          title="29-07-2024 10:00:20 am"
                        >
                          Clock started at : 10:00:20 am
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="widget-container col-md-3">
                  <a
                    href="https://rise.fairsketch.com/tasks/all_tasks#my_open_tasks"
                    class="white-link"
                  >
                    <div class="card dashboard-icon-widget">
                      <div class="card-body">
                        <div class="widget-icon bg-info">
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
                            class="feather feather-list icon"
                          >
                            <line x1="8" y1="6" x2="21" y2="6"></line>
                            <line x1="8" y1="12" x2="21" y2="12"></line>
                            <line x1="8" y1="18" x2="21" y2="18"></line>
                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                          </svg>
                        </div>
                        <div class="widget-details">
                          <h1>{totalTasks}</h1>
                          <span class="bg-transparent-white">Total tâches</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="widget-container col-md-3">
                  <a
                    href="https://rise.fairsketch.com/events"
                    class="white-link"
                  >
                    <div class="card dashboard-icon-widget">
                      <div class="card-body">
                        <div class="widget-icon bg-success">
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
                            class="feather feather-calendar icon"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                        </div>
                        <div class="widget-details">
                          <h1>{totalClients}</h1>
                          <span class="bg-transparent-white">
                            Total Clients
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="widget-container col-md-3">
                  <a href="" class="white-link">
                    <div class="card  dashboard-icon-widget">
                      <div class="card-body ">
                        <div class="widget-icon bg-coral">
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
                            class="feather feather-compass icon"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                          </svg>
                        </div>
                        <div class="widget-details">
                          <h1>${totalDue}</h1>
                          <span class="bg-transparent-white">Due</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="dashboards-row clearfix row">
                <div class="widget-container col-md-4">
                  <div class="card bg-white">
                    <div class="card-header">
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
                        class="feather feather-grid icon-16"
                      >
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                      </svg>{" "}
                      &nbsp;Aperçu Projets
                    </div>
                    <div class="rounded-bottom pt-2">
                      <div class="box">
                        <div class="box-content">
                          <a
                            href="https://rise.fairsketch.com/projects/all_projects/1"
                            class="text-default"
                          >
                            <div class="pt-3 pb10 text-center">
                              <div class="b-r">
                                <h4
                                  class="strong mb-1 mt-0"
                                  style={{ color: "#01B393" }}
                                >
                                  {totalProjet}
                                </h4>
                                <span>Crée</span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <a
                            href="https://rise.fairsketch.com/projects/all_projects/2"
                            class="text-default"
                          >
                            <div class="pt-3 pb10 text-center">
                              <div class="b-r">
                                <h4 class="strong mb-1 mt-0 text-danger">7</h4>
                                <span>Terminé</span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <a
                            href="https://rise.fairsketch.com/projects/all_projects/3"
                            class="text-default"
                          >
                            <div class="pt-3 pb10 text-center">
                              <div>
                                <h4 class="strong mb-1 mt-0 text-warning">0</h4>
                                <span>En cours</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div class="container project-overview-widget">
                        <div class="progress-outline">
                          <div class="progress mt5 m-auto position-relative">
                            <div
                              class="progress-bar bg-orange text-default"
                              role="progressbar"
                              style={{
                                width: "32%",
                                ariaValuenow: "32",
                                ariaValuemin: "0",
                                ariaValuemax: "100",
                              }}
                            >
                              <span class="justify-content-center d-flex position-absolute w-100">
                                Progression 32%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="widget-container col-md-4">
                  <div class="card bg-white">
                    <div class="card-header">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-users icon-16"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      &nbsp;
                    </div>
                    <div class="row">
                      <div class="col-md-5 col-5">
                        <div class="pl30 pt30">
                          <div class="b-r">
                            <h3 class="mt-0 mb-1 strong text-danger">0</h3>
                            <div class="text-truncate">Reminder Today</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-7 col-7">
                        <div class="pl0 mt5 p30">
                          <div class="mt-0 mb-1 text-truncate">
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
                              class="feather feather-bell icon text-danger"
                            >
                              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                            <span class="ml5">Next reminder</span>
                          </div>
                          <div class="text-truncate">
                            <span class="text-off">No reminder</span>
                          </div>
                          <h3>Historique des changements</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="widget-container col-md-4">
                  <div class="card bg-white">
                    <div class="card-header">
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
                        class="feather feather-users icon-16"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      &nbsp;Aperçu Utilisateurs
                    </div>
                    <div class="rounded-bottom">
                      <div class="box pt-3">
                        <div class="box-content">
                          <a class="text-default">
                            <div class="pt-3 pb-3 text-center">
                              <div class=" b-r">
                                <h3 class="mt-0 strong mb5">5</h3>
                                <div>Membres équipe</div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <a class="text-default">
                            <div class="p-3 text-center">
                              <h3 class="mt-0 strong mb5 text-warning">0</h3>
                              <div>Nombre d'utilisateursy</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="box pb-3">
                        <div class="box-content">
                          <a class="text-default">
                            <div class="pt-3 pb-3 text-center">
                              <div class="b-r">
                                <h3 class="mt-0 mb-1 strong text-danger">3</h3>
                                <div
                                  class="progress h7 w-50 m-auto mb-1"
                                  title="60%"
                                >
                                  <div
                                    class="progress-bar bg-danger"
                                    role="progressbar"
                                    style={{ width: "60%" }}
                                    aria-valuenow="60"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                                <div>Nombre d'équipe complet</div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <a class="text-default">
                            <div class="pt-3 pb-3 text-center">
                              <h3 class="mt-0 mb-1 strong text-primary">2</h3>
                              <div
                                class="progress h7 w-50 m-auto mb-1"
                                title="40%"
                              >
                                <div
                                  class="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "40%" }}
                                  aria-valuenow="40"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                              <div>Utilisateurs connecté </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dashboards-row clearfix row">
                <ul>
                  {modifications.length > 0 ? ( // Utiliser "modifications" à la place de "history"
                    modifications.map((entry) => (
                      <li key={entry.id}>
                        {entry.modified_at}: {entry.operation} sur la table{" "}
                        {entry.table_name}
                        (Enregistrement ID: {entry.record_id}) par utilisateur{" "}
                        {entry.modified_by}
                      </li>
                    ))
                  ) : (
                    <p>Aucun historique à afficher</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span
        role="status"
        aria-live="polite"
        class="select2-hidden-accessible"
      ></span>
    </div>
  );
};

export default Dashboard;
