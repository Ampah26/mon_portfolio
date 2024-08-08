import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MySwal from 'sweetalert2';

const DeleteClientButton = ({ client }) => {
    const [clients, setClients] = useState([]);

    // Fonction pour charger les clients
    const fetchClients = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/clients');
            setClients(response.data);
        } catch (error) {
            console.error('Erreur lors du chargement des clients:', error);
        }
    };

    // Utilisation du fetchClients pour récupérer les clients au démarrage
    useEffect(() => {
        fetchClients();
    }, []);

    const handleDelete = async (client) => {
        console.log('ID du client à supprimer:', client.id);  // Vérifiez que client est défini ici

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
                const response = await axios.delete(`http://localhost:5000/api/clients/delete/${client.id}`);
                console.log('Réponse de suppression:', response.data);

                MySwal.fire(
                    'Supprimé !',
                    'Le client a été supprimé.',
                    'success'
                );
                fetchClients();  // Recharger la liste des clients
            } catch (error) {
                console.error('Erreur lors de la suppression:', error);
                MySwal.fire(
                    'Erreur !',
                    'Une erreur est survenue lors de la suppression du client.',
                    'error'
                );
            }
        }
    };

    return (
        <a
            title="Supprimer le client"
            className="delete"
            onClick={() => handleDelete(client)}
            style={{ cursor: 'pointer' }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x icon-16">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </a>
    );
};

export default DeleteClientButton;
