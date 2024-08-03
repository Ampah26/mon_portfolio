const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const SECRET_KEY = 'test';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres', 
    password: 'komihoratio',
    port: 5432,
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Erreur de connexion à la base de données', err.stack);
    }
    console.log('Connexion réussie à PostgreSQL');
    client.query('SELECT * FROM utilisateur', (err, result) => {
        release();
        if (err) {
            return console.error('Erreur lors de l\'exécution de la requête', err.stack);
        }
        console.log('Données de la table:', result.rows);
    });
});

app.get("/api", (req, res) => {
    res.send('Bienvenue sur la page d\'accueil de mon serveur');
});

app.post('/register', async (req, res) => {
    const { email, nom, prenom, password, type, company } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO utilisateur (email, nom, prenom, password, type, company) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [email, nom, prenom, password, type, company] // On enregistre le mot de passe tel quel
        );
        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM utilisateur WHERE email = $1', [email]);
        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Email non trouvé' });
        }

        const user = result.rows[0];

        // Comparaison directe du mot de passe sans cryptage
        if (password !== user.password) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
});

app.listen(PORT, () => { 
    console.log(`Serveur démarré sur le port ${PORT}`);
});
