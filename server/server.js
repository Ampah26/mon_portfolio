const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("./passport-config"); // Importez votre configuration passport
require("dotenv").config();
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
const PORT = process.env.PORT || 5000;
const SECRET_KEY = "test";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "komihoratio",
  port: 5432,
});

app.get("/api", (req, res) => {
  // Connexion à la base de données et exécution de la requête
  pool.connect((err, utilisateur, release) => {
    if (err) {
      console.error("Erreur de connexion à la base de données", err.stack);
      return res.status(500).send("Erreur de connexion à la base de données");
    }

    utilisateur.query("SELECT * FROM utilisateur", (err, result) => {
      release(); // Libérer le client de la connexion

      if (err) {
        console.error("Erreur lors de l'exécution de la requête", err.stack);
        return res.status(500).send("Erreur lors de l'exécution de la requête");
      }

      // Envoyer les données comme réponse JSON
      res.json(result.rows);
    });
  });
});

app.get("/api/utilisateur", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, nom FROM utilisateur"); // Adapte la requête en fonction de ta table
    res.json(result.rows); // Envoie uniquement l'ID et le nom des utilisateurs
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des utilisateurs:",
      error.message
    );
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des utilisateurs" });
  }
});

app.get("/api/clients", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM client"); // Remplacez par votre table de clients
    res.json(result.rows);
  } catch (error) {
    console.error("Erreur lors de la récupération des clients:", error.message);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des clients" });
  }
});

app.post("/api/clients", async (req, res) => {
  console.log("Requête reçue avec les données:", req.body); // Ajoutez ce log
  const {
    name,
    primary_contact,
    phone,
    client_group,
    labels,
    projects,
    total_invoiced,
    payment_received,
    due,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO client (name, primary_contact, phone, client_group, labels, projects, total_invoiced, payment_received, due) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [
        name,
        primary_contact,
        phone,
        client_group,
        labels,
        projects,
        total_invoiced,
        payment_received,
        due,
      ]
    );
    res
      .status(201)
      .json({ message: "Client ajouté avec succès", client: result.rows[0] });
  } catch (error) {
    console.error("Erreur lors de l'ajout du client:", error.message);
    res.status(500).json({ error: "Erreur lors de l'ajout du client" });
  }
});

app.delete("/api/clients/delete/:id", async (req, res) => {
  const clientId = parseInt(req.params.id, 10); // Convertir l'ID en entier
  console.log("Suppression du client avec l'ID:", clientId); // Log pour déboguer

  if (isNaN(clientId)) {
    return res.status(400).json({ message: "ID invalide" });
  }

  try {
    const result = await pool.query(
      "DELETE FROM client WHERE id = $1 RETURNING *",
      [clientId]
    );

    if (result.rowCount > 0) {
      res.status(200).json({ message: "Client supprimé avec succès" });
    } else {
      res.status(404).json({ message: "Client non trouvé" });
    }
  } catch (error) {
    console.error("Erreur lors de la suppression du client:", error.message);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
});

app.get("/api/projects", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name FROM projects"); // Sélectionne uniquement l'id et le nom des projets
    res.json(result.rows);
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error.message);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des projets" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM utilisateur WHERE email = $1",
      [email]
    );
    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Utilisateur non trouvé" });
    }

    const user = result.rows[0];

    // Comparaison du mot de passe
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token, nom: user.nom, prenom: user.prenom });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

const bcrypt = require("bcrypt"); // Importez bcrypt
const saltRounds = 10; // Nombre de rounds pour le salage

app.post("/register", async (req, res) => {
  const { email, nom, prenom, password, type, company } = req.body;

  try {
    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const result = await pool.query(
      "INSERT INTO utilisateur (email, nom, prenom, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [email, nom, prenom, hashedPassword] // Enregistrez le mot de passe haché
    );
    res.status(201).json({ message: "Utilisateur créé avec succès" });
  } catch (error) {
    console.error(
      "Erreur lors de la création de l'utilisateur:",
      error.message
    );

    res
      .status(500)
      .json({ error: "Erreur lors de la création de l'utilisateur" });
  }
});

// Ajouter une route pour obtenir les tâches par statut
app.get("/api/tasks", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tasks");
    console.log(result.rows); // Affiche les données récupérées
    res.json(result.rows);
  } catch (error) {
    console.error("Erreur lors de la récupération des tâches:", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des tâches" });
  }
});

app.post("/api/tasks", async (req, res) => {
  const {
    title,
    description,
    project_id,
    assigned_to,
    collaborator,
    status,
    priority,
    labels,
    start_date,
    deadline,
  } = req.body;

  try {
    // Remplace les chaînes vides par null si nécessaire
    const assignedToValue = assigned_to ? parseInt(assigned_to) : null;
    const collaboratorValue = collaborator ? parseInt(collaborator) : null;
    const projectIdValue = project_id ? parseInt(project_id) : null;

    const result = await pool.query(
      `INSERT INTO tasks (title, description, project_id, assigned_to, collaborator, status, priority, labels, start_date, deadline) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [
        title,
        description,
        projectIdValue,
        assignedToValue,
        collaboratorValue,
        status,
        priority,
        labels,
        start_date,
        deadline,
      ]
    );

    res
      .status(201)
      .json({ message: "Tâche ajoutée avec succès", task: result.rows[0] });
  } catch (error) {
    console.error("Erreur lors de l'ajout de la tâche:", error.message);
    res.status(500).json({ error: "Erreur lors de l'ajout de la tâche" });
  }
});

app.get("/api/dashboard-totals", async (req, res) => {
  try {
    // Exécute plusieurs requêtes SQL en parallèle
    const [
      totalTasksResult,
      totalClientsResult,
      totalDueResult,
      totalProjectResult,
    ] = await Promise.all([
      pool.query("SELECT COUNT(*) AS total_tasks FROM tasks"),
      pool.query("SELECT COUNT(*) AS total_clients FROM client"),
      pool.query("SELECT SUM(due) AS total_due FROM client"),
      pool.query("SELECT COUNT(*) AS total_projects FROM projects"),
    ]);

    // Récupère les résultats de chaque requête
    const totalTasks = totalTasksResult.rows[0].total_tasks;
    const totalClients = totalClientsResult.rows[0].total_clients;
    const totalDue = totalDueResult.rows[0].total_due;
    const totalProjet = totalProjectResult.rows[0].total_projects;

    // Renvoie une réponse JSON avec tous les totaux
    res.json({
      totalTasks,
      totalClients,
      totalDue,
      totalProjet,
    });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des totaux pour le dashboard:",
      error
    );
    res.status(500).json({
      error: "Erreur lors de la récupération des totaux pour le dashboard",
    });
  }
});

// Route pour obtenir l'historique des changements
app.get("/api/history", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM history ORDER BY modified_at DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Erreur lors de la récupération de l'historique:", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération de l'historique" });
  }
});

// Route pour exécuter la fonction purge_old_history
app.post("/api/purge-history", async (req, res) => {
  try {
    await pool.query("CALL purge_old_history()");
    res.json({ message: "Historique purgé avec succès." });
  } catch (error) {
    console.error("Erreur lors de l'exécution de la purge:", error);
    res.status(500).json({ error: "Erreur lors de la purge de l'historique." });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
