import React , { useState,useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import 'feather-icons';
import $ from 'jquery';

const isMobile = () => window.innerWidth <= 768;
const events = [
    { id: '988ebe0de18bbe108d7f3cdb934bd5ee635a86d868ab44d2914c486f4614a4258206c7a778db072f14bb378dcd89f36cc2bc1c5692242bf02021cb8afad5792179ee3db45ed797c1eff2d7d7944f26d9ad9e3281aca936fc42ea7e', title: 'Company Anniversary Celebration', date: 'Today, 01:10:00 am – 02:30:00 am', color: '#83c340' },
    { id: 'ff2ab4ac1bfeaf51664032e608e1db0bfa96ea1a22ef7d43c70e3ef0714dd13d800906ad29fdb8f7c1a8e108a513c8325bdf96a975ff371d0247b4f9717e2388555496572783a7214d65dd26a1625091fa1b187e5841482ef84b58', title: 'Industry Panel Discussion', date: 'Sun, July 28, 07:59:00 pm – 09:39:00 pm', color: '#2d9cdb' },
    // Add other events here
    
];

const projects = [
    { id: '23', title: 'Online Course Creation and Launch', progress: 0 },
    { id: '13', title: 'Social Media Influencer Collaboration', progress: 0 },
    { id: '28', title: 'Virtual Reality Experience Design', progress: 20 },
    { id: '14', title: 'Market Research and Analysis', progress: 27 },
    { id: '5', title: 'Content Writing and Blogging', progress: 29 },
    { id: '20', title: 'Custom Illustrations and Artwork', progress: 29 },
    { id: '18', title: 'Logo Redesign and Modernization', progress: 75 },
    // Add other projects here
];



const Dashboard = () => {
  
   
    return (
        <div>
            <Navbar />
            <div id="left-menu-toggle-mask">
                <Sidebar/>
                <div class="page-container overflow-auto">
                    <div class="main-scrollable-page scrollable-page" style={{height: "631px", position: "relative", overflowY: "scroll"}}>
                        <div id="page-content" class="page-wrapper clearfix dashboard-view" style={{minHeight: "581px"}}>
                            <div class="clearfix mb15 dashbaord-header-area">
                                <div class="clearfix float-start">
                                    <span class="float-start p10 pl0">
                                        <span style={{backgroundColor: "#fff"}} class="color-tag border-circle"></span>
                                    </span>
                                    <h4 class="float-start">Dashboard</h4>
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
                                            <li role="presentation">
                                                <a  title="Add new dashboard" class="dropdown-item" data-act="ajax-modal" data-title="Add new dashboard" data-action-url="https://rise.fairsketch.com/dashboard/modal_form">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle icon-16">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                    </svg> 
                                                    Add new dashboard
                                                </a> 
                                            </li>
                                        </ul>
                                    </span>

                                    <span class="float-end" id="dashboards-color-tags">
                                        <a href="https://rise.fairsketch.com/dashboard/index/1">
                                            <span className="clickable p10 mr5 inline-block">
                                                <span style={{ backgroundColor: '#fff' }} class="color-tag border-circle" title="Default dashboard"></span>
                                            </span>
                                        </a>
                                        <a href="https://rise.fairsketch.com/dashboard/view/2">
                                            <span class="clickable p10 mr5 inline-block">
                                                <span style={{ backgroundColor: '#d43480' }} class="color-tag" title="test"></span>
                                            </span>
                                        </a>
                                        <a href="https://rise.fairsketch.com/dashboard/view/1">
                                            <span className="clickable p10 mr5 inline-block">
                                                <span style={{ backgroundColor: '#4a8af4' }} className="color-tag" title="Tasks"></span>
                                            </span>
                                        </a>
                                    </span>

                                </div>
                            </div>
                            <div class="clearfix row">
                                <div class="col-md-12 widget-container"></div>
                            </div>
                            <div class="dashboards-row clearfix row">
                                <div class="widget-container col-md-3">
                                    <div id="js-clock-in-out" class="card dashboard-icon-widget clock-in-out-card">
                                        <div class="card-body">
                                            <div class="widget-icon  bg-info ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock icon">
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
                                                    data-action-url="https://rise.fairsketch.com/attendance/note_modal_form"
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
                                                <div class="mt5 bg-transparent-white" title="29-07-2024 10:00:20 am">
                                                    Clock started at : 10:00:20 am
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-container col-md-3">
                                    <a href="https://rise.fairsketch.com/tasks/all_tasks#my_open_tasks" class="white-link">
                                        <div class="card dashboard-icon-widget">
                                            <div class="card-body">
                                                <div class="widget-icon bg-info">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list icon">
                                                        <line x1="8" y1="6" x2="21" y2="6"></line>
                                                        <line x1="8" y1="12" x2="21" y2="12"></line>
                                                        <line x1="8" y1="18" x2="21" y2="18"></line>
                                                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                                    </svg>
                                                </div>
                                                <div class="widget-details">
                                                    <h1>47</h1>
                                                    <span class="bg-transparent-white">My open tasks</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="widget-container col-md-3">
                                    <a href="https://rise.fairsketch.com/events" class="white-link">
                                        <div class="card dashboard-icon-widget">
                                            <div class="card-body">
                                                <div class="widget-icon bg-success">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                </div>
                                                <div class="widget-details">
                                                    <h1>1</h1>
                                                    <span class="bg-transparent-white">Events today</span>
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-compass icon"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                                                </div>
                                                <div class="widget-details">
                                                    <h1>$15,101.00</h1>
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid icon-16">
                                                <rect x="3" y="3" width="7" height="7"></rect>
                                                <rect x="14" y="3" width="7" height="7"></rect>
                                                <rect x="14" y="14" width="7" height="7"></rect>
                                                <rect x="3" y="14" width="7" height="7"></rect>
                                            </svg> &nbsp;Projects Overview  
                                        </div>
                                        <div class="rounded-bottom pt-2">
                                            <div class="box">
                                                <div class="box-content">
                                                    <a href="https://rise.fairsketch.com/projects/all_projects/1" class="text-default">
                                                        <div class="pt-3 pb10 text-center">
                                                            <div class="b-r">
                                                                <h4 class="strong mb-1 mt-0" style={{color: "#01B393"}}>24</h4>
                                                                <span>Open</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="box-content">
                                                    <a href="https://rise.fairsketch.com/projects/all_projects/2" class="text-default">
                                                        <div class="pt-3 pb10 text-center">
                                                            <div class="b-r">
                                                                <h4 class="strong mb-1 mt-0 text-danger">7</h4>
                                                                <span>Completed</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="box-content">
                                                    <a href="https://rise.fairsketch.com/projects/all_projects/3" class="text-default">
                                                        <div class="pt-3 pb10 text-center">
                                                            <div>
                                                                <h4 class="strong mb-1 mt-0 text-warning">0</h4>
                                                                <span>Hold</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                            <div class="container project-overview-widget">
                                                <div class="progress-outline">
                                                    <div class="progress mt5 m-auto position-relative">
                                                        <div class="progress-bar bg-orange text-default" role="progressbar" style={{width:"32%" ,ariaValuenow:"32" ,ariaValuemin:"0" ,ariaValuemax:"100"}}>
                                                            <span class="justify-content-center d-flex position-absolute w-100">Progression 32%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card bg-white">
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell icon text-danger">
                                                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                                        </svg> 
                                                        <span class="ml5">Next reminder</span>
                                                    </div>
                                                    <div class="text-truncate">
                                                        <span class="text-off">No reminder</span>               
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-container col-md-4">
                                    <div id="invoice-overview-widget-container">
                                        <div class="card bg-white">
                                            <div class="card-header">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text icon-16"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> &nbsp;Invoice Overview
                                            </div>

                                            <div class="card-body rounded-bottom" id="invoice-overview-container" style={{height: "327px", position: "relative", overflowY: "scroll"}}>
                                                <a href="https://rise.fairsketch.com/invoices/index/custom#overdue" data-filter="overdue" class="text-default">
                                                    <div class="d-flex p-2">
                                                        <div class="w40p text-truncate">
                                                            <div style={{backgroundColor: "#F5325C"}} class="color-tag border-circle wh10"></div>
                                                              Overdue      
                                                        </div>
                                                        <div class="w20p">
                                                            <div class="progress widget-progress-bar" title="23%">
                                                                <div class="progress-bar bg-danger" role="progressbar" style={{width: "23%"}} aria-valuenow="23%" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                        <div class="w15p text-center">6</div>
                                                        <div class="w25p text-end">$2,772.50</div>
                                                    </div>
                                                </a>
                                                <a href="https://rise.fairsketch.com/invoices/index/custom#not_paid" data-filter="not_paid" class="text-default">
                                                    <div class="d-flex p-2">
                                                        <div class="w40p text-truncate">
                                                            <div style={{backgroundColor: "#FAC108"}} class="color-tag border-circle wh10"></div>
                                                            Not paid                   
                                                        </div>
                                                        <div class="w20p">
                                                            <div class="progress widget-progress-bar" title="23%">
                                                                <div class="progress-bar bg-orange" role="progressbar" style={{width: "23%"}} aria-valuenow="23%" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                        <div class="w15p text-center">6</div>
                                                        <div class="w25p text-end">$9,356.00</div>
                                                    </div>
                                                </a>
                                                <a href="https://rise.fairsketch.com/invoices/index/custom#partially_paid" data-filter="partially_paid" class="text-default">
                                                    <div class="d-flex p-2">
                                                        <div class="w40p text-truncate">
                                                            <div style={{backgroundColor: "#6690F4"}} class="color-tag border-circle wh10"></div>Partially paid                    </div>
                                                        <div class="w20p">
                                                            <div class="progress widget-progress-bar" title="35%">
                                                                <div class="progress-bar" role="progressbar" style={{width: "35%", backgroundColor: "#6690F4"}} aria-valuenow="35%" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                        <div class="w15p text-center">9</div>
                                                        <div class="w25p text-end">$10,720.00</div>
                                                    </div>
                                                </a>
                                                <a href="https://rise.fairsketch.com/invoices/index/custom#fully_paid" data-filter="fully_paid" class="text-default">
                                                    <div class="d-flex p-2">
                                                        <div class="w40p text-truncate">
                                                            <div style={{backgroundColor: "#485BBD"}} class="color-tag border-circle wh10"></div>
                                                            Fully paid                  
                                                        </div>
                                                        <div class="w20p">
                                                            <div class="progress widget-progress-bar" title="42%">
                                                                <div class="progress-bar" role="progressbar" style={{width: "42%", backgroundColor: "#485BBD"}} aria-valuenow="42%" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                        <div class="w15p text-center">11</div>
                                                        <div class="w25p text-end">$12,470.00</div>
                                                    </div>
                                                </a>
                                                <a href="https://rise.fairsketch.com/invoices/index/custom#draft" data-filter="draft" class="text-default">
                                                    <div class="d-flex p-2">
                                                        <div class="w40p text-truncate">
                                                            <div style={{backgroundColor: "#6C757D"}} class="color-tag border-circle wh10"></div>
                                                            Draft                  
                                                        </div>
                                                        <div class="w20p">
                                                            <div class="progress widget-progress-bar" title="4%">
                                                                <div class="progress-bar bg-secondary" role="progressbar" style={{width: "4%"}} aria-valuenow="4" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                        <div class="w15p text-center">1</div>
                                                        <div class="w25p text-end">$120.00</div>
                                                    </div>
                                                </a>

                                                <div class="widget-footer bottom-25 position-absolute w90p">
                                                    <div class="col-md-12">
                                                        <div class="row">
                                                            <div class="col-md-5 col-5 ps-4">
                                                                <div>Total invoiced</div>
                                                                <div class="strong">$32,457.00</div>

                                                                <div class="mt10">Due</div>
                                                                <div class="strong ">$14,627.00</div>
                                                            </div>
                                                            <div class="col-md-7 col-7">
                                                                <div>Last 12 months</div>
                                                                <div class="invoice-line-chart-container">
                                                                    <div class="chartjs-size-monitor">
                                                                        <div class="chartjs-size-monitor-expand">
                                                                            <div class=""></div>
                                                                        </div><div class="chartjs-size-monitor-shrink">
                                                                            <div class=""></div>
                                                                        </div>
                                                                    </div>
                                                                    <canvas id="invoice-overview-chart" style={{width: "111px", height: "67px", display: "block" }}width="138" height="83"  class="chartjs-render-monitor"></canvas>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-container col-md-4">
                                    <div class="card bg-white h373">
                                        <div class="card-header clearfix">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-pie-chart icon-16">
                                                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                                            </svg> &nbsp;Income vs Expenses
                                        </div>
                                        <div class="card-body rounded-bottom">
                                            <div class="row">
                                                <div class="col-md-7">
                                                    <div class="chartjs-size-monitor">
                                                        <div class="chartjs-size-monitor-expand">
                                                            <div></div>
                                                        </div>
                                                        <div class="chartjs-size-monitor-shrink">
                                                            <div class=""></div>
                                                        </div>
                                                    </div>
                                                    <canvas id="income-expense-chart" style={{ width: '203px', height: '203px', display: 'block' }} width="253" height="253" class="chartjs-render-monitor">                      
                                                    </canvas>
                                                </div>
                                                <div class="col-md-5">
                                                    <div class="mb-2">This Year</div>
                                                    <div class="mb-1">
                                                        <div class="color-tag border-circle me-3 wh10" style={{ backgroundColor: '#32A483' }}></div>
                                                        <span class="strong">$17,830.00</span>
                                                    </div>
                                                    <div>
                                                        <div class="color-tag border-circle me-3 wh10" style={{ backgroundColor: '#E60050' }}></div>
                                                        <span class="strong">$9,120.00</span>
                                                    </div>
                                                    <div class="mt-4 mb-2">Last Year</div>
                                                    <div class="mb-1">
                                                        <div class="color-tag border-circle me-3 wh10" style={{ backgroundColor: '#32A483' }}></div>
                                                        <span class="strong">$0.00</span>
                                                    </div>
                                                    <div>
                                                        <div class="color-tag border-circle me-3 wh10" style={{ backgroundColor: '#E60050' }}></div>
                                                        <span class="strong">$0.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pt35 ps-3">
                                                <div class="chartjs-size-monitor">
                                                    <div class="chartjs-size-monitor-expand">
                                                        <div></div>
                                                    </div>
                                                    <div class="chartjs-size-monitor-shrink">
                                                        <div></div>
                                                    </div>
                                                </div>
                                                <div class="pt-2">This Year</div>
                                                <canvas id="dashboard-income-vs-expenses-chart" style={{ width: '198px', height: '57px', marginLeft: '-10px', display: 'block' }} width="236" height="71" class="chartjs-render-monitor"></canvas>
                                            </div>
                                        </div>
                                    </div>
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
                                                strokeWidth="2" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                className="feather feather-list icon-16"
                                            >
                                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                            </svg>
                                            &nbsp;All Tasks Overview
                                        </div>
                                        <div className="card-body rounded-bottom" id="all_tasks_overview-widget" style={{ height: '327px', position: 'relative', overflowY: 'scroll' }}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="chartjs-size-monitor">
                                                        <div className="chartjs-size-monitor-expand">
                                                        <div className=""></div>
                                                        </div>
                                                        <div className="chartjs-size-monitor-shrink">
                                                        <div className=""></div>
                                                        </div>
                                                    </div>
                                                    <canvas 
                                                        id="all-tasks-overview-chart-all_tasks_overview" 
                                                        style={{ width: '197px', height: '189px', display: 'block' }} 
                                                        width="246" 
                                                        height="236" 
                                                        className="chartjs-render-monitor"
                                                    ></canvas>
                                                </div>
                                                <div className="col-md-6 pl20 pt-4">
                                                    <a href="https://rise.fairsketch.com/tasks/all_tasks/tasks_list/1/0/all_tasks_overview" className="text-default">
                                                        <div className="pb-2">
                                                            <div className="color-tag border-circle me-3 wh10" style={{ backgroundColor: '#F9A52D' }}></div>
                                                            To do
                                                            <span className="strong float-end" style={{ color: '#F9A52D' }}>74</span>
                                                        </div>
                                                    </a>
                                                    <a href="https://rise.fairsketch.com/tasks/all_tasks/tasks_list/2/0/all_tasks_overview" className="text-default">
                                                        <div className="pb-2">
                                                            <div className="color-tag border-circle me-3 wh10" style={{ backgroundColor: '#1672B9' }}></div>
                                                            In progress
                                                            <span className="strong float-end" style={{ color: '#1672B9' }}>61</span>
                                                        </div>
                                                    </a>
                                                    <a href="https://rise.fairsketch.com/tasks/all_tasks/tasks_list/4/0/all_tasks_overview" className="text-default">
                                                        <div className="pb-2">
                                                            <div className="color-tag border-circle me-3 wh10" style={{ backgroundColor: '#ad159e' }}></div>
                                                            Review
                                                            <span className="strong float-end" style={{ color: '#ad159e' }}>69</span>
                                                        </div>
                                                    </a>
                                                    <a href="https://rise.fairsketch.com/tasks/all_tasks/tasks_list/3/0/all_tasks_overview" className="text-default">
                                                        <div className="pb-2">
                                                            <div className="color-tag border-circle me-3 wh10" style={{ backgroundColor: '#00B393' }}></div>
                                                            Done
                                                            <span className="strong float-end" style={{ color: '#00B393' }}>175</span>
                                                        </div>
                                                    </a>
                                                    <a href="https://rise.fairsketch.com/tasks/all_tasks/tasks_list/0/0/all_tasks_overview/expired" className="text-default">
                                                        <div className="pb-2">
                                                            <div className="color-tag border-circle me-3 wh10" style={{ backgroundColor: '#f5325c' }}></div>
                                                            Expired
                                                            <span className="strong float-end" style={{ color: '#f5325c' }}>156</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="position-absolute" style={{ bottom: '15px' }}>
                                                <span className="me-5">
                                                    <a href="https://rise.fairsketch.com/tasks/all_tasks/tasks_list/0/4/all_tasks_overview" className="text-default">
                                                        <span title="Blocker ">
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
                                                            className="feather feather-alert-octagon icon-18 me-1" 
                                                            style={{ color: '#e74c3c' }}>
                                                                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                            </svg>
                                                            18
                                                        </span>
                                                    </a>
                                                </span>
                                                <span className="me-5">
                                                    <a className="text-default">
                                                        <span title="Critical ">
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
                                                                className="feather feather-alert-circle icon-18 me-1" 
                                                                style={{ color: '#ad159e' }}
                                                            >
                                                                    <circle cx="12" cy="12" r="10"></circle>
                                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                            </svg>
                                                            28
                                                        </span>
                                                    </a>
                                                </span>
                                                <span className="me-5">
                                                    <a href="https://rise.fairsketch.com/tasks/all_tasks/tasks_list/0/2/all_tasks_overview" className="text-default">
                                                        <span title="Major">
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
                                                                className="feather feather-arrow-up icon-18 me-1" 
                                                                style={{ color: '#e18a00' }}
                                                            >
                                                                    <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                    <polyline points="5 12 12 5 19 12"></polyline>
                                                            </svg>
                                                            41
                                                        </span>
                                                    </a>
                                                </span>
                                                <span className="me-5">
                                                    <a href="https://rise.fairsketch.com/tasks/all_tasks/tasks_list/0/1/all_tasks_overview" className="text-default">
                                                        <span title="Minor">
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
                                                                className="feather feather-arrow-down icon-18 me-1" 
                                                                style={{ color: '#aab7b7' }}
                                                            >
                                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                    <polyline points="19 12 12 19 5 12"></polyline>
                                                            </svg>
                                                            27
                                                        </span>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-container col-md-4">
                                    <div class="card bg-white">
                                        <div class="card-header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users icon-16">
                                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                            </svg> 
                                            &nbsp;Team Members Overview    
                                        </div>
                                        <div class="rounded-bottom">
                                            <div class="box pt-3">
                                                <div class="box-content">
                                                    <a class="text-default">
                                                        <div class="pt-3 pb-3 text-center">
                                                            <div class=" b-r">
                                                                <h3 class="mt-0 strong mb5">5</h3>
                                                                <div>Team members</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="box-content">
                                                    <a class="text-default">
                                                        <div class="p-3 text-center">
                                                            <h3 class="mt-0 strong mb5 text-warning">0</h3>
                                                            <div>On leave today</div>
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
                                                                <div class="progress h7 w-50 m-auto mb-1" title="60%">
                                                                    <div class="progress-bar bg-danger" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <div>Members Clocked In</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="box-content">
                                                    <a class="text-default">
                                                        <div class="pt-3 pb-3 text-center">
                                                            <h3 class="mt-0 mb-1 strong text-primary">2</h3>
                                                            <div class="progress h7 w-50 m-auto mb-1" title="40%">
                                                                <div class="progress-bar bg-primary" role="progressbar" style={{width: '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <div>Members Clocked Out</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="text-default">
                                        <div class="card dashboard-icon-widget">
                                            <div class="card-body">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mic icon">
                                                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                                    <line x1="12" y1="19" x2="12" y2="23"></line>
                                                    <line x1="8" y1="23" x2="16" y2="23"></line>
                                                </svg>
                                                <span class="ml10">Last announcement</span>
                                                <div class="mt15 ms-1 text-truncate" title="Tomorrow is holiday!">
                                                    Tomorrow is holiday!        
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="widget-container col-md-4">
                                    <div class="card bg-white">
                                        <div class="card-header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-life-buoy icon-16">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <circle cx="12" cy="12" r="4"></circle>
                                                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                                                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                                                <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                                                <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                                                <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                                            </svg>
                                            &nbsp;Ticket Status 
                                        </div>
                                        <div class="card-body rounded-bottom p20" id="ticket-status-widget" style={{height: "327px", position: "relative", overflowY: "scroll"}}>
                                            <div class="row">
                                                <div class="col-md-6 col b-r-2 ps-4 pe-4">
                                                    <a href="https://rise.fairsketch.com/tickets/index/open" class="text-default ">
                                                        <div class="pb-2">
                                                            <div class="color-tag border-circle me-3 wh10" style={{backgroundColor: "#DEA701"}}></div>
                                                            New             
                                                           <span class="strong float-end">21</span>
                                                        </div>
                                                    </a>
                                                    <a class="text-default ">
                                                        <div class="pb-2">
                                                            <div class="color-tag border-circle me-3 wh10" style={{backgroundColor: "#F4325B"}}></div>
                                                            Open        
                                                            <span class="strong float-end">15</span>
                                                        </div>
                                                    </a>
                                                    <a class="text-default ">
                                                        <div class="pb-2">
                                                            <div class="color-tag border-circle me-3 wh10" style={{backgroundColor: "#485ABD"}}></div>
                                                            Closed                     
                                                           <span class="strong float-end">69</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="col-md-6 col ps-4 pe-4">
                                                    <a class="text-default">
                                                        <div class="pb-2 clearfix">
                                                            <div class="float-start w-75 text-truncate">General Support</div>
                                                            <span class="strong float-end text-danger">16</span>
                                                        </div>
                                                    </a>
                                                    <a class="text-default">
                                                        <div class="pb-2 clearfix">
                                                            <div class="float-start w-75 text-truncate">Bug Reports</div>
                                                            <span class="strong float-end text-danger">25</span>
                                                        </div>
                                                    </a>
                                                    <a class="text-default">
                                                        <div class="pb-2 clearfix">
                                                            <div class="float-start w-75 text-truncate">Sales Inquiry</div>
                                                            <span class="strong float-end text-danger">19</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                            <div class="bottom-25 position-absolute w90p">
                                                <div class="pb-3 ps-3">New tickets in last 30 days</div>
                                                <div>
                                                    <div class="chartjs-size-monitor">
                                                        <div class="chartjs-size-monitor-expand">
                                                            <div class=""></div>
                                                        </div>
                                                        <div class="chartjs-size-monitor-shrink">
                                                            <div class=""></div>
                                                        </div>
                                                    </div>
                                                    <canvas id="ticket-status-chart" style={{width: "204px", height: "100px", display: "block"}} width="255" height="125" class="chartjs-render-monitor"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dashboards-row clearfix row">
                                <div class="widget-container col-md-4">
                                    <div class="card bg-white">
                                        <div class="card-header">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-clock icon-16">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>&nbsp; Project Timeline
                                        </div>

                                        <div id="project-timeline-container" style={{ height: '719px', position: 'relative', overflowY: 'scroll' }}>
                                            <div class="card-body">
                                                <div class="d-flex border-bottom mb-3">
                                                    <div class="flex-shrink-0 me-2 mt-3">
                                                        <span class="avatar avatar-xs">
                                                        <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png" alt="John Doe" />
                                                        </span>
                                                    </div>
                                                    <div class="p-2 w-100">
                                                        <div class="card-title">
                                                        <a href="https://rise.fairsketch.com/team_members/view/1" class="dark strong">John Doe</a>
                                                        <small><span class="text-off">Today at 08:39:14 pm</span></small>
                                                        </div>
                                                        <p>
                                                            <span class="badge bg-warning">Updated</span>
                                                            <span class="text-break">
                                                                Task: 
                                                                <a  title="Task info #3642" class="dark" id="task-modal-view-link" data-post-id="3642" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3642" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                #3642 - Add company logo and contact details
                                                                </a>
                                                            </span>
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                Status:
                                                                <del>To do</del> 
                                                                <ins>Done</ins>
                                                            </li>
                                                        </ul>
                                                        <p>
                                                            Project: 
                                                            <a href="https://rise.fairsketch.com/projects/view/30" class="dark">
                                                                Business Card and Stationery Design
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="d-flex border-bottom mb-3">
                                                    <div class="flex-shrink-0 me-2 mt-3">
                                                        <span class="avatar avatar-xs">
                                                        <img src="https://rise.fairsketch.com/files/profile_images/_file62ad955b55c00-avatar.png" alt="Emily Smith" />
                                                        </span>
                                                    </div>
                                                    <div class="p-2 w-100">
                                                        <div class="card-title">
                                                        <a href="https://rise.fairsketch.com/clients/contact_profile/107" class="dark strong">Emily Smith</a>
                                                        <small><span class="text-off">Today at 06:18:25 pm</span></small>
                                                        </div>
                                                        <p>
                                                        <span class="badge bg-warning">Updated</span>
                                                        <span class="text-break">Task: <a  title="Task info #3426" class="dark" id="task-modal-view-link" data-post-id="3426" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3426" data-action-url="https://rise.fairsketch.com/tasks/view"> #3426 - Add product reviews and ratings</a></span>
                                                        </p>
                                                        <ul>
                                                        <li>Priority: Moved Down</li>
                                                        <li>Status: <del>To do</del> <ins>In progress</ins></li>
                                                        </ul>
                                                        <p>Project: <a href="https://rise.fairsketch.com/projects/view/12" class="dark">Product Photography and Cataloging</a></p>
                                                    </div>
                                                </div>
                                                <div class="d-flex border-bottom mb-3">
                                                    <div class="flex-shrink-0 me-2 mt-3">
                                                        <span class="avatar avatar-xs">
                                                            <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png" alt="..."/>
                                                        </span>
                                                    </div>
                                                    <div class="p-2 w-100">
                                                        <div class="card-title">
                                                            <a href="https://rise.fairsketch.com/team_members/view/1" class="dark strong">John Doe</a>    
                                                            <small>
                                                                <span class="text-off">Today at 10:00:51 am</span>
                                                            </small>
                                                        </div>
                                                        <p>
                                                            <span class="badge bg-warning">Updated</span>
                                                            <span class="text-break">
                                                                Task: 
                                                                <a  title="Task info #3654" class="dark" id="task-modal-view-link" data-post-id="3654" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3654" data-action-url="https://rise.fairsketch.com/tasks/view"> 
                                                                    #3654 - test w
                                                                </a>
                                                            </span>
                                                        </p>
                                                        <ul>
                                                            <li>Priority: Moved Up</li>
                                                            <li>
                                                                Status: 
                                                                <del>
                                                                    To do
                                                                </del>
                                                                <ins>In progress</ins>
                                                            </li>
                                                        </ul>
                                                        <p></p>                
                                                        <p> 
                                                            Project:
                                                            <a href="https://rise.fairsketch.com/projects/view/31" class="dark">test 21</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="d-flex border-bottom mb-3">
                                                    <div class="flex-shrink-0 me-2 mt-3">
                                                        <span class="avatar avatar-xs">
                                                            <img src="https://rise.fairsketch.com/files/profile_images/_file62ad94f892365-avatar.png" alt="..."/>
                                                        </span>
                                                    </div>
                                                    <div class="p-2 w-100">
                                                        <div class="card-title">
                                                            <a href="https://rise.fairsketch.com/team_members/view/1" class="dark strong">John Doe</a>                    <small><span class="text-off">Today at 09:56:14 am</span></small>
                                                        </div>
                                                        <p>
                                                            <span class="badge bg-warning">Updated</span>
                                                            <span class="text-break">
                                                                Task: 
                                                                <a  title="Task info #3655" class="dark" id="task-modal-view-link" data-post-id="3655" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3655" data-action-url="https://rise.fairsketch.com/tasks/view"> #3655 - sds</a>
                                                            </span>
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                Status: 
                                                                <del>
                                                                    To do
                                                                </del>
                                                                <ins>Done</ins>
                                                            </li>
                                                        </ul>           
                                                        <p></p>
                                                        <p> 
                                                            Project:
                                                            <a href="https://rise.fairsketch.com/projects/view/31" class="dark">test 21</a>
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Repeat similar blocks for other entries */}

                                                <div id="loadproject10project0">
                                                <div class="text-center">
                                                    <a  class="btn btn-default w-100 mt15 spinning-btn" title="Load more" data-inline-loader="1" data-real-target="#loadproject10project0" data-act="ajax-request" data-action-url="https://rise.fairsketch.com/projects/history/10/project/0/0/0">Load more</a>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-container col-md-4">
                                    <div class="card bg-white">
                                        <div class="card-header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-calendar icon-16">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                            </svg>&nbsp; Events
                                        </div>
                                        <div id="upcoming-event-container" style={{ height: '330px', position: 'relative', overflowY: 'scroll' }}>
                                            <div class="card-body">
                                                <div style={{ minHeight: '190px' }}>
                                                    {events.map(event => (
                                                        <div key={event.id} class="pb10 pt10 b-b">
                                                            <div>
                                                                <a  data-post-id={event.id} data-post-cycle="0" title="Event details" data-act="ajax-modal" data-title="Event details" data-action-url="https://rise.fairsketch.com/events/view/">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-lock icon-16 mr5" style={{ color: event.color, marginTop: '-3px' }}>
                                                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                                                    </svg>
                                                                    {event.title}
                                                                </a>
                                                            </div>
                                                            <div class="ml20 pl5">{event.date}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div><a href="https://rise.fairsketch.com/events" class="btn btn-default w-100 mt15">View on calendar</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card bg-white">
                                        <div class="card-header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-grid icon-16">
                                                <rect x="3" y="3" width="7" height="7"></rect>
                                                <rect x="14" y="3" width="7" height="7"></rect>
                                                <rect x="14" y="14" width="7" height="7"></rect>
                                                <rect x="3" y="14" width="7" height="7"></rect>
                                            </svg>&nbsp; Open Projects
                                        </div>
                                        <div class="card-body pt0 rounded-bottom" id="open-projects-container" style={{ height: '330px', position: 'relative', overflowY: 'scroll' }}>
                                            {projects.map(project => (
                                                <div key={project.id} class="clearfix row projects-row">
                                                    <div class="col-md-7 col-sm-7 mt15"><a href={`https://rise.fairsketch.com/projects/view/${project.id}`}>{project.title}</a></div>
                                                    <div class="col-md-5 col-sm-5">
                                                        <div class="progress" title={`${project.progress}%`}>
                                                            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow={project.progress} aria-valuemin="0" aria-valuemax="100" style={{ width: `${project.progress}%` }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                                <div class="widget-container col-md-4">
                                    <div class="card bg-white">
                                        <div class="card-header">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-check-square icon-16">
                                            <polyline points="9 11 12 14 22 4"></polyline>
                                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                        </svg>
                                        &nbsp; To do (Private)
                                        </div>
                                        <form /*onSubmit={handleSubmit} */id="todo-inline-form">
                                        <div class="widget-todo-input-box mb0 todo-input-box">
                                            <div class="input-group pb15">
                                            <input type="text" /*value={title} onChange={(e) => setTitle(e.target.value)} */class="form-control" placeholder="Add a to do..." />
                                            <span class="input-group-btn">
                                                <button type="submit" class="btn btn-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-check-circle icon-16">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                                Save
                                                </button>
                                            </span>
                                            </div>
                                        </div>
                                        </form>
                                        <div class="table-responsive" id="todo-list-widget-table" style={{ height: '653px', position: 'relative', overflowY: 'scroll' }}>
                                        <table id="todo-table" class="display dataTable no-footer" cellSpacing="0" width="100%" role="grid">
                                            <thead>
                                            <tr role="row">
                                                <th class="w25"></th>
                                                <th>Title</th>
                                                <th class="w50">Date</th>
                                                <th class="text-center option w80">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-menu icon-16">
                                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                                </svg>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                <tr /*key={todo.id} class={todo.status === 'done' ? 'done' : ''}*/>
                                                <td class="w25 b-warning">
                                                    <i class="hide">/</i>
                                                    <a  title="" /*data-id={todo.id} data-value={todo.status} onClick={() => handleStatusChange(todo.id, todo.status === 'to_do' ? 'done' : 'to_do')}*/>
                                                    <span ></span>
                                                    </a>
                                                </td>
                                                <td><a  class="edit"></a></td>
                                                <td class="w50"></td>
                                                <td class="text-center option w80">
                                                    <a  class="edit" title="Edit">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-edit icon-16">
                                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                                    </svg>
                                                    </a>
                                                    <a  title="Delete" /*onClick={() => handleDelete(todo.id)}*/>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-x icon-16">
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>
                                                    </a>
                                                </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="dashboards-row clearfix row">
                                <div class="widget-container col-md-8">
                                    <div class="card bg-white">
                                        <div class="card-header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list icon-16">
                                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                            </svg>&nbsp; My Tasks
                                        </div>
                                        <div class="table-responsive" id="my-task-list-widget-table" style={{height: "330px", position: "relative", overflowY: "scroll"}}>
                                            <div id="task-table_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                                <div class="filter-section-container">
                                                    <div class="filter-section-flex-row">
                                                        <div class="filter-section-left">
                                                            <div class="filter-item-box">
                                                                <button class="btn btn-default column-show-hide-popover" data-container="body" data-bs-toggle="popover" data-placement="bottom">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-columns icon-16">
                                                                        <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="filter-section-right">
                                                            <div class="filter-item-box">
                                                                <div id="task-table_filter" class="dataTables_filter">
                                                                    <label>
                                                                        <input type="search" class="form-control form-control-sm" placeholder="Search" aria-controls="task-table"/>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="task-table_processing" class="dataTables_processing card" style={{display: "none"}}>
                                                        <div class="table-loader">
                                                            <span class="loading"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table id="task-table" class="display dataTable no-footer" cellspacing="0" width="100%" role="grid" aria-describedby="task-table_info">            
                                                    <thead>
                                                        <tr role="row">
                                                            <th class="w70 sorting" tabindex="0" aria-controls="task-table" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending">ID</th>
                                                            <th class="sorting" tabindex="0" aria-controls="task-table" rowspan="1" colspan="1" aria-label="Title: activate to sort column ascending">Title</th>
                                                            <th class="w80 sorting" tabindex="0" aria-controls="task-table" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending">Start date</th>
                                                            <th class="w80 sorting" tabindex="0" aria-controls="task-table" rowspan="1" colspan="1" aria-label="Deadline: activate to sort column ascending">Deadline</th>
                                                            <th class="w80 sorting" tabindex="0" aria-controls="task-table" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="odd">
                                                            <td class=" w70" style={{borderLeft:"5px solid #F9A52D !important"}}>
                                                                <a  title="" class="js-task" data-id="3517" data-value="3" data-act="update-task-status-checkbox">
                                                                    <span class="checkbox-blank mr15 float-start"></span>
                                                                </a>
                                                                3517
                                                            </td>
                                                            <td>
                                                                <a  title="Task info #3517" data-post-id="3517" data-search="#3517" class="" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3517" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                    Sketch and outline illustrations
                                                                </a>
                                                                <span class="float-end ml5"></span>
                                                                <span class="float-end" title="Priority: Major">
                                                                    <span class="sub-task-icon priority-badge" style={{background: "#e18a00"}}> 
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span> 
                                                                </span>
                                                                <span class="float-end mr5"></span>
                                                            </td>
                                                            <td class=" w80">-</td>
                                                            <td class=" w80">24-08-2024</td>
                                                            <td class=" w80">
                                                                <a  title="" class="" data-id="3517" data-value="1" data-act="update-task-status">
                                                                    To do
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr class="even">
                                                            <td class=" w70" style={{borderLeft:"5px solid #1672B9 !important"}}>
                                                                <a  title="" class="js-task" data-id="3525" data-value="3" data-act="update-task-status-checkbox">
                                                                    <span class="checkbox-blank mr15 float-start"></span>
                                                                </a>
                                                                3525
                                                            </td>
                                                            <td>
                                                                <a  title="Task info #3525" data-post-id="3525" data-search="#3525" class="" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3525" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                    Create illustration assets for printing
                                                                </a>
                                                                <span class="float-end ml5"></span>
                                                                <span class="float-end"></span>
                                                                <span class="float-end mr5">
                                                                    <span class="mt0 badge  clickable" style={{backgroundColor:"#4a8af4"}} title="Label">
                                                                        Enhancement
                                                                    </span>
                                                                </span>
                                                            </td>
                                                            <td class=" w80">-</td>
                                                            <td class=" w80">24-08-2024</td>
                                                            <td class=" w80">
                                                                <a  title="" class="" data-id="3525" data-value="2" data-act="update-task-status">
                                                                    In progress
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr class="odd">
                                                            <td class=" w70" style={{borderLeft:"5px solid #F9A52D !important"}}>
                                                                <a  title="" class="js-task" data-id="3530" data-value="3" data-act="update-task-status-checkbox">
                                                                    <span class="checkbox-blank mr15 float-start"></span>
                                                                </a>
                                                                3530
                                                            </td>
                                                            <td>
                                                                <a  title="Task info #3530" data-post-id="3530" data-search="#3530" class="" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3530" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                    Design game characters and assets
                                                                </a>
                                                                <span class="float-end ml5"></span>
                                                                <span class="float-end"></span>
                                                                <span class="float-end mr5">
                                                                    <span class="mt0 badge  clickable" style={{backgroundcolor:"#d43480"}} title="Label">Bug</span> 
                                                                </span>
                                                            </td>
                                                            <td class=" w80">-</td>
                                                            <td class=" w80">17-08-2024</td>
                                                            <td class=" w80">
                                                                <a  title="" class="" data-id="3530" data-value="1" data-act="update-task-status">
                                                                    To do
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr class="even">
                                                            <td class=" w70" style={{borderLeft:"5px solid #F9A52D !important"}}>
                                                                <a  title="" class="js-task" data-id="3427" data-value="3" data-act="update-task-status-checkbox">
                                                                    <span class="checkbox-blank mr15 float-start"></span>
                                                                </a>
                                                                3427
                                                            </td>
                                                            <td>
                                                                <a  title="Task info #3427" data-post-id="3427" data-search="#3427" class="" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3427" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                    Identify potential social media influencers
                                                                </a>
                                                                <span class="float-end ml5"></span>
                                                                <span class="float-end" title="Priority: Major">
                                                                    <span class="sub-task-icon priority-badge" style={{background: "#e18a00"}}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span> 
                                                                </span>
                                                                <span class="float-end mr5"></span>
                                                            </td>
                                                            <td class=" w80">-</td>
                                                            <td class=" w80">07-08-2024</td>
                                                            <td class=" w80">
                                                                <a  title="" class="" data-id="3427" data-value="1" data-act="update-task-status">
                                                                    To do
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr class="odd">
                                                            <td class=" w70" style={{borderLeft:"5px solid #F9A52D !important"}}>
                                                                <a  title="" class="js-task" data-id="3435" data-value="3" data-act="update-task-status-checkbox">
                                                                    <span class="checkbox-blank mr15 float-start"></span>
                                                                </a>
                                                                3435
                                                            </td>
                                                            <td>
                                                                <a  title="Task info #3435" data-post-id="3435" data-search="#3435" class="" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3435" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                    Measure influencer campaign success
                                                                </a>
                                                                <span class="float-end ml5"></span>
                                                                <span class="float-end" title="Priority: Major">
                                                                    <span class="sub-task-icon priority-badge" style={{background: "#e18a00"}}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-14">
                                                                            <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                            <polyline points="5 12 12 5 19 12"></polyline>
                                                                        </svg>
                                                                    </span> 
                                                                </span>
                                                                <span class="float-end mr5"></span>
                                                            </td>
                                                            <td class=" w80">-</td>
                                                            <td class=" w80">07-08-2024</td>
                                                            <td class=" w80">
                                                                <a  title="" class="" data-id="3435" data-value="1" data-act="update-task-status">
                                                                    To do
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr class="even">
                                                            <td class=" w70" style={{borderLeft:"5px solid #1672B9 !important"}}>
                                                                <a  title="" class="js-task" data-id="3654" data-value="3" data-act="update-task-status-checkbox">
                                                                    <span class="checkbox-blank mr15 float-start"></span>
                                                                </a>
                                                                3654
                                                            </td>
                                                            <td>
                                                                <a  title="Task info #3654" data-post-id="3654" data-search="#3654" class="" data-modal-lg="1" data-act="ajax-modal" data-title="Task info #3654" data-action-url="https://rise.fairsketch.com/tasks/view">
                                                                    test w
                                                                </a>
                                                                <span class="float-end ml5"></span>
                                                                <span class="float-end">
                                                                    <span class="filter-sub-task-button clickable ml5" title="Show sub tasks" main-task-id="#3654">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter icon-16">
                                                                            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                                                        </svg>
                                                                    </span>
                                                                </span>
                                                                <span class="float-end mr5"></span>
                                                            </td>
                                                            <td class=" w80">26-07-2024</td>
                                                            <td class=" w80">
                                                                <span class="text-danger">28-07-2024</span> 
                                                            </td>
                                                            <td class=" w80">
                                                                <a  title="" class="" data-id="3654" data-value="2" data-act="update-task-status">
                                                                    In progress
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-container col-md-4">
                                    <div class="card bg-white h370">
                                        <div class="card-header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book icon-16"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>&nbsp; Sticky Note (Private)    </div>
                                        <div id="sticky-note-container">
                                            <textarea name="note" cols="40" rows="10" id="sticky-note" class="sticky-note" style={{height:"326px"}}>123</textarea>
                                        </div>
                                    </div>
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
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
            <div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog" aria-labelledby="confirmationModal" aria-hidden="true">
                <div class="modal-dialog" style={{maxWidth: "400px"}}>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="confirmationModalTitle">Delete?</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div id="confirmationModalContent" class="modal-body">
                            <div class="container-fluid">
                                Are you sure? You won't be able to undo this action!                </div>
                        </div>
                        <div class="modal-footer clearfix">
                            <button id="confirmDeleteButton" type="button" class="btn btn-danger" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 icon-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</button>
                            <button type="button" class="btn btn-default" data-bs-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x icon-16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Cancel</button>
                        </div>
                    </div>
                </div>
            </div> 
            <span role="status" aria-live="polite" class="select2-hidden-accessible"></span>
            
        </div>
    );
};

export default Dashboard;