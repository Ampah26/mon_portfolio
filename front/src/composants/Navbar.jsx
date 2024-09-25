import React from "react";
import Login from "./Login";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = ({ toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const nom = localStorage.getItem("nom");
  const prenom = localStorage.getItem("prenom");

  const handleLogout = () => {
    Swal.fire({
      icon: "question",
      title: "Êtes-vous sûr ?",
      text: "Voulez-vous vraiment vous déconnecter ?",
      showCancelButton: true,
      confirmButtonText: "Oui, déconnecter !",
      cancelButtonText: "Non, annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        // Supprimer les informations de connexion
        localStorage.removeItem("token");
        localStorage.removeItem("nom");
        localStorage.removeItem("prenom");

        // Rediriger vers la page de connexion
        navigate("/"); // Assure-toi que la route '/login' existe
      }
    });
  };

  return (
    <div>
      <nav
        class="navbar navbar-expand fixed-top navbar-light navbar-custom shadow-sm"
        role="navigation"
      >
        <div class="container-fluid">
          <div class="collapse navbar-collapse">
            <div class="d-flex w-auto"></div>
            <ul class="navbar-nav me-auto mb-lg-0">
              <li class="nav-item hidden-sm" title="Search (/)">
                <a
                  class="nav-link"
                  data-modal-title="Search (/)"
                  data-post-hide-header="1"
                  data-modal-close="1"
                  id="global-search-btn"
                  data-act="ajax-modal"
                  data-title="Search (/)"
                  data-action-url="https://rise.fairsketch.com/search/search_modal_form"
                >
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
                    class="feather feather-search icon"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  id="reminder-icon"
                  data-post-reminder_view_type="global"
                  title="Reminders (Private)"
                  data-act="ajax-modal"
                  data-title="Reminders (Private)"
                  data-action-url="https://rise.fairsketch.com/events/reminders"
                >
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
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  id="web-notification-icon"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  data-total="3"
                >
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
                    class="feather feather-bell icon"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>{" "}
                  <span class="badge bg-danger up">3</span>
                </a>{" "}
                <div class="dropdown-menu dropdown-menu-end notification-dropdown w400">
                  <div class="dropdown-details card bg-white m0">
                    <div class="list-group">
                      <span class="list-group-item inline-loader p10"></span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown hidden-sm ">
                <a
                  id="message-notification-icon"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
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
                    class="feather feather-mail icon"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>{" "}
                <div class="dropdown-menu dropdown-menu-end w300">
                  <div class="dropdown-details card bg-white m0">
                    <div class="list-group">
                      <span class="list-group-item inline-loader p10"></span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div class="d-flex w-auto">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a
                    id="user-dropdown"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    <span class="avatar-xs avatar me-1">
                      <img
                        alt="..."
                        src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"
                      />
                    </span>
                    {nom && prenom ? (
                      <span class="user-name ml10">
                        Bienvenue, {prenom} {nom}
                      </span>
                    ) : (
                      <span class="user-name ml10">Utilisateur</span>
                    )}
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end w200 user-dropdown-menu">
                    {nom && prenom ? (
                      <>
                        <li>
                          <a
                            href="https://rise.fairsketch.com/team_members/view/1/general"
                            class="dropdown-item"
                          >
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
                              class="feather feather-user icon-16 me-2"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>{" "}
                            Mon profil
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://rise.fairsketch.com/team_members/view/1/account"
                            class="dropdown-item"
                          >
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
                              class="feather feather-key icon-16 me-2"
                            >
                              <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                            </svg>{" "}
                            Modifier mot de passe
                          </a>
                        </li>

                        <li class="dropdown-divider"></li>
                        <li>
                          <a class="dropdown-item" onClick={handleLogout}>
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
                              class="feather feather-log-out icon-16 me-2"
                            >
                              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                              <polyline points="16 17 21 12 16 7"></polyline>
                              <line x1="21" y1="12" x2="9" y2="12"></line>
                            </svg>{" "}
                            Deconnexion
                          </a>
                        </li>
                      </>
                    ) : (
                      <li class="dropdown-item">
                        <button
                          class="btn btn-primary w-100"
                          onClick={() => (window.location.href = "/")}
                        >
                          Veuillez vous connecter
                        </button>
                      </li>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
