import React from 'react';

const Navbar = () => {
return (
    <div>
        <nav class="navbar navbar-expand fixed-top navbar-light navbar-custom shadow-sm" role="navigation">
            <div class="container-fluid">
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link sidebar-toggle-btn" aria-current="page">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu icon"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="https://rise.fairsketch.com/todo" class=" nav-link dropdown-toggle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle icon"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></a>
                        </li>

                        <li class="nav-item dropdown hidden-xs">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-real-target="#projects-quick-list-container" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/projects/show_my_starred_projects/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid icon"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></a>    <div class="dropdown-menu dropdown-menu-start w400">
                                <div id="projects-quick-list-container">
                                    <div class="list-group">
                                        <span class="list-group-item inline-loader p20"></span>                          
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item dropdown hidden-xs">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-real-target="#clients-quick-list-container" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/clients/show_my_starred_clients/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase icon"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></a>            <div class="dropdown-menu dropdown-menu-start w400">
                                <div id="clients-quick-list-container">
                                    <div class="list-group">
                                        <span class="list-group-item inline-loader p20"></span>                          
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item dropdown hidden-xs">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-real-target="#my-dashboards-list-container" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/dashboard/show_my_dashboards/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor icon"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a>    <div class="dropdown-menu dropdown-menu-start w300">
                                <div id="my-dashboards-list-container">
                                    <div class="list-group">
                                        <span class="list-group-item inline-loader p20"></span>                          
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div class="d-flex w-auto">
                        <ul class="navbar-nav">
                            <li class="nav-item hidden-sm" title="Search (/)">
                                <a href="#" class="nav-link" data-modal-title="Search (/)" data-post-hide-header="1" data-modal-close="1" id="global-search-btn" data-act="ajax-modal" data-title="Search (/)" data-action-url="https://rise.fairsketch.com/search/search_modal_form"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search icon">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </a>                     
                            </li>
                            <li class="nav-item dropdown">
                                <a href="#" id="quick-add-icon" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle icon"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a href="#" class="dropdown-item clearfix" title="Add task" id="js-quick-add-task" data-act="ajax-modal" data-title="Add task" data-action-url="https://rise.fairsketch.com/tasks/modal_form">Add task</a><a href="#" class="dropdown-item clearfix" title="Add multiple tasks" data-post-add_type="multiple" id="js-quick-add-multiple-task" data-act="ajax-modal" data-title="Add multiple tasks" data-action-url="https://rise.fairsketch.com/tasks/modal_form">Add multiple tasks</a><a href="#" class="dropdown-item clearfix" title="Add project time" id="js-quick-add-project-time" data-act="ajax-modal" data-title="Add project time" data-action-url="https://rise.fairsketch.com/projects/timelog_modal_form">Add project time</a><a href="#" class="dropdown-item clearfix" title="Add event" data-post-client_id="" id="js-quick-add-event" data-act="ajax-modal" data-title="Add event" data-action-url="https://rise.fairsketch.com/events/modal_form">Add event</a><a href="#" class="dropdown-item clearfix" title="Add note" id="js-quick-add-note" data-act="ajax-modal" data-title="Add note" data-action-url="https://rise.fairsketch.com/notes/modal_form">Add note</a><a href="#" class="dropdown-item clearfix" title="Add to do" id="js-quick-add-to-do" data-act="ajax-modal" data-title="Add to do" data-action-url="https://rise.fairsketch.com/todo/modal_form">Add to do</a><a href="#" class="dropdown-item clearfix" title="Add ticket" id="js-quick-add-ticket" data-act="ajax-modal" data-title="Add ticket" data-action-url="https://rise.fairsketch.com/tickets/modal_form">Add ticket</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a href="#" id="personal-language-icon" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe icon"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></a>
                                <ul class="dropdown-menu dropdown-menu-end language-dropdown">
                                    <li>
                                        <a href="#" class="dropdown-item clearfix" data-reload-on-success="1" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/team_members/save_personal_language/Spanish">Spanish</a><a href="#" class="dropdown-item clearfix" data-reload-on-success="1" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/team_members/save_personal_language/Norwegian">Norwegian</a><a href="#" class="dropdown-item clearfix" data-reload-on-success="1" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/team_members/save_personal_language/Portuguese">Portuguese</a><a href="#" class="dropdown-item clearfix" data-reload-on-success="1" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/team_members/save_personal_language/German">German</a><a href="#" class="dropdown-item clearfix" data-reload-on-success="1" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/team_members/save_personal_language/Polish">Polish</a><a href="#" class="dropdown-item clearfix" data-reload-on-success="1" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/team_members/save_personal_language/Czech">Czech</a><a href="#" class="dropdown-item clearfix" data-reload-on-success="1" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/team_members/save_personal_language/Italian">Italian</a><a href="#" class="dropdown-item clearfix" data-reload-on-success="1" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/team_members/save_personal_language/Dutch">Dutch</a><a href="#" class="dropdown-item clearfix" data-reload-on-success="1" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/team_members/save_personal_language/French">French</a><a href="#" class="dropdown-item clearfix" data-reload-on-success="1" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/team_members/save_personal_language/Russian">Russian</a><a href="#" class="dropdown-item clearfix" data-reload-on-success="1" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/team_members/save_personal_language/English"><strong>English</strong><span class="float-end checkbox-checked m0"></span></a><a href="#" class="dropdown-item clearfix" data-reload-on-success="1" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/team_members/save_personal_language/Greek">Greek</a>                                </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                    <a href="#" class="nav-link" id="reminder-icon" data-post-reminder_view_type="global" title="Reminders (Private)" data-act="ajax-modal" data-title="Reminders (Private)" data-action-url="https://rise.fairsketch.com/events/reminders"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock icon"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 
                                    </a>                       
                            </li>
                            <li class="nav-item dropdown">
                                <a href="#" id="web-notification-icon" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-total="3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell icon"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> <span class="badge bg-danger up">3</span></a>                        <div class="dropdown-menu dropdown-menu-end notification-dropdown w400">
                                    <div class="dropdown-details card bg-white m0">
                                        <div class="list-group">
                                            <span class="list-group-item inline-loader p10"></span>                          
                                        </div>
                                    </div>
                                    <div class="card-footer text-center mt-2">
                                        <a href="https://rise.fairsketch.com/notifications">See All</a>                            </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown hidden-sm ">
                                <a href="#" id="message-notification-icon" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>                            <div class="dropdown-menu dropdown-menu-end w300">
                                    <div class="dropdown-details card bg-white m0">
                                        <div class="list-group">
                                            <span class="list-group-item inline-loader p10"></span>                          
                                        </div>
                                    </div>
                                    <div class="card-footer text-center">
                                        <a href="https://rise.fairsketch.com/messages">See All</a>                                </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a id="user-dropdown" href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                                    <span class="avatar-xs avatar me-1">
                                        <img alt="..." src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                    </span>
                                    <span class="user-name ml10">John Doe</span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end w200 user-dropdown-menu">
                                        <li><a href="https://rise.fairsketch.com/team_members/view/1/general" class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user icon-16 me-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>My Profile</a></li>
                                        <li><a href="https://rise.fairsketch.com/team_members/view/1/account" class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key icon-16 me-2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>Change Password</a></li>
                                        <li><a href="https://rise.fairsketch.com/team_members/view/1/my_preferences" class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings icon-16 me-2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>My preferences</a></li>
                                                                            
                                        <li class="dropdown-divider"></li>    
                                        <li class="pl10 ms-2 mt10 theme-changer">
                                            <span class="color-tag clickable mr15 change-theme" data-color="F2F2F2" style={{background:"#F2F2F2"}}> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#00BCD4'}} data-color="00BCD4"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#17a589'}} data-color="17a589"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#1E202D'}} data-color="1E202D"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#1d2632'}} data-color="1d2632"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#2471a3'}} data-color="2471a3"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#2e405'}} data-color="2e4053"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#2e86c1'}} data-color="2e86c1"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#404040'}} data-color="404040"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#555a61'}} data-color="555a61"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#557bbb'}} data-color="557bbb"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#5d78ff'}} data-color="5d78ff"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#839192'}} data-color="839192"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#83c340'}} data-color="83c340"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#884ea0'}} data-color="884ea0"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#a6acaf'}} data-color="a6acaf"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#a93226'}} data-color="a93226"> </span>
                                            <span class="color-tag clickable mr15 change-theme" style={{background:'#d68910'}} data-color="d68910"> </span>    
                                        </li>

                                    
                                    <li class="dropdown-divider"></li>
                                    <li><a href="https://rise.fairsketch.com/signin/sign_out" class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out icon-16 me-2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Sign Out</a></li>
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
