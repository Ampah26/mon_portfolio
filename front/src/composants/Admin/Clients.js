import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import $ from 'jquery';
import 'feather-icons';
import axios from 'axios'
import AddClientModal from '../Modal/AddClientModal';
import withReactContent from 'sweetalert2-react-content';
import DeleteClientButton from '../Modal/DeleteClientButton';
import handleDelete from '../Modal/DeleteClientButton'
import Swal from 'sweetalert2';


const MySwal = withReactContent(Swal);




const Clients = ({ client }) =>  {
    
    

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        // Fonction pour récupérer les données des clients depuis le backend
        const fetchClients = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/clients'); // Assurez-vous que l'URL correspond à votre route backend
                const data = await response.json();
                setClients(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des clients:', error);
            }
        };

        fetchClients();
    }, []);

    const getLabelClass = (label) => {
        switch (label) {
            case 'Corporate':
                return 'label-corporate';
            case 'Unsatisfied':
                return 'label-unsatisfied';
            case 'Referral':
                return 'label-referral';
            case 'Inactive':
                return 'label-inactive';
            case 'Potential':
                return 'label-potential';
            default:
                return '';
        }
    };


    const handleDelete = async () => {
        const result = await MySwal.fire({
          title: 'Êtes-vous sûr ?',
          text: "Vous ne pourrez pas récupérer ce client !",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Oui, supprimer !',
          cancelButtonText: 'Annuler'
        });
    
        if (result.isConfirmed) {
          try {
            await axios.delete(`http://localhost:5000/api/clients/delete/${client.id}`);
            MySwal.fire(
              'Supprimé !',
              'Le client a été supprimé.',
              'success'
            );
            // Si nécessaire, rafraîchissez la liste des clients après suppression
          } catch (error) {
            MySwal.fire(
              'Erreur !',
              'Une erreur est survenue lors de la suppression du client.',
              'error'
            );
          }
        }
      };
    
    
    return (
        <div>
            <Navbar />
            <div id="js-init-chat-icon" class="init-chat-icon">
                <span id="js-chat-min-icon" data-type="open" class="chat-min-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle icon-18">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                </span>
            </div>
            <div id="js-rise-chat-wrapper" class="rise-chat-wrapper hide"></div>
            <div id="left-menu-toggle-mask">
                <Sidebar/>
                <div class="page-container overflow-auto">
                    <div class="main-scrollable-page scrollable-page" style={{height: '638px', position: 'relative', overflowY: 'scroll'}}>
                        <div id="page-content" class="page-wrapper clearfix" style={{minHeight: '588px'}}>
                            <div class="clearfix grid-button">
                                <ul id="client-tabs" data-bs-toggle="ajax-tab" class="nav nav-tabs bg-white title" role="tablist">
                                    <li>
                                        <a
                                            role="presentation"
                                            data-bs-toggle="tab"
                                            href="javascript:;"
                                            data-bs-target="#overview"
                                            aria-selected="false"
                                            tabIndex="-1"
                                        >
                                            Overview
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            role="presentation"
                                            data-bs-toggle="tab"
                                            href="https://rise.fairsketch.com/clients/clients_list/"
                                            data-bs-target="#clients_list"
                                            aria-selected="false"
                                            tabIndex="-1"
                                            class="active show"
                                        >
                                            Clients
                                        </a>
                                    </li>
                                    <li>
                                    <a
                                        role="presentation"
                                        data-bs-toggle="tab"
                                        data-bs-target="#contacts"
                                        aria-selected="false"
                                        tabIndex="-1"
                                    >
                                        Contacts
                                    </a>
                                    </li>
                                    <div class="tab-title clearfix no-border">
                                        <div class="title-button-group">
                                            <a
                                            
                                            class="btn btn-outline-light"
                                            title="Manage labels"
                                            data-post-type="client"
                                            data-act="ajax-modal"
                                            data-title="Manage labels"
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
                                                class="feather feather-tag icon-16"
                                            >
                                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                                <line x1="7" y1="7" x2="7.01" y2="7"></line>
                                            </svg>
                                            Manage labels
                                            </a>
                                            <a
                                            
                                            class="btn btn-default"
                                            title="Import clients"
                                            id="import-btn"
                                            data-act="ajax-modal"
                                            data-title="Import clients"
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
                                                class="feather feather-upload icon-16"
                                            >
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="17 8 12 3 7 8"></polyline>
                                                <line x1="12" y1="3" x2="12" y2="15"></line>
                                            </svg>
                                            Import clients
                                            </a>
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
                                            Add client
                                            </a>
                                            <AddClientModal show={showModal} handleClose={handleCloseModal} />

                                        </div>
                                    </div>
                                </ul>
                                <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane fade" id="overview">
                                        <div class="mt20">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <a href="https://rise.fairsketch.com/clients/index/clients_list#all_clients" class="white-link">
                                                    <div class="card dashboard-icon-widget">
                                                        <div class="card-body">
                                                        <div class="widget-icon bg-primary">
                                                            {/* SVG for briefcase icon */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-briefcase icon">
                                                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                                            </svg>
                                                        </div>
                                                        <div class="widget-details">
                                                            <h1>51</h1>
                                                            <span class="bg-transparent-white">Total clients</span>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </a>
                                                </div>
                                                <div className="col-md-3">
                                                    <a href="https://rise.fairsketch.com/clients/index/contacts" className="white-link">
                                                        <div className="card dashboard-icon-widget">
                                                            <div className="card-body">
                                                                <div className="widget-icon bg-orange">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users icon">
                                                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                                        <circle cx="9" cy="7" r="4"></circle>
                                                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                                    </svg>
                                                                </div>
                                                                <div className="widget-details">
                                                                    <h1>50</h1>
                                                                    <span className="bg-transparent-white">Total contacts</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-md-3">
                                                    <a className="contact-widget-link" data-filter="logged_in_today" href="https://rise.fairsketch.com/clients/index/clients_list#logged_in_today">
                                                        <div className="card dashboard-icon-widget">
                                                            <div className="card-body">
                                                                <div className="widget-icon bg-primary">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square icon">
                                                                        <polyline points="9 11 12 14 22 4"></polyline>
                                                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                                                    </svg>
                                                                </div>
                                                                <div className="widget-details">
                                                                    <h1>1</h1>
                                                                    <span className="bg-transparent-white">Contacts logged in today</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            {/* ... other similar blocks for "Total contacts", "Contacts logged in today", etc. */}
                                            </div>
                                            
                                            <div class="row">
                                            <div class="col-md-4">
                                                <a class="client-widget-link" data-filter="has_unpaid_invoices" href="https://rise.fairsketch.com/clients/index/clients_list#has_unpaid_invoices">
                                                <div class="card">
                                                    <div class="card-body p20">
                                                    <div class="widget-title p0 text-default">
                                                        <strong>Clients has unpaid invoices</strong>
                                                    </div>
                                                    <div class="clearfix">
                                                        <span class="text-off float-start mt-3 text-default">8% of total clients</span>
                                                        <h1 class="float-end m0 text-default">4</h1>
                                                    </div>
                                                    <div class="progress mt5" style={{ height: '6px' }} title="8%">
                                                        <div class="progress-bar bg-orange" role="progressbar" style={{ width: '8%' }} aria-valuenow="8" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            {/* ... other similar blocks for partially paid invoices, overdue invoices, etc. */}
                                            </div>
                                            
                                            <div class="row">
                                            <div class="col-md-6">
                                                <div class="card bg-white">
                                                <span class="p-4">Projects</span>
                                                <div class="card-body pt0 rounded-bottom" id="projects-container" style={{ height: '182px', position: 'relative', overflowY: 'scroll' }}>
                                                    <ul class="list-group list-group-flush">
                                                    <a class="client-widget-link" data-filter="has_open_projects" href="https://rise.fairsketch.com/clients/index/clients_list#has_open_projects">
                                                        <li class="list-group-item text-default">
                                                        {/* SVG for grid icon */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-grid icon-18 me-2">
                                                            <rect x="3" y="3" width="7" height="7"></rect>
                                                            <rect x="14" y="3" width="7" height="7"></rect>
                                                            <rect x="14" y="14" width="7" height="7"></rect>
                                                            <rect x="3" y="14" width="7" height="7"></rect>
                                                        </svg>
                                                        Clients has open projects <span class="float-end text-primary">19</span>
                                                        </li>
                                                    </a>
                                                    {/* ... other list items for completed projects, hold projects, etc. */}
                                                    </ul>
                                                </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="card bg-white">
                                                <span class="p-4">Estimates</span>
                                                <div class="card-body pt0 rounded-bottom" id="estiamte-widget-container" style={{ height: '182px', position: 'relative', overflowY: 'scroll' }}>
                                                    <ul class="list-group list-group-flush">
                                                    <a class="client-widget-link" data-filter="has_open_estimates" href="https://rise.fairsketch.com/clients/index/clients_list#has_open_estimates">
                                                        <li class="list-group-item text-default">
                                                        {/* SVG for box icon */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-box icon-18 me-2">
                                                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                                        </svg>
                                                        Client has open estimates <span class="float-end text-warning">4</span>
                                                        </li>
                                                    </a>
                                                    {/* ... other list items for accepted estimates, new estimate requests, etc. */}
                                                    </ul>
                                                </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <a class="client-widget-link" data-filter="has_open_tickets" href="https://rise.fairsketch.com/clients/index/clients_list#has_open_tickets">
                                                <div class="card">
                                                    <div class="card-body p20">
                                                    <div class="widget-title p0 text-default">
                                                        <strong>Clients has open tickets</strong>
                                                    </div>
                                                    <div class="clearfix">
                                                        <span class="text-off float-start mt-3 text-default">75% of total clients</span>
                                                        <h1 class="float-end m0 text-default">38</h1>
                                                    </div>
                                                    <div class="progress mt5" style={{ height: '6px' }} title="75%">
                                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </a>
                                                <a class="client-widget-link" data-filter="has_new_orders" href="https://rise.fairsketch.com/clients/index/clients_list#has_new_orders">
                                                <div class="card">
                                                    <div class="card-body p20">
                                                    <div class="widget-title p0 text-default">
                                                        <strong>Clients has new orders</strong>
                                                    </div>
                                                    <div class="clearfix">
                                                        <span class="text-off float-start mt-3 text-default">16% of total clients</span>
                                                        <h1 class="float-end m0 text-default">8</h1>
                                                    </div>
                                                    <div class="progress mt5" style={{ height: '6px' }} title="16%">
                                                        <div class="progress-bar bg-success" role="progressbar" style={{ width: '16%' }} aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="card bg-white">
                                                <span class="p-4">Proposals</span>
                                                <div class="card-body pt0 rounded-bottom" id="proposals-widget-container" style={{ height: '182px', position: 'relative', overflowY: 'scroll' }}>
                                                    <ul class="list-group list-group-flush">
                                                    <a class="client-widget-link" data-filter="has_open_proposals" href="https://rise.fairsketch.com/clients/index/clients_list#has_open_proposals">
                                                        <li class="list-group-item text-default">
                                                        {/* SVG for file-text icon */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-file-text icon-18 me-2">
                                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-4-4z"></path>
                                                            <line x1="16" y1="2" x2="16" y2="10"></line>
                                                            <line x1="8" y1="13" x2="16" y2="13"></line>
                                                            <line x1="8" y1="17" x2="16" y2="17"></line>
                                                        </svg>
                                                        Client has open proposals <span class="float-end text-info">2</span>
                                                        </li>
                                                    </a>
                                                    {/* ... other list items for accepted proposals, rejected proposals, etc. */}
                                                    </ul>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade active show" id="clients_list">
                                        <div class="card">
                                            <div class="table-responsive">
                                                <div id="client-table_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                                    <div className="filter-section-container">
                                                        <div className="filter-section-flex-row">
                                                            <div className="filter-section-left">
                                                            <div className="filter-item-box">
                                                                <button className="btn btn-default column-show-hide-popover" data-container="body" data-bs-toggle="popover" data-placement="bottom">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-columns icon-16">
                                                                    <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                                                                </svg>
                                                                </button>
                                                            </div>
                                                            <div className="filter-item-box">
                                                                <div className="dropdown smart-filter-dropdown-container">
                                                                <button className="btn btn-default smart-filter-dropdown dropdown-toggle caret" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-filter icon-16 mr5">
                                                                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                                                    </svg>
                                                                    Filters
                                                                </button>
                                                                <div className="dropdown-menu w300">
                                                                    <div className="pb10 pl10">
                                                                    <a className="inline-block btn btn-default manage-filters-button" data-act="ajax-modal" data-title="Manage Filters" data-post-context="all_clients_list" data-post-instance_id="client-table" type="button" data-action-url="https://rise.fairsketch.com/index.php/filters/manage_modal/all_clients_list">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-tool icon-16 mr5">
                                                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                                                                        </svg>
                                                                        Manage Filters
                                                                    </a>
                                                                    <a className="inline-block btn btn-default clear-filter-button ml10 hide" >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-delete icon-16 mr5">
                                                                        <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                                                                        <line x1="18" y1="9" x2="12" y2="15"></line>
                                                                        <line x1="12" y1="9" x2="18" y2="15"></line>
                                                                        </svg>
                                                                        Clear
                                                                    </a>
                                                                    </div>
                                                                    <input type="text" className="form-control search-filter" placeholder="Search"/>
                                                                    <div className="dropdown-divider"></div>
                                                                    <ul className="list-group smart-filter-list-group">
                                                                    <li>
                                                                        <a  className="dropdown-item smart-filter-item list-group-item clickable" data-id="jyetvrypad">All clients</a>
                                                                    </li>
                                                                    <li>
                                                                        <a  className="dropdown-item smart-filter-item list-group-item clickable" data-id="oxwsislhvc">Has due</a>
                                                                    </li>
                                                                    </ul>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="filter-item-box">
                                                                <button className="btn btn-default show-filter-form-button" type="button">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus icon-16">
                                                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                            {/* Bookmarked filters */}
                                                            <div className="filter-item-box bookmarked-filter-button-wrapper">
                                                                <button className="btn btn-default bookmarked-filter-button round" type="button" data-id="oxwsislhvc">Has due</button>
                                                            </div>
                                                            {/* Add more bookmarked filters as needed */}
                                                            </div>
                                                            <div className="filter-section-right">
                                                            <div className="datatable-export filter-item-box">
                                                                <div className="dt-buttons btn-group flex-wrap">
                                                                <button className="btn btn-default buttons-excel buttons-html5" type="button">
                                                                    <span>Excel</span>
                                                                </button>
                                                                <button className="btn btn-default buttons-print" type="button">
                                                                    <span>Print</span>
                                                                </button>
                                                                </div>
                                                            </div>
                                                            <div className="filter-item-box">
                                                                <div id="client-table_filter" className="dataTables_filter">
                                                                <label>
                                                                    <input type="search" className="form-control form-control-sm" placeholder="Search" aria-controls="client-table" />
                                                                </label>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="filter-form hide">
                                                        </div>
                                                        <div id="client-table_processing" className="dataTables_processing card" style={{ display: 'none' }}>
                                                            <div className="table-loader">
                                                            <span className="loading"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <table id="client-table" className="display dataTable no-footer" cellSpacing="0" width="100%" role="grid" aria-describedby="client-table_info">
                                                        <thead>
                                                            <tr role="row">
                                                                <th className="text-center w50 all sorting_asc" tabIndex="0" aria-controls="client-table" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="ID: activate to sort column descending">ID</th>
                                                                <th className="all sorting" tabIndex="0" aria-controls="client-table" rowSpan="1" colSpan="1" aria-label="Name: activate to sort column ascending">Name</th>
                                                                <th className="sorting" tabIndex="0" aria-controls="client-table" rowSpan="1" colSpan="1" aria-label="Primary contact: activate to sort column ascending">Primary contact</th>
                                                                <th className="sorting" tabIndex="0" aria-controls="client-table" rowSpan="1" colSpan="1" aria-label="Phone: activate to sort column ascending">Phone</th>
                                                                <th className="sorting" tabIndex="0" aria-controls="client-table" rowSpan="1" colSpan="1" aria-label="Client groups: activate to sort column ascending">Client groups</th>
                                                                <th className="sorting_disabled" rowSpan="1" colSpan="1" aria-label="Labels">Labels</th>
                                                                <th className="sorting_disabled" rowSpan="1" colSpan="1" aria-label="Projects">Projects</th>
                                                                <th className="sorting_disabled" rowSpan="1" colSpan="1" aria-label="Total invoiced">Total invoiced</th>
                                                                <th className="sorting_disabled" rowSpan="1" colSpan="1" aria-label="Payment Received">Payment Received</th>
                                                                <th className="sorting_disabled" rowSpan="1" colSpan="1" aria-label="Due">Due</th>
                                                                <th className="text-center option w100 sorting_disabled" rowSpan="1" colSpan="1" aria-label="">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu icon-16">
                                                                        <line x1="3" y1="12" x2="21" y2="12"></line>
                                                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                                                        <line x1="3" y1="18" x2="21" y2="18"></line>
                                                                    </svg>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {clients.map((client, index) => (
                                                                <tr key={client.id} className={index % 2 === 0 ? "even" : "odd"}>
                                                                    <td className="text-center w50 all" style={{backgroundColor: '#f4f4f4'}}>{client.id}</td>
                                                                    <td className="all" style={{backgroundColor: '#f4f4f4'}}>{client.name}</td>
                                                                    <td style={{backgroundColor: '#f4f4f4'}}>{client.primary_contact}</td>
                                                                    <td style={{backgroundColor: '#f4f4f4'}}>{client.phone}</td>
                                                                    <td style={{backgroundColor: '#f4f4f4'}}>{client.client_group}</td>
                                                                    <td style={{backgroundColor: '#f4f4f4'}}>
                                                                        <span className={`label ${getLabelClass(client.labels)}`} title="Label">{client.labels}</span>
                                                                    </td>
                                                                    <td style={{backgroundColor: '#f4f4f4'}}>{client.projects}</td>
                                                                    <td style={{backgroundColor: '#f4f4f4'}}>{client.total_invoiced}</td>
                                                                    <td style={{backgroundColor: '#f4f4f4'}}>{client.payment_received}</td>
                                                                    <td style={{backgroundColor: '#f4f4f4'}}>{client.due}</td>
                                                                    <td className="text-center option w100" style={{backgroundColor: '#f4f4f4'}}>
                                                                        <a className="edit" title="Edit client" data-post-id={client.id} data-act="ajax-modal" data-title="Edit client" data-action-url={`http://localhost:5000/api/clients/edit/${client.id}`}>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit icon-16">
                                                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                                                            </svg>
                                                                        </a>
                                                                        <a
                                                                            title="Supprimer le client"
                                                                            className="delete"
                                                                            onClick={() => {
                                                                                console.log('Client ID à supprimer:', client.id); // Ajoutez ce log pour vérifier
                                                                                handleDelete(client);
                                                                            }}
                                                                            style={{ cursor: 'pointer' }}
                                                                        >
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x icon-16">
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
                    <h4 class="modal-title" id="ajaxModalTitle" data-title="RISE - Ultimate Project Manager and CRM"></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id="ajaxModalContent"></div>
                    <div id="ajaxModalOriginalContent" class="hide">
                    <div class="original-modal-body">
                        <div class="circle-loader"></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-bs-dismiss="modal">
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