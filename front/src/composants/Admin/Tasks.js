import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { FaBeer } from 'react-icons/fa'; // Import d'une icône spécifique (ici une icône de FontAwesome)
import { FaPlus, FaCheckCircle, FaSpinner, FaClipboardCheck } from 'react-icons/fa'; // Import des icônes
import { Button } from 'react-bootstrap';
import AddTaskModal from "../Modal/AddTaskModal";


const renderTask = (task) => {
    let priorityIcon;
    let priorityColor;

    switch (task.priority.toLowerCase()) {
        case 'high':
            priorityIcon = (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up icon-14">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
            );
            priorityColor = '#e18a00'; // Couleur pour haute priorité
            break;
        case 'low':
            priorityIcon = (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down icon-14">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="5 12 12 19 19 12"></polyline>
                </svg>
            );
            priorityColor = '#aab7b7'; // Couleur pour basse priorité
            break;
        default:
            priorityIcon = null;
            priorityColor = '#ddd'; // Couleur par défaut pour priorité moyenne
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
                    style={{ width: '30px', height: '30px', borderRadius: '50%' }}
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
                        {task.labels.split(',').map((label, index) => {
                            let labelColor;
                            switch (label.trim().toLowerCase()) {
                                case 'feedback':
                                    labelColor = '#0096FF'; // Vert qui ressemble à un bleu pour Feedback
                                    break;
                                case 'design':
                                    labelColor = '#28a745'; // Vert pour Design
                                    break;
                                case 'amelioration':
                                    labelColor = '#007bff'; // Bleu pour Amélioration
                                    break;
                                default:
                                    labelColor = '#d3d3d3'; // Gris clair pour les autres labels
                                    break;
                            }
                            return (
                                <span
                                    key={index}
                                    className="task-label"
                                    style={{
                                        backgroundColor: labelColor,
                                        color: '#fff',
                                        padding: '2px 6px',
                                        borderRadius: '4px',
                                        marginRight: '5px',
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
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
  
    const [tasks, setTasks] = useState({
        'to do': [],
        'in progress': [],
        'review': [],
        'done': []
    });

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/tasks');
                const data = await response.json();
                const tasksByStatus = data.reduce((acc, task) => {
                    if (!acc[task.status]) {
                        acc[task.status] = [];
                    }
                    acc[task.status].push(task);
                    return acc;
                }, {});
                setTasks(tasksByStatus);
            } catch (error) {
                console.error('Erreur lors de la récupération des tâches:', error);
            }
        };
    
        fetchTasks();
    }, []);



    useEffect(() => {
      const activeTab = "tasks_kanban";
      const selectedTab = document.cookie.split('; ').find(row => row.startsWith('selected_tab_1='));
  
      if (selectedTab && selectedTab.split('=')[1] !== activeTab) {
        window.location.href = "https://rise.fairsketch.com/tasks/all_tasks_kanban";
      }
  
      const handleClick = (tab) => {
        document.cookie = `selected_tab_1=${tab}`;
      };
  
      const tabs = document.querySelectorAll('.js-cookie-tab');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => handleClick(tab.getAttribute('data-tab')));
      });
  
      return () => {
        tabs.forEach(tab => {
          tab.removeEventListener('click', handleClick);
        });
      };
    }, []);

    return (
        <div>
            <Navbar/>

            <div id="left-menu-toggle-mask" style={{ height: '723px', position: 'relative', overflowY: 'scroll' }}>

                <Sidebar />

                <div class="overflow-auto page-container">
                    <div class="scrollable-page main-scrollable-page" style={{height: "551px", position: "relative", overfloy: "scroll"}}>
                        <div id="page-content" class="page-wrapper pb0 clearfix grid-button all-tasks-kanban-view" style={{minHeight: "501px"}}>
                            <ul class="nav nav-tabs bg-white title" role="tablist">
                                <li class="title-tab all-tasks-kanban">
                                    <h4 class="pl15 pt10 pr15">Tasks</h4>
                                </li>
                                
                                <li class="js-cookie-tab active" data-tab="tasks_kanban">
                                    <a>Kanban</a>
                                </li>
                                <div className="tab-title clearfix no-border">
                                    <div className="title-button-group">
                                        <a 
                                            href="#" 
                                            className="btn btn-info text-white hide batch-update-btn" 
                                            title="Batch update" 
                                            data-act="ajax-modal" 
                                            data-title="Batch update" 
                                            data-action-url=""
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2 icon-16">
                                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                            </svg> 
                                            Batch update
                                        </a>
                                        <a href="#" className="hide btn btn-default batch-cancel-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x icon-16">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg> 
                                            Cancel selection
                                        </a>
                                        <a 
                                            href="#" 
                                            className="btn btn-default" 
                                            title="Add multiple tasks" 
                                            data-post-add_type="multiple" 
                                            data-act="ajax-modal" 
                                            data-title="Add multiple tasks" 
                                            data-action-url="https://rise.fairsketch.com/tasks/modal_form"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle icon-16">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="12" y1="8" x2="12" y2="16"></line>
                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                            </svg> 
                                            Add multiple tasks
                                        </a>
                                        <a
        href="#"
        className="btn btn-default"
        title="Add task"
        onClick={handleShow}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle icon-16">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        Add task
      </a>

      <AddTaskModal show={showModal} handleClose={handleClose} />
    
                                    </div>
                                </div>

                            </ul>
                            <div class="bg-white" id="js-kanban-filter-container">
                                <div id="kanban-filters">
                                    <div class="filter-section-container">
                                        <div class="filter-section-flex-row">
                                            <div class="filter-section-left">
                                                <div class="filter-item-box">
                                                    <button class="btn btn-default" id="reload-kanban-button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw icon-16">
                                                            <polyline points="23 4 23 10 17 10"></polyline>
                                                            <polyline points="1 20 1 14 7 14"></polyline>
                                                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div class="filter-item-box">
                                                    <div class="dropdown smart-filter-dropdown-container">
                                                        <button class="btn btn-default smart-filter-dropdown dropdown-toggle caret" type="button" data-bs-toggle="dropdown" aria-expanded="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter icon-16 mr5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>Filters
                                                        </button>
                                                        <div class="dropdown-menu w300">
                                                            <div class="pb10 pl10">
                                                                <a class="inline-block btn btn-default manage-filters-button" data-act="ajax-modal" data-title="Manage Filters" data-post-context="all_tasks_kanban" data-post-instance_id="kanban-filters" type="button" data-action-url="https://rise.fairsketch.com/index.php/filters/manage_modal/all_tasks_kanban">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tool icon-16 mr5">
                                                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z">
                                                                        </path>
                                                                    </svg>Manage Filters 
                                                                </a>
                                                                <a class="inline-block btn btn-default clear-filter-button ml10 hide" >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-delete icon-16 mr5">
                                                                        <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                                                                        <line x1="18" y1="9" x2="12" y2="15"></line>
                                                                        <line x1="12" y1="9" x2="18" y2="15"></line>
                                                                    </svg>Clear
                                                                </a>
                                                            </div>
                                                            <input type="text" class="form-control search-filter" placeholder="Search"/>
                                                            <div class="dropdown-divider"></div>
                                                            <ul class="list-group smart-filter-list-group">
                                                                <li><a  class="dropdown-item smart-filter-item list-group-item clickable  " data-id="wxgvizqpbd">All tasks</a>
                                                                </li>
                                                                <li><a  class="dropdown-item smart-filter-item list-group-item clickable  " data-id="uyprvjoabx">Bug</a>
                                                                </li><li><a  class="dropdown-item smart-filter-item list-group-item clickable  " data-id="ysunozjtnm">Critical</a>
                                                                </li><li><a  class="dropdown-item smart-filter-item list-group-item clickable  " data-id="ckictkmymt">Major</a>
                                                                </li><li><a  class="dropdown-item smart-filter-item list-group-item clickable  " data-id="tlnpmbosnh">My tasks</a>
                                                                </li><li><a  class="dropdown-item smart-filter-item list-group-item clickable  " data-id="bhcvpxosnw">Recently updated</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="filter-form hide">
                                            <div class="filter-item-box">
                                                <div class="select2-container w200" id="s2id_autogen1">
                                                    <a href="javascript:void(0)" class="select2-choice" tabindex="-1">   
                                                        <span class="select2-chosen" id="select2-chosen-2">- Quick filters -</span>
                                                        <abbr class="select2-search-choice-close"></abbr>   
                                                        <span class="select2-arrow" role="presentation"><b role="presentation"></b>
                                                        </span></a><label for="s2id_autogen2" class="select2-offscreen"></label>
                                                <input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-2" id="s2id_autogen2"/>
                                                <div class="select2-drop select2-display-none select2-with-searchbox">   
                                                    <div class="select2-search">       
                                                        <label for="s2id_autogen2_search" class="select2-offscreen"></label>       
                                                        <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-2" id="s2id_autogen2_search" placeholder=""/>   
                                                    </div>   
                                                    <ul class="select2-results" role="listbox" id="select2-results-2">   </ul>
                                                </div></div><input class="w200" name="quick_filter" tabindex="-1" title="" style={{display: 'none'}}/>
                                            </div>
                                            <div class="filter-item-box">
                                                <div class="select2-container w200" id="s2id_autogen3">
                                                    <a href="javascript:void(0)" class="select2-choice" tabindex="-1">   
                                                        <span class="select2-chosen" id="select2-chosen-4">- Related to -</span>
                                                        <abbr class="select2-search-choice-close"></abbr>  
                                                        <span class="select2-arrow" role="presentation"><b role="presentation"></b>
                                                        </span>
                                                    </a>
                                                    <label for="s2id_autogen4" class="select2-offscreen"></label>
                                                    <input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-4" id="s2id_autogen4"/>
                                                    <div class="select2-drop select2-display-none select2-with-searchbox">  
                                                        <div class="select2-search">   
                                                            <label for="s2id_autogen4_search" class="select2-offscreen"></label>  
                                                            <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-4" id="s2id_autogen4_search" placeholder=""/> 
                                                        </div>   
                                                        <ul class="select2-results" role="listbox" id="select2-results-4">  
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <select class="w200" name="context" tabindex="-1" title="" style={{display: 'none'}}>
                                                        <option value="">- Related to -</option>
                                                        <option value="project">Project</option>
                                                        <option value="client">Client</option>
                                                        <option value="contract">Contract</option>
                                                        <option value="estimate">Estimate</option>
                                                        <option value="expense">Expense</option>
                                                        <option value="invoice">Invoice</option>
                                                        <option value="lead">Lead</option>
                                                        <option value="order">Order</option>
                                                        <option value="proposal">Proposal</option>
                                                        <option value="subscription">Subscription</option>
                                                        <option value="ticket">Ticket</option>
                                                    </select>
                                            </div>
                                            <div class="filter-item-box">
                                                <div class="select2-container w200" id="s2id_autogen5">
                                                    <a href="javascript:void(0)" class="select2-choice" tabindex="-1">   
                                                        <span class="select2-chosen" id="select2-chosen-6">- Project -
                                                        </span><abbr class="select2-search-choice-close"></abbr>   
                                                        <span class="select2-arrow" role="presentation"><b role="presentation"></b>
                                                        </span>
                                                    </a>
                                                    <label for="s2id_autogen6" class="select2-offscreen"></label>
                                                    <input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-6" id="s2id_autogen6">
                                                    </input>
                                                    <div class="select2-drop select2-display-none select2-with-searchbox">
                                                        <div class="select2-search">   
                                                            <label for="s2id_autogen6_search" class="select2-offscreen"></label>  
                                                            <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-6" id="s2id_autogen6_search" placeholder=""/>
                                                    </div>
                                                    <ul class="select2-results" role="listbox" id="select2-results-6">   
                                                    </ul>
                                                    </div>
                                                </div>
                                                <select class="w200" name="project_id" tabindex="-1" title="" style={{display: 'none'}}>
                                                    <option value="">- Project -</option>
                                                    <option value="1">Mobile App Development</option>
                                                    <option value="2">E-commerce Website Design</option>
                                                    <option value="4">Brand Identity Creation</option>
                                                    <option value="5">Content Writing and Blogging</option>
                                                    <option value="7">SEO Optimization Strategy</option>
                                                    <option value="8">UI/UX Design for Web App</option>
                                                    <option value="9">Graphic Design for Print Materials</option>
                                                    <option value="12">Product Photography and Cataloging</option>
                                                    <option value="13">Social Media Influencer Collaboration</option>
                                                    <option value="14">Market Research and Analysis</option>
                                                    <option value="15">Email Marketing Campaign</option>
                                                    <option value="16">Motion Graphics and Explainer Videos</option>
                                                    <option value="17">WordPress Plugin Development</option>
                                                    <option value="18">Logo Redesign and Modernization</option>
                                                    <option value="19">Website Maintenance and Updates</option>
                                                    <option value="20">Custom Illustrations and Artwork</option>
                                                    <option value="21">Mobile Game Development</option>
                                                    <option value="22">Copywriting for Advertisements</option>
                                                    <option value="23">Online Course Creation and Launch</option>
                                                    <option value="24">Product Packaging Design</option>
                                                    <option value="25">Data Analysis and Insights</option>
                                                    <option value="28">Virtual Reality Experience Design</option>
                                                    <option value="30">Business Card and Stationery Design</option>
                                                    <option value="31">test</option>
                                                </select>
                                            </div>
                                            <div class="filter-item-box">
                                                <div class="select2-container w200" id="s2id_autogen7">
                                                    <a href="javascript:void(0)" class="select2-choice" tabindex="-1">  
                                                        <span class="select2-chosen" id="select2-chosen-8">- Milestone -
                                                        </span>
                                                        <abbr class="select2-search-choice-close"></abbr> 
                                                        <span class="select2-arrow" role="presentation">
                                                            <b role="presentation"></b>
                                                        </span>
                                                    </a>
                                                    <label for="s2id_autogen8" class="select2-offscreen"></label>
                                                    <input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-8" id="s2id_autogen8">
                                                    </input>
                                                    <div class="select2-drop select2-display-none select2-with-searchbox"> 
                                                        <div class="select2-search">     
                                                            <label for="s2id_autogen8_search" class="select2-offscreen"></label>     
                                                            <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-8" id="s2id_autogen8_search" placeholder=""/>  
                                                        </div>
                                                        <ul class="select2-results" role="listbox" id="select2-results-8">  
                                                        </ul>
                                                    </div>

                                                </div>
                                                <select class="w200" name="milestone_id" tabindex="-1" title="" style={{display: 'none'}}>
                                                    <option value="">- Milestone -</option>
                                                </select>
                                            </div>
                                            <div class="filter-item-box">
                                                <div class="select2-container w200" id="s2id_autogen9">
                                                    <a href="javascript:void(0)" class="select2-choice" tabindex="-1">   
                                                        <span class="select2-chosen" id="select2-chosen-10">John Doe </span>
                                                        <abbr class="select2-search-choice-close"></abbr>   
                                                        <span class="select2-arrow" role="presentation">
                                                            <b role="presentation"></b>
                                                        </span>
                                                    </a>
                                                    <label for="s2id_autogen10" class="select2-offscreen"></label>
                                                    <input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-10" id="s2id_autogen10">
                                                    </input>
                                                    <div class="select2-drop select2-display-none select2-with-searchbox">  
                                                        <div class="select2-search">    
                                                            <label for="s2id_autogen10_search" class="select2-offscreen"></label>    
                                                        <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-10" id="s2id_autogen10_search" placeholder=""/>
                                                        </div> 
                                                        <ul class="select2-results" role="listbox" id="select2-results-10">  
                                                        </ul>
                                                    </div>
                                                

                                                </div>
                                                <select class="w200" name="specific_user_id" tabindex="-1" title="" style={{display: 'none'}}>
                                                    <option value="">- Team member -</option><option value="6">Ayan Francis </option>
                                                    <option selected="" value="1">John Doe </option>
                                                    <option value="5">Mark Thomas </option>
                                                    <option value="2">Michael Wood </option>
                                                    <option value="4">Richard Gray </option>
                                                    <option value="3">Sara Ann </option>
                                                </select>
                                            </div>
                                            <div class="filter-item-box">
                                                <div class="select2-container w200" id="s2id_autogen11">
                                                    <a href="javascript:void(0)" class="select2-choice" tabindex="-1">   
                                                        <span class="select2-chosen" id="select2-chosen-12">- Priority -
                                                        </span>
                                                        <abbr class="select2-search-choice-close"></abbr>  
                                                        <span class="select2-arrow" role="presentation">
                                                            <b role="presentation"></b>
                                                        </span>
                                                    </a>
                                                    <label for="s2id_autogen12" class="select2-offscreen"></label>
                                                    <input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-12" id="s2id_autogen12">
                                                    </input>
                                                    <div class="select2-drop select2-display-none select2-with-searchbox">  
                                                        <div class="select2-search">      
                                                            <label for="s2id_autogen12_search" class="select2-offscreen"></label>    
                                                            <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-12" id="s2id_autogen12_search" placeholder=""/>
                                                        </div>  
                                                        <ul class="select2-results" role="listbox" id="select2-results-12"> 
                                                        </ul>
                                                    </div>
                                                </div>
                                                <select class="w200" name="priority_id" tabindex="-1" title="" style={{display: 'none'}}>
                                                    <option value="">- Priority -</option><option value="1">Minor</option>
                                                    <option value="2">Major</option>
                                                    <option value="3">Critical </option>
                                                    <option value="4">Blocker </option>
                                                </select>
                                            </div>
                                            <div class="filter-item-box">
                                                <div class="select2-container w200" id="s2id_autogen13">
                                                    <a href="javascript:void(0)" class="select2-choice" tabindex="-1">  
                                                        <span class="select2-chosen" id="select2-chosen-14">- Label -
                                                        </span>
                                                        <abbr class="select2-search-choice-close">
                                                        </abbr>  
                                                        <span class="select2-arrow" role="presentation">
                                                            <b role="presentation"></b>
                                                        </span>
                                                    </a>
                                                    <label for="s2id_autogen14" class="select2-offscreen">
                                                    </label>
                                                    <input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-14" id="s2id_autogen14"/>
                                                    <div class="select2-drop select2-display-none select2-with-searchbox">  
                                                        <div class="select2-search">      
                                                            <label for="s2id_autogen14_search" class="select2-offscreen"></label> 
                                                            <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-14" id="s2id_autogen14_search" placeholder=""/>
                                                        </div>  
                                                        <ul class="select2-results" role="listbox" id="select2-results-14">  
                                                        </ul>
                                                    </div>
                                                </div>
                                                <select class="w200" name="label_id" tabindex="-1" title="" style={{display: 'none'}}>
                                                    <option value="">- Label -</option>
                                                    <option value="7">Feedback</option>
                                                    <option value="6">Bug</option>
                                                    <option value="5">Enhancement</option>
                                                    <option value="4">Design</option>
                                                </select>
                                            </div>
                                            <div class="filter-item-box">
                                                <button name="deadline" class="btn w200 datepicker-custom-selector">- Deadline -
                                                    <span class="ml10 dropdown-toggle"></span>
                                                </button>
                                            </div>
                                            <div class="filter-item-box save-filter-box hide">
                                                <button class="btn btn-default save-filter-button" data-act="ajax-modal" data-title="" data-post-context="all_tasks_kanban" data-post-instance_id="kanban-filters" type="button" data-action-url="https://rise.fairsketch.com/index.php/filters/modal_form">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle icon-16">
                                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="filter-item-box filter-cancel-box">
                                                <button class="btn btn-default cancel-filter-button" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle icon-16">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="15" y1="9" x2="9" y2="15"></line>
                                                        <line x1="9" y1="9" x2="15" y2="15"></line>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="load-kanban">
                                <div id="kanban-wrapper" style={{ overflowX: 'scroll' }}>
                                    <ul id="kanban-container" className="kanban-container clearfix" style={{ width: '1345px' }}>
                                        {Object.entries(tasks).map(([status, taskList]) => (
                                            <li key={status} className={`kanban-col kanban-${status.replace(' ', '-')}`}>
                                                <div
                                                    className="kanban-col-title"
                                                    style={{
                                                        borderBottom: `3px solid ${
                                                            status === 'to do' ? '#F9A52D' :
                                                            status === 'in progress' ? '#1672B9' :
                                                            status === 'review' ? '#ad159e' : // Violet pour review
                                                            '#00B393'
                                                        }`
                                                    }}
                                                >
                                                    {status.charAt(0).toUpperCase() + status.slice(1)}
                                                    <span className={`kanban-item-count ${status.replace(' ', '-')}-task-count float-end`}>
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
                                                    id={`kanban-item-list-${status.replace(' ', '-')}`}
                                                    className="kanban-item-list"
                                                    data-status-id={status}
                                                    style={{ height: '237.375px', overflowY: 'scroll' }}
                                                >
                                                    {taskList.map(renderTask)}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="ajaxModal" role="dialog" aria-labelledby="ajaxModal" data-bs-backdrop="static" data-bs-keyboard="true" aria-hidden="true" data-bs-focus="false">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="ajaxModalTitle" data-title="RISE - Ultimate Project Manager and CRM"></h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div id="ajaxModalContent">
                        </div>
                        <div id="ajaxModalOriginalContent" class="hide">
                            <div class="original-modal-body">
                                <div class="circle-loader"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tasks