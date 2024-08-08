const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('./passport-config'); // Importez votre configuration passport
require('dotenv').config();
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
const PORT = process.env.PORT || 5000;
const SECRET_KEY = 'test';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres', 
    password: 'komihoratio',
    port: 5432,
});

app.get("/api", (req, res) => {


    // Connexion à la base de données et exécution de la requête
    pool.connect((err, utilisateur, release) => {
        if (err) {
            console.error('Erreur de connexion à la base de données', err.stack);
            return res.status(500).send('Erreur de connexion à la base de données');
        }

        utilisateur.query('SELECT * FROM utilisateur', (err, result) => {
            release();  // Libérer le client de la connexion

            if (err) {
                console.error('Erreur lors de l\'exécution de la requête', err.stack);
                return res.status(500).send('Erreur lors de l\'exécution de la requête');
            }

            // Envoyer les données comme réponse JSON
            res.json(result.rows);
        });
    });
});


app.get('/api/clients', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM client'); // Remplacez par votre table de clients
        res.json(result.rows);
    } catch (error) {
        console.error('Erreur lors de la récupération des clients:', error.message);
        res.status(500).json({ error: 'Erreur lors de la récupération des clients' });
    }
});

app.post('/api/clients', async (req, res) => {
    console.log('Requête reçue avec les données:', req.body); // Ajoutez ce log
    const { name, primary_contact, phone, client_group, labels, projects, total_invoiced, payment_received, due } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO client (name, primary_contact, phone, client_group, labels, projects, total_invoiced, payment_received, due) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
            [name, primary_contact, phone, client_group, labels, projects, total_invoiced, payment_received, due]
        );
        res.status(201).json({ message: 'Client ajouté avec succès', client: result.rows[0] });
    } catch (error) {
        console.error('Erreur lors de l\'ajout du client:', error.message);
        res.status(500).json({ error: 'Erreur lors de l\'ajout du client' });
    }
});


app.delete('/api/clients/delete/:id', async (req, res) => {
    const clientId = parseInt(req.params.id, 10); // Convertir l'ID en entier
    console.log("Suppression du client avec l'ID:", clientId);  // Ajoutez cette ligne pour déboguer


    try {
        const result = await pool.query('DELETE FROM client WHERE id = $1 RETURNING *', [clientId]);

        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Client supprimé avec succès' });
        } else {
            res.status(404).json({ message: 'Client non trouvé' });
        }
    } catch (error) {
        console.error('Erreur lors de la suppression du client:', error.message);
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
});




app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM utilisateur WHERE email = $1', [email]);
        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Utilisateur non trouvé' });
        }

        const user = result.rows[0];

        // Comparaison du mot de passe
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token, nom: user.nom, prenom: user.prenom });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
});


const bcrypt = require('bcrypt'); // Importez bcrypt
const saltRounds = 10; // Nombre de rounds pour le salage

app.post('/register', async (req, res) => {
    const { email, nom, prenom, password, type, company } = req.body;

    try {
        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const result = await pool.query(
            'INSERT INTO utilisateur (email, nom, prenom, password, type, company) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [email, nom, prenom, hashedPassword, type, company] // Enregistrez le mot de passe haché
        );
        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur:', error.message);

        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
});

// Ajouter une route pour obtenir les tâches par statut
app.get('/api/tasks', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks');
        console.log(result.rows); // Affiche les données récupérées
        res.json(result.rows);
    } catch (error) {
        console.error('Erreur lors de la récupération des tâches:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des tâches' });
    }
});



app.post('/api/tasks', async (req, res) => {
    const { title, description, related_to, project, points, milestone, assigned_to, collaborator, status, priority, labels, start_date, deadline } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO tasks (title, description, related_to, project, points, milestone, assigned_to, collaborator, status, priority, labels, start_date, deadline) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`,
            [title, description, related_to, project, points, milestone, assigned_to, collaborator, status, priority, labels, start_date, deadline]
        );
        res.status(201).json({ message: 'Tâche ajoutée avec succès', task: result.rows[0] });
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la tâche:', error.message);
        res.status(500).json({ error: 'Erreur lors de l\'ajout de la tâche' });
    }
});

app.listen(PORT, () => { 
    console.log(`Serveur démarré sur le port ${PORT}`);
});
