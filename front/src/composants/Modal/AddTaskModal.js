import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importation des styles

const AddTaskModal = ({ show, handleClose }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    related_to: '',
    project: '',
    points: '1',
    milestone: '',
    assigned_to: '',
    collaborator: '',
    status: 'to do',
    priority: 'Medium',
    labels: 'Bug',
    start_date: new Date(),
    deadline: new Date()
  });

  const [dateError, setDateError] = useState('');

  const priorities = ['High', 'Medium', 'Low'];
  const statuses = ['to do', 'in progress', 'review', 'done'];
  const labelOptions = ['Bug', 'Amelioration', 'Design', 'Feedback'];
  const pointsOptions = [1, 2, 3, 4, 5];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value
    });
  };

  const handleDateChange = (date, field) => {
    setTaskData({
      ...taskData,
      [field]: date
    });

    if (field === 'start_date' && date > taskData.deadline) {
      setDateError('La date de début ne peut pas être après la date limite.');
    } else if (field === 'deadline' && date < taskData.start_date) {
      setDateError('La date limite doit être après la date de début.');
    } else {
      setDateError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier les dates avant la soumission
    if (taskData.deadline <= taskData.start_date) {
      setDateError('La date limite doit être après la date de début.');
      return;
    }

    console.log('Formulaire soumis avec les données:', taskData);

    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Tâche ajoutée avec succès:', data);
        Swal.fire({
          title: 'Succès',
          text: 'Nouvelle tâche ajoutée avec succès !',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        handleClose();
      } else {
        console.error('Erreur lors de l\'ajout de la tâche');
        Swal.fire({
          title: 'Erreur',
          text: 'Erreur lors de l\'ajout de la tâche',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
      Swal.fire({
        title: 'Erreur',
        text: 'Erreur lors de la soumission du formulaire',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter une Tâche</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="add-task-form" className="general-form" acceptCharset="utf-8" onSubmit={handleSubmit}>
          {/* Titre de la tâche */}
          <div className="form-group mb-3">
            <input
              type="text"
              name="title"
              id="title"
              className="form-control p10"
              placeholder="Titre"
              value={taskData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description de la tâche */}
          <div className="form-group mb-3">
            <textarea
              name="description"
              id="description"
              className="form-control p10"
              placeholder="Description"
              value={taskData.description}
              onChange={handleChange}
            />
          </div>

          {/* Projet */}
          <div className="form-group mb-3">
            <input
              type="text"
              name="project"
              id="project"
              className="form-control p10"
              placeholder="Projet"
              value={taskData.project}
              onChange={handleChange}
            />
          </div>

          {/* Points */}
          <div className="form-group mb-3">
            <label htmlFor="points" className="form-label">Points</label>
            <select
              name="points"
              id="points"
              className="form-control"
              value={taskData.points}
              onChange={handleChange}
            >
              {pointsOptions.map(point => (
                <option key={point} value={point}>
                  {point}
                </option>
              ))}
            </select>
          </div>

          {/* Milestone */}
          <div className="form-group mb-3">
            <input
              type="text"
              name="milestone"
              id="milestone"
              className="form-control p10"
              placeholder="Milestone"
              value={taskData.milestone}
              onChange={handleChange}
            />
          </div>

          {/* Assigné à */}
          <div className="form-group mb-3">
            <input
              type="text"
              name="assigned_to"
              id="assigned_to"
              className="form-control p10"
              placeholder="Assigné à"
              value={taskData.assigned_to}
              onChange={handleChange}
            />
          </div>

          {/* Collaborateur */}
          <div className="form-group mb-3">
            <input
              type="text"
              name="collaborator"
              id="collaborator"
              className="form-control p10"
              placeholder="Collaborateur"
              value={taskData.collaborator}
              onChange={handleChange}
            />
          </div>

          {/* Statut */}
          <div className="form-group mb-3">
            <label htmlFor="status" className="form-label">Statut</label>
            <select
              name="status"
              id="status"
              className="form-control"
              value={taskData.status}
              onChange={handleChange}
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Priorité */}
          <div className="form-group mb-3">
            <label htmlFor="priority" className="form-label">Priorité</label>
            <select
              name="priority"
              id="priority"
              className="form-control"
              value={taskData.priority}
              onChange={handleChange}
            >
              {priorities.map(priority => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </div>

          {/* Labels */}
          <div className="form-group mb-3">
            <label htmlFor="labels" className="form-label">Labels</label>
            <select
              name="labels"
              id="labels"
              className="form-control"
              value={taskData.labels}
              onChange={handleChange}
            >
              {labelOptions.map(label => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Dates */}
          <div className="form-group mb-3 d-flex justify-content-between">
            <div className="w-48 me-2">
              <label htmlFor="start_date" className="form-label">Date de début</label>
              <DatePicker
                selected={taskData.start_date}
                onChange={(date) => handleDateChange(date, 'start_date')}
                className="form-control"
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <div className="w-48 ms-2">
              <label htmlFor="deadline" className="form-label">Date limite</label>
              <DatePicker
                selected={taskData.deadline}
                onChange={(date) => handleDateChange(date, 'deadline')}
                className="form-control"
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>
          
          {/* Erreur de validation des dates */}
          {dateError && (
            <div className="alert alert-danger" role="alert">
              {dateError}
            </div>
          )}

          {/* Boutons */}
          <div className="form-group d-flex justify-content-between mt-3">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Annuler
            </button>
            <button type="submit" className="btn btn-primary ms-auto">
              Valider
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTaskModal;
