import React, { useState } from 'react';
import Recaptcha from "./recaptcha";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './Admin/authService';
import Swal from 'sweetalert2'

function Login () {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleSubmit (e) {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json' },
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
                    text: `Bienvenue, ${data.nom} ${data.prenom} `,
                    showConfirmButton: true,
                    timer: 6000
                });
            // Rediriger l'utilisateur ou effectuer une action
            navigate('/admin.dashboard');
          } else {
            setError(data.message); // Afficher un message d'erreur
          }
        } catch (error) {
          console.error('Erreur:', error);

          setError('Erreur de connexion. Veuillez réessayer.');
        }
      };

    return (
        <div>
            <div class="scrollable-page"  style={{ height: '653px', position: 'relative', overflowY: 'scroll' }}>
                { /* formulaire signIn */ }   
                <div class="form-signin">
                    <div  class="card bg-white mb15">
                        <div class="card-header text-center">
                            <h2>Sign in</h2>
                        </div>
                        <div class="card-body p30 rounded-bottom">
                            <form id="signin-form" class="general-form" action="POST" accept-charset="utf-8" onSubmit={handleSubmit}>
                                <input type='hidden' name="rise_csrf_token" value="bde860d90acd92894b2c7975d0839a63"/>             
                                    <div class="form-group">
                                        <input type="email" name="email" id="email" class="form-control p10" placeholder="Email" autofocus data-rule-required data-msg-required="This field is required." data-rule-email data-msg-email="Please enter a valid email address."          
                                         value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" name="password" id="password" class="form-control p10" placeholder="Password" data-rule-required data-msg-required="This field is required."
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required  />
                                             
                                    </div>
                                    <input type='hidden'></input>  

                                    <div class="form-group">
                                        <div class="g-recaptcha" data-sitekey="6Le0jrkZAAAAANa3Yq5XfzHC4h34e4K6ynXOhlHK">
                                            <Recaptcha/>
                                        </div>
                                    </div>
                                    <script type="text/javascript"src="https://www.google.com/recaptcha/api.js?hl=en"></script>
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                    <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Sign in</button>
                            </form>

                            <div class="mt5">
                                <a>Forgot password?</a>
                            </div>
                            <div class="mt20">You don't have an account? &nbsp; 
                                <Link to="/signup">Sign up</Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        { /*  Pied de page du formulaire signIn */ }   
            <Footer/>
            
        </div>

    )
}

export default Login