import React, { useState } from 'react';
import Footer from "./Footer";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Tous les champs sont obligatoires.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token); // Stocker le token JWT dans le localStorage
                localStorage.setItem('nom', data.nom);     // Stocker le nom de l'utilisateur
                localStorage.setItem('prenom', data.prenom);

                setError(''); // Réinitialiser les erreurs

                Swal.fire({
                    icon: 'success',
                    title: 'Connexion réussie',
                    text: `Bienvenue, ${data.prenom} ${data.nom} `,
                    showConfirmButton: true,
                    timer: 6000
                });

                navigate('/admin.dashboard');
            } else {
                setError(data.message || 'Erreur de connexion. Veuillez réessayer.'); // Afficher un message d'erreur
            }
        } catch (error) {
            console.error('Erreur:', error);
            setError('Erreur de connexion. Veuillez réessayer.');
        }
    };

    return (
        <div>
            <div className="scrollable-page" style={{ height: '653px', position: 'relative', overflowY: 'scroll' }}>
                <div className="form-signin">
                    <div className="card bg-white mb15">
                        <div className="card-header text-center">
                            <h2>Sign in</h2>
                        </div>
                        <div className="card-body p30 rounded-bottom">
                            <form id="signin-form" className="general-form" acceptCharset="utf-8" onSubmit={handleSubmit}>
                                <input type='hidden' name="rise_csrf_token" value="bde860d90acd92894b2c7975d0839a63" />
                                
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control p10"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        title="Please enter a valid email address (e.g., user@example.com)."
                                    />
                                    {error && <small className="text-danger">{error}</small>}
                                </div>

                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control p10"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        minLength="14"
                                        title="Password must be at least 14 characters long."
                                    />
                                    {error && <small className="text-danger">{error}</small>}
                                </div>

                                <input type='hidden'></input>

                                <script type="text/javascript" src="https://www.google.com/recaptcha/api.js?hl=en"></script>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                            </form>

                            <br/>

                            <div className="mt5">
                                <a href=''>Forgot password?</a>
                            </div>
                            <div className="mt20">
                                <strong>You don't have an account? &nbsp; 
                                    <Link to="/signup">Sign up</Link> 
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Login;
