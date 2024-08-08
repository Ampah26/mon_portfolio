import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import Footer from "./Footer";

function Register() {
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

    const [errors, setErrors] = useState({});
    const [passwordError, setPasswordError] = useState('');
    const [acceptCGU, setAcceptCGU] = useState(false); // State to manage CGU acceptance

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'radio') {
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
                company: value === 'organization' ? prevState.company : '' // Clear company if type is changed to individual
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            password: value,
        });
        if (value.length < 14) {
            setPasswordError('Le mot de passe doit être composé de minimum 14 caractères.');
        } else {
            setPasswordError('');
        }
    };

    const isEmailValid = (email) => {
        // Simple regex for validating email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const isPasswordValid = (password) => {
        // Check password length, uppercase letter, and digit
        const minLength = 14;
        const hasUppercase = /[A-Z]/.test(password);
        const hasDigit = /\d/.test(password);
        
        return password.length >= minLength && hasUppercase && hasDigit;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
    
        // Check required fields
        Object.keys(formData).forEach(key => {
            if (!formData[key] && key !== 'company') {
                newErrors[key] = 'Ce champ est obligatoire.';
            }
            // Check if company is required and empty
            if (formData.type === 'organization' && !formData.company) {
                newErrors['company'] = 'Ce champ est obligatoire.';
            }
        });
    
        // Validate email format
        if (formData.email && !isEmailValid(formData.email)) {
            newErrors.email = 'Veuillez entrer une adresse email valide.';
        }
    
        // Validate password requirements
        if (!isPasswordValid(formData.password)) {
            newErrors.password = 'Le mot de passe doit comporter au moins 14 caractères, une majuscule et un chiffre.';
        }
    
        // Validate password length (additional check to ensure message correctness)
        if (formData.password.length > 0 && formData.password.length < 14) {
            newErrors.password = 'Le mot de passe doit être composé de minimum 14 caractères.';
        }
    
        // Validate password uppercase and digit (additional checks)
        if (formData.password.length >= 14 && !/[A-Z]/.test(formData.password)) {
            newErrors.password = 'Le mot de passe doit contenir au moins une majuscule.';
        }
        if (formData.password.length >= 14 && !/\d/.test(formData.password)) {
            newErrors.password = 'Le mot de passe doit contenir au moins un chiffre.';
        }
        // Validate password match
        if (formData.password !== formData.retype_password) {
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Les mots de passe ne correspondent pas',
                confirmButtonText: 'OK'
            });
            return;
        }
    
        // Check if CGU is accepted
        if (!formData.acceptCGU) {
            newErrors.cgu = 'Vous devez accepter les conditions générales d\'utilisation.';
        }
    
        // Check if there are validation errors
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        setErrors({});
        setPasswordError('');
    
        // Send registration request
        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    text: 'Votre inscription a été réalisée avec succès!',
                    timer: 6000
                });
                navigate('/');
            } else {
                setErrors({ general: data.error || "Une erreur s'est produite" });
            }
        } catch (error) {
            console.error('Erreur:', error);
            setErrors({ general: 'Erreur lors de la connexion au serveur' });
        }
    };

    return (
        <div>
            <div className="scrollable-page" style={{ height: '653px', position: 'relative', overflowY: 'scroll' }}>
                <div className="form-signin">
                    <div className="card bg-white clearfix">
                        <div className="card-header text-center">
                            <h2 className="form-signin-heading">Sign up</h2>
                            <p>Create an account as a new client.</p>
                        </div>

                        <div className="card-body p30 rounded-bottom">
                            <form noValidate id="signup-form" className="general-form" acceptCharset="utf-8" onSubmit={handleSubmit}>
                                <input type='hidden' name="rise_csrf_token" value="bde860d90acd92894b2c7975d0839a63" />
                                
                                <div className="form-group">
                                    <label htmlFor="prenom" className="col-md-12">First name</label>
                                    <div className="col-md-12">
                                        <input
                                            type="text"
                                            name="prenom"
                                            id="prenom"
                                            value={formData.prenom}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                        {errors.prenom && <small className="text-danger">{errors.prenom}</small>}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="nom" className="col-md-12">Last name</label>
                                    <div className="col-md-12">
                                        <input
                                            type="text"
                                            name="nom"
                                            id="nom"
                                            value={formData.nom}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                        {errors.nom && <small className="text-danger">{errors.nom}</small>}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="row">
                                        <label htmlFor="type" className="col-md-12">Type</label>
                                        <div className="col-md-12">
                                            <input
                                                type="radio"
                                                name="type"
                                                value="organization"
                                                checked={formData.type === 'organization'}
                                                onChange={handleChange}
                                                id="type_organization"
                                                className="form-check-input account-type"
                                            />
                                            <label htmlFor="type_organization" className="mr15">Organization</label>
                                            <input
                                                type="radio"
                                                name="type"
                                                value="individual"
                                                checked={formData.type === 'individual'}
                                                onChange={handleChange}
                                                id="type_individual"
                                                className="form-check-input account-type"
                                            />
                                            <label htmlFor="type_individual">Individual</label>
                                        </div>
                                    </div>
                                </div>

                                {formData.type === 'organization' && (
                                    <div className="form-group company-name-section">
                                        <label htmlFor="company" className="col-md-12">Company name</label>
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="form-control"
                                                required
                                            />
                                            {errors.company && <small className="text-danger">{errors.company}</small>}
                                        </div>
                                    </div>
                                )}

                                <div className="form-group">
                                    <label htmlFor="email" className="col-md-12">Email</label>
                                    <div className="col-md-12">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                        {errors.email && <small className="text-danger">{errors.email}</small>}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password" className="col-md-12">Password</label>
                                    <div className="col-md-12">
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            className="form-control"
                                            minLength="14"
                                            required
                                            autoComplete="off"
                                        />
                                        {passwordError && <small className="text-danger">{passwordError}</small>}
                                        {errors.password && <div className="text-danger">{errors.password}</div>}

                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="retype_password" className="col-md-12">Retype password</label>
                                    <div className="col-md-12">
                                        <input
                                            type="password"
                                            name="retype_password"
                                            id="retype_password"
                                            value={formData.retype_password}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                            autoComplete="off"
                                        />
                                        {errors.retype_password && <small className="text-danger">{errors.retype_password}</small>}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            name="cgu"
                                            id="cgu"
                                            checked={acceptCGU}
                                            onChange={(e) => setAcceptCGU(e.target.checked)}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="cgu" className="form-check-label">
                                            J'accepte les <a href="./cgu.html" target="_blank" rel="noopener noreferrer">conditions générales d'utilisation</a>
                                        </label>
                                        <br/>
                                        {errors.cgu && <small className="text-danger">{errors.cgu}</small>}
                                        {errors.general && <div className="error">{errors.general}</div>}

                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12">
                                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                                    </div>
                                </div>
                            </form>

                            <div className="mt20">
                                <strong>
                                    You have an account? &nbsp; <Link to="/">Sign in</Link>
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

export default Register;
