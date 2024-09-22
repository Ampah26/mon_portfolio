import Swal from "sweetalert2";
import axios from "axios";

// Fonction de suppression
export const handleDelete = async (clientId, setClients, clients) => {
  // Confirmation de l'action
  const result = await Swal.fire({
    title: "Êtes-vous sûr ?",
    text: "Vous ne pourrez pas récupérer ce client !",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Oui, supprimer !",
    cancelButtonText: "Annuler",
  });

  if (result.isConfirmed) {
    try {
      // Requête DELETE vers le serveur
      const response = await axios.delete(
        `http://localhost:5000/api/clients/delete/${clientId}`
      );
      console.log("Réponse de la suppression:", response.data); // Vérifiez la réponse du serveur
      Swal.fire("Supprimé !", "Le client a été supprimé.", "success");
      // Mise à jour de la liste des clients après suppression
      setClients(clients.filter((client) => client.id !== clientId));
    } catch (error) {
      console.error(
        "Erreur lors de la suppression:",
        error.response ? error.response.data : error.message
      ); // Affiche l'erreur dans la console
      Swal.fire(
        "Erreur !",
        "Une erreur est survenue lors de la suppression du client.",
        "error"
      );
    }
  }
};
