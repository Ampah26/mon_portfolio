import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
function Dashboard () {
 

    return (
        <div>
            <Navbar/>

            <div id="left-menu-toggle-mask" style={{ height: '723px', position: 'relative', overflowY: 'scroll' }}>

                <Sidebar />

                <div class="page-container">
                    <div class="main-scrollable-page">
                        <div id="page-content" class="page-wrapper clearfix dashboard-view" style={{ minHeight: '474px'}}>
                            <div class="clearfix mb15 dashbaord-header-area">
                                <div class="clearfix float-start">
                                   <span class="float-start p10 pl0">
                                        <span style={{backgroundColor: '#4a8af4'}} class="color-tag border-circle"></span>
                                    </span>
                                    <h4 class="float-start">Tasks</h4>
                                </div>
                                <div class="float-end clearfix">
                                    <span class="float-end dropdown dashboard-dropdown ml10">
                                        <div class="dropdown-toggle clickable" data-bs-toggle="dropdown" aria-expanded="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal icon-16">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg>

                                        </div>
                                        <ul class="dropdown-menu dropdown-menu-end mt-1" role="menu">
                                            <li role="presentation" class="hidden-xs">
                                                <a href="https://rise.fairsketch.com/dashboard/edit_dashboard/1" title="Edit dashboard" class="dropdown-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-columns icon-16">
                                                        <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18">
                                                        </path>
                                                    </svg> 
                                                    Edit dashboard
                                                </a> 
                                            </li>
                                            <li role="presentation">
                                                <a href="#" title="Edit title" id="dashboard-edit-title-button" class="dropdown-item" data-act="ajax-modal" data-title="Edit title" data-action-url="https://rise.fairsketch.com/dashboard/modal_form/1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit icon-16">
                                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                                                        </path>
                                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                                                        </path>
                                                    </svg>
                                                     Edit title
                                                </a>
                                             </li>
                                             <li role="presentation">
                                                    <a href="#" class="delete dropdown-item" data-post-id="1" data-reload-on-success="1" data-bs-toggle="tooltip" data-placement="left" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/dashboard/mark_as_default">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor icon-16">
                                                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2">
                                                            </rect>
                                                            <line x1="8" y1="21" x2="16" y2="21">
                                                            </line><line x1="12" y1="17" x2="12" y2="21">
                                                            </line>
                                                        </svg> 
                                                        Mark as default
                                                    </a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#" title="Delete" class="delete dropdown-item" data-id="1" data-action-url="https://rise.fairsketch.com/dashboard/delete" data-action="delete-confirmation" data-success-callback="onDashboardDeleteSuccess">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x icon-16">
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg> Delete
                                                </a> 
                                            </li>


                                        </ul>
                                    </span>
                                    <span class="float-end" id="dashboards-color-tags">
                                        <a href="">
                                            <span class="clickable p10 mr5 inline-block">
                                                <span style={{backgroundColor: '#fff'}} class="color-tag " title="Default dashboard">
                                                </span>
                                            </span>
                                        </a>
                                        <a href="">
                                            <span class="clickable p10 mr5 inline-block">
                                                <span style={{backgroundColor: '#4a8af4'}} class="color-tag border-circle" title="Tasks">
                                                </span>
                                            </span>
                                        </a>   
                                    </span>
                                </div>
                            </div>
                            <div class="clearfix row">
                                <div class="col-md-12 widget-container">
                                </div>
                            </div>
                            <div class="dashboards-row clearfix row">
                                <div class="widget-container col-md-12">
                                    <div class="clearfix">
                                        <div class="bg-white pb0 rounded-top" id="js-kanban-filter-container">
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
                                                                            <a class="inline-block btn btn-default clear-filter-button ml10 hide" href="#">
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
                                                                            <li><a href="#" class="dropdown-item smart-filter-item list-group-item clickable  " data-id="wxgvizqpbd">All tasks</a>
                                                                            </li>
                                                                            <li><a href="#" class="dropdown-item smart-filter-item list-group-item clickable  " data-id="uyprvjoabx">Bug</a>
                                                                            </li><li><a href="#" class="dropdown-item smart-filter-item list-group-item clickable  " data-id="ysunozjtnm">Critical</a>
                                                                            </li><li><a href="#" class="dropdown-item smart-filter-item list-group-item clickable  " data-id="ckictkmymt">Major</a>
                                                                            </li><li><a href="#" class="dropdown-item smart-filter-item list-group-item clickable  " data-id="tlnpmbosnh">My tasks</a>
                                                                            </li><li><a href="#" class="dropdown-item smart-filter-item list-group-item clickable  " data-id="bhcvpxosnw">Recently updated</a>
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
                                            <div id="kanban-wrapper" style={{overflowX: 'scroll'}}>
                                                <ul id="kanban-container" class="kanban-container clearfix" style={{width:" 1345px"}}>
                                                    <li class="kanban-col kanban-1">
                                                        <div class="kanban-col-title" style={{ borderBottom: '3px solid #F9A52D' }}> 
                                                            To do
                                                            <span class="kanban-item-count 1-task-count float-end">19 </span>
                                                        </div>
                                                        <div class="kanban-input general-form hide">
                                                            <input type="text" name="title" value="" id="title" class="form-control" placeholder="Add a task..."/>
                                                        </div>
                                                        <div id="kanban-item-list-1" class="kanban-item-list js-load-more-on-scroll" data-status_id="1" style={{height: '237.375px', overflowY: 'scroll'}}>
                                                            <a class="kanban-item d-block " data-status_id="1" title="Task info #3435">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                    3435. Measure influencer campaign success
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#e18a00"}} aria-label="Priority: Major">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>

                                                            </a>
                                                            <a class="kanban-item d-block" data-status_id="1">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#aab7b7"}} aria-label="Priority: Minor">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down icon-14">
                                                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                            <polyline points="19 12 12 19 5 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#4a8af4"}} title="Label">Enhancement
                                                                    </span> 
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a  class="kanban-item d-block  " data-status_id="1" data-id="3517" data-project_id="20" data-sort="7517" data-post-id="3517" title="Task info #3517" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3517" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>3517. Sketch and outline illustrations
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#e18a00"}} aria-label="Priority: Major">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a  class="kanban-item d-block  " data-status_id="1" data-id="3432" data-project_id="13" data-sort="7849" data-post-id="3432" title="Task info #3432" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3432" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3432. Track influencer performance and reach
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#e18a00"}} aria-label="Priority: Major">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a  class="kanban-item d-block  " data-status_id="1" data-id="3530" data-project_id="21" data-sort="10246" data-post-id="3530" title="Task info #3530" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3530" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3530. Design game characters and assets
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#d43480"}} title="Label">
                                                                        Bug
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a  class="kanban-item d-block  " data-status_id="1" data-id="3381" data-project_id="9" data-sort="10746" data-post-id="3381" title="Task info #3381" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3381" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3381. Create promotional banners and ads
                                                                <div class="clearfix"></div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="1" data-id="3474" data-project_id="17" data-sort="12420" data-post-id="3474" title="Task info #3474" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3474" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3474. Define plugin functionality and scope
                                                                <div class="clearfix">
                                                                    <div class="mt10 font-12 float-start" title="Start date">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar icon-14 text-off mr5">
                                                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                                                        </svg> 21-07-2024
                                                                    </div>
                                                                    <div class="mt10 font-12 float-end" title="Deadline">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar icon-14 text-off mr5">
                                                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                                                        </svg> 
                                                                        27-07-2024
                                                                    </div>
                                                                </div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#ad159e"}} aria-label="Priority: Critical ">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle icon-14">
                                                                            <circle cx="12" cy="12" r="10"></circle>
                                                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="1" data-id="3459" data-project_id="15" data-sort="12840" data-post-id="3459" title="Task info #3459" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3459" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3459. Schedule email campaign sends
                                                                <div class="clearfix"></div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a  class="kanban-item d-block  " data-status_id="1" data-id="3482" data-project_id="17" data-sort="14860" data-post-id="3482" title="Task info #3482" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3482" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3482. Ensure plugin security and updates
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#4a8af4"}} title="Label">
                                                                        Enhancement
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="1" data-id="3529" data-project_id="21" data-sort="15391" data-post-id="3529" title="Task info #3529" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3529" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3529. Create game concept and storyline
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#e18a00"}} aria-label="Priority: Major">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#4a8af4"}} title="Label">
                                                                        Enhancement
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a  class="kanban-item d-block  " data-status_id="1" data-id="3427" data-project_id="13" data-sort="21333" data-post-id="3427" title="Task info #3427" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3427" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3427. Identify potential social media influencers
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#e18a00"}} aria-label="Priority: Major">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="1" data-id="3642" data-project_id="30" data-sort="29780" data-post-id="3642" title="Task info #3642" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3642" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3642. Add company logo and contact details
                                                                <div class="clearfix"></div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="1" data-id="3430" data-project_id="13" data-sort="29944" data-post-id="3430" title="Task info #3430" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3430" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3430. Send products or samples to influencers
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#e18a00"}} aria-label="Priority: Major">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#83c340"}} title="Label">Design</span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="1" data-id="3387" data-project_id="9" data-sort="30415" data-post-id="3387" title="Task info #3387" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3387" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3387. Optimize graphics for different media
                                                                <div class="clearfix"></div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="1" data-id="3368" data-project_id="8" data-sort="30832" data-post-id="3368" title="Task info #3368" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3368" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3368. Optimize app navigation and flow
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#aab7b7"}} aria-label="Priority: Minor">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down icon-14">
                                                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                            <polyline points="19 12 12 19 5 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#83c340"}} title="Label">Design</span> 
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li class="kanban-col kanban-2">
                                                        <div class="kanban-col-title" style={{borderBottom: "3px solid #1672B9"}}>
                                                             In progress 
                                                             <span class="kanban-item-count 2-task-count float-end">
                                                                13 
                                                            </span>
                                                        </div>
                                                        <div class="kanban-input general-form hide">
                                                            <input type="text" name="title" value="" id="title" class="form-control" placeholder="Add a task..."/>
                                                        </div>
                                                        <div id="kanban-item-list-2" class="kanban-item-list" data-status_id="2" style={{height: "237.375px", overflowY: "scroll"}}>
                                                            <a href="#" class="kanban-item d-block" data-status_id="2" data-id="3290" data-project_id="1" data-sort="277" data-post-id="3290" title="Task info #3290" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3290" data-action-url="https://rise.fairsketch.com/tasks/view" draggable="false">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png" draggable="false"/>
                                                                </span>
                                                                3290. Submit app to app stores for release
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#ad159e"}} aria-label="Priority: Critical ">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle icon-14">
                                                                            <circle cx="12" cy="12" r="10"></circle>
                                                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#d43480"}} title="Label">Bug</span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a href="#" class="kanban-item d-block  " data-status_id="2" data-id="3546" data-project_id="22" data-sort="865" data-post-id="3546" title="Task info #3546" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3546" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3546. A/B test ad variations
                                                                <div class="clearfix"></div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a href="#" class="kanban-item d-block  " data-status_id="2" data-id="3623" data-project_id="28" data-sort="5648" data-post-id="3623" title="Task info #3623" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3623" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3623. Use VR for training and simulations
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#e18a00"}} aria-label="Priority: Major">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#83c340"}} title="Label">
                                                                        Design
                                                                    </span> 
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a href="#" class="kanban-item d-block  " data-status_id="2" data-id="3319" data-project_id="4" data-sort="10312" data-post-id="3319" title="Task info #3319" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3319" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3319. Design brand packaging and labels
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#d43480"}} title="Label">Bug</span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a href="#" class="kanban-item d-block  " data-status_id="2" data-id="3525" data-project_id="20" data-sort="23230" data-post-id="3525" title="Task info #3525" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3525" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>3525. Create illustration assets for printing
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#4a8af4"}} title="Label">Enhancement</span> 
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a href="#" class="kanban-item d-block  " data-status_id="2" data-id="3509" data-project_id="19" data-sort="28747" data-post-id="3509" title="Task info #3509" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3509" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar"><img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>3509. Test website functionality and links
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#e18a00"}} aria-label="Priority: Major">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a href="#" class="kanban-item d-block  " data-status_id="2" data-id="3313" data-project_id="4" data-sort="30898" data-post-id="3313" title="Task info #3313" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3313" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar"><img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/></span>
                                                                3313. Conduct brand research and analysis
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#4a8af4"}} title="Label">Enhancement</span> 
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a href="#" class="kanban-item d-block  " data-status_id="2" data-id="3570" data-project_id="24" data-sort="34432" data-post-id="3570" title="Task info #3570" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3570" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3570. Test packaging durability and usability
                                                                <div class="clearfix"></div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a href="#" class="kanban-item d-block  " data-status_id="2" data-id="3317" data-project_id="4" data-sort="36645" data-post-id="3317" title="Task info #3317" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3317" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3317. Design business cards and stationery
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#e18a00"}} aria-label="Priority: Major">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a href="#" class="kanban-item d-block  " data-status_id="2" data-id="3496" data-project_id="18" data-sort="39209" data-post-id="3496" title="Task info #3496" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3496" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3496. Incorporate client feedback and revisions
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#e18a00"}} aria-label="Priority: Major">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>

                                                        </div>
                                                    </li>
                                                    <li class="kanban-col kanban-4">
                                                        <div class="kanban-col-title" style={{borderBottom: "3px solid #ad159e"}}>
                                                             Review 
                                                             <span class="kanban-item-count 4-task-count float-end">14 </span>
                                                        </div>
                                                        <div class="kanban-input general-form hide">
                                                            <input type="text" name="title" value="" id="title" class="form-control" placeholder="Add a task..."/>
                                                        </div>
                                                        <div id="kanban-item-list-4" class="kanban-item-list" data-status_id="4" style={{height: "237.375px", overflowY: "scroll"}}>
                                                            <a class="kanban-item d-block  " data-status_id="4" data-id="3336" data-project_id="5" data-sort="2624" data-post-id="3336" title="Task info #3336" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3336" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3336. Research and write industry reports and case studies
                                                                <div class="clearfix"></div><div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="4" data-id="3326" data-project_id="5" data-sort="3646" data-post-id="3326" title="Task info #3326" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3326" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3326. Write SEO-friendly blog articles
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#aab7b7"}} aria-label="Priority: Minor">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down icon-14">
                                                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                            <polyline points="19 12 12 19 5 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#4a8af4"}} title="Label">
                                                                    Enhancement
                                                                    </span> 
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="4" data-id="3578" data-project_id="25" data-sort="4929" data-post-id="3578" title="Task info #3578" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3578" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3578. Create data dashboards and reports
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#ad159e"}} aria-label="Priority: Critical ">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle icon-14">
                                                                            <circle cx="12" cy="12" r="10"></circle>
                                                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#4a8af4"}} title="Label">
                                                                    Enhancement
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="4" data-id="3576" data-project_id="25" data-sort="10612" data-post-id="3576" title="Task info #3576" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3576" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3576. Perform data visualization and charts
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#ad159e"}} aria-label="Priority: Critical ">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle icon-14">
                                                                            <circle cx="12" cy="12" r="10"></circle>
                                                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="4" data-id="3314" data-project_id="4" data-sort="12059" data-post-id="3314" title="Task info #3314" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3314" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3314. Design brand logo and tagline
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#aab7b7"}} aria-label="Priority: Minor">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down icon-14">
                                                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                            <polyline points="19 12 12 19 5 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#83c340"}} title="Label">Design</span> 
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="4" data-id="3524" data-project_id="20" data-sort="18196" data-post-id="3524" title="Task info #3524" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3524" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3524. Implement illustrations on digital platforms
                                                                <div class="clearfix"></div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="4" data-id="3354" data-project_id="7" data-sort="22338" data-post-id="3354" title="Task info #3354" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3354" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3354. Optimize website meta tags and descriptions
                                                                <div class="clearfix"></div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="4" data-id="3438" data-project_id="14" data-sort="25429" data-post-id="3438" title="Task info #3438" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3438" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3438. Define research objectives and goals
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#ad159e"}} aria-label="Priority: Critical ">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle icon-14">
                                                                            <circle cx="12" cy="12" r="10"></circle>
                                                                            <line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#d43480"}} title="Label">
                                                                    Bug
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="4" data-id="3443" data-project_id="14" data-sort="26875" data-post-id="3443" title="Task info #3443" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3443" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3443. Analyze competitor products and pricing
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#e18a00"}} aria-label="Priority: Major">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#4a8af4"}} title="Label">
                                                                    Enhancement
                                                                    </span> 
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="4" data-id="3352" data-project_id="7" data-sort="28091" data-post-id="3352" title="Task info #3352" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3352" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3352. Conduct SEO audit and analysis
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#aab7b7"}} aria-label="Priority: Minor">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down icon-14">
                                                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                            <polyline points="19 12 12 19 5 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="4" data-id="3617" data-project_id="28" data-sort="29711" data-post-id="3617" title="Task info #3617" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3617" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3617. Optimize VR performance and frame rate
                                                                <div class="clearfix"></div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="4" data-id="3369" data-project_id="8" data-sort="30762" data-post-id="3369" title="Task info #3369" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3369" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3369. Implement responsive design for mobile
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#e18a00"}} aria-label="Priority: Major">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="4" data-id="3579" data-project_id="25" data-sort="31387" data-post-id="3579" title="Task info #3579" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3579" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3579. Generate statistical analysis and insights
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#e18a00"}} aria-label="Priority: Major">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="mt0 badge  " style={{backgroundColor:"#29c2c2"}} title="Label">Feedback</span> 
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>
                                                            <a class="kanban-item d-block  " data-status_id="4" data-id="3481" data-project_id="17" data-sort="36423" data-post-id="3481" title="Task info #3481" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3481" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                <span class="avatar">
                                                                    <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png"/>
                                                                </span>
                                                                3481. Integrate plugin with database
                                                                <div class="clearfix"></div>
                                                                <div class="meta float-start mr5">
                                                                    <span class="sub-task-icon priority-badge" data-bs-toggle="tooltip" style={{background: "#ad159e"}} aria-label="Priority: Critical ">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle icon-14">
                                                                            <circle cx="12" cy="12" r="10"></circle>
                                                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="clearfix"></div>
                                                            </a>     
                                                        </div>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                    <a class="hide" id="recently_meaning_hidden" title="Recently meaning" data-act="ajax-modal" data-title="Recently meaning" data-action-url="https://rise.fairsketch.com/team_members/recently_meaning_modal_form">
                                    </a>
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

export default Dashboard