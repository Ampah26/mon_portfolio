import React from "react";
import Recaptcha from "./recaptcha";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register () {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        type: 'organization',
        company: '',
        email: '',
        password: '',
        retype_password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.retype_password) {
            setError("Les mots de passe ne correspondent pas");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    nom: formData.nom,
                    prenom: formData.prenom,
                    password: formData.password,
                    type: formData.type,
                    company: formData.company,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    text: 'Votre inscription a été réalisée avec succès!',
                    timer: 6000
                });
            // Rediriger l'utilisateur ou effectuer une action
                navigate('/');
                // Redirigez l'utilisateur vers la page de connexion ou autre
            } else {
                setError(data.error || "Une erreur s'est produite");
            }
        } catch (error) {
            console.error('Erreur:', error);
            setError('Erreur lors de la connexion au serveur');
        }
    };

    return ( 
     <div>
         
        <div class="scrollable-page"  style={{ height: '653px', position: 'relative', overflowY: 'scroll' }}>

            { /* formulaire signUp */ }   

            <div class="form-signin">

                <div class="card bg-white clearfix"> 
                   <div class="card-header text-center">
                        <h2 class="form-signin-heading">Sign up</h2>
                        <p>Create an account as a new client.</p>
                    </div>

                    <div class="card-body p30 rounded-bottom">
                        <form action="" id="signup-form" class="general-form" accept-charset="utf-8" onSubmit={handleSubmit}>
                            <input type='hidden' name="rise_csrf_token" value="bde860d90acd92894b2c7975d0839a63"/>             
                        <div class="form-group">
                            <label for="name" class="col-md-12">First name</label>                
                            <div class="col-md-12">
                                <input type="text" name="prenom" id="prenom" value={formData.prenom} onChange={handleChange} class="form-control" autofocus="" data-rule-required="" data-msg-required="This field is required."/>
                            </div>
                        
                        </div>

                        <div class="form-group">
                            <label for="last_name" class="col-md-12">Last name</label>
                            <div class="col-md-12">
                                <input type="text" name="nom" id="nom" value={formData.nom} onChange={handleChange} class="form-control" data-rule-required="" data-msg-required="This field is required."/>
                            </div>
                        </div>
                            <input type='hidden'></input>  

                        <div class="form-group">
                            <div class="row">
                                <label for="account_type" class="col-md-12">Type</label>
                                <div class="col-md-12">
                                    <input type="radio" name="type" value="organization" checked={formData.type==='organization'} onChange={handleChange} id="type" class="form-check-input account-type" data-msg-required="This field is required."/>
                                    <label for="type_organization" class="mr15">Organization</label>
                                    <input type="radio" name="type" value="Individuel" id="type" class="form-check-input account-type" onChange={handleChange} data-msg-required="This field is required."/>                                    
                                    <label for="type_person" class="">Individual</label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group company-name-section">
                            <label for="company_name" class="col-md-12">Company name</label>
                            <div class="col-md-12">
                                <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email" class="col-md-12">Email</label>
                            <div class="col-md-12">
                                <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} class="form-control" data-rule-email="" data-msg-email="Please enter a valid email address." data-rule-required="" data-msg-required="This field is required."/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="col-md-12">Password</label>
                            <div class="col-md-12">
                                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange}  class="form-control" data-rule-required="" data-msg-required="This field is required." data-rule-minlength="6" data-msg-minlength="Please enter at least 6 characters." autocomplete="off" style={{ zIndex: 'auto' }} />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="retype_password" class="col-md-12">Retype password</label>
                            <div class="col-md-12">
                                <input type="password" name="retype_password" id="retype_password" value={formData.retype_password} onChange={handleChange} class="form-control" data-rule-equalto="#password"  autocomplete="off" style={{ zIndex: 'auto' }}  data-msg-equalto="Please enter the same value again."/>
                            </div>
                        </div>


                        <div class="form-group">
                            <div class="g-recaptcha" data-sitekey="6Le0jrkZAAAAANa3Yq5XfzHC4h34e4K6ynXOhlHK">
                                <Recaptcha/>
                            </div>
                        </div>
                        <script type="text/javascript"src="https://www.google.com/recaptcha/api.js?hl=en"></script>

                        <div class="form-group">
                            <div class="col-md-12">
                                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                            </div>
                        </div>

                        </form>

                    </div>
                </div>
                <div className="mt20">You have an account? &nbsp; <Link to="/">Sign in</Link></div>
                </div>
        </div>

        
        

      { /*  Pied de page du formulaire signIn */ }   
        <Footer/>

    </div>

            
    )
}

export default Register