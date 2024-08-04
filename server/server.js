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
    pool.connect((err, client, release) => {
        if (err) {
            console.error('Erreur de connexion à la base de données', err.stack);
            return res.status(500).send('Erreur de connexion à la base de données');
        }

        client.query('SELECT * FROM utilisateur', (err, result) => {
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


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM utilisateur WHERE email = $1', [email]);
        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Utilisateur non trouvé' });
        }

        const user = result.rows[0];

        // Comparaison directe du mot de passe sans cryptage
        if (password !== user.password) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token, nom: user.nom, prenom: user.prenom });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
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
        console.error('Erreur lors de la création de l\'utilisateur:', error.message);

        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
});




app.listen(PORT, () => { 
    console.log(`Serveur démarré sur le port ${PORT}`);
});
