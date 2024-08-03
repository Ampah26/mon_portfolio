import React from "react";
import Recaptcha from "./recaptcha";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

function Register () {


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
                        <form action="" id="signup-form" class="general-form" method="post" accept-charset="utf-8">
                            <input type='hidden' name="rise_csrf_token" value="bde860d90acd92894b2c7975d0839a63"/>             
                        <div class="form-group">
                            <label for="name" class="col-md-12">First name</label>                
                            <div class="col-md-12">
                                <input type="text" name="first_name" id="first_name" class="form-control" autofocus="" data-rule-required="" data-msg-required="This field is required."/>
                            </div>
                        
                        </div>

                        <div class="form-group">
                            <label for="last_name" class="col-md-12">Last name</label>
                            <div class="col-md-12">
                                <input type="text" name="last_name" id="last_name" class="form-control" data-rule-required="" data-msg-required="This field is required."/>
                            </div>
                        </div>
                            <input type='hidden'></input>  

                        <div class="form-group">
                            <div class="row">
                                <label for="account_type" class="col-md-12">Type</label>
                                <div class="col-md-12">
                                    <input type="radio" name="account_type" value="organization" checked="checked" id="type_organization" class="form-check-input account-type" data-msg-required="This field is required."/>
                                    <label for="type_organization" class="mr15">Organization</label>
                                    <input type="radio" name="account_type" value="person" id="type_person" class="form-check-input account-type" data-msg-required="This field is required."/>                                    
                                    <label for="type_person" class="">Individual</label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group company-name-section">
                            <label for="company_name" class="col-md-12">Company name</label>
                            <div class="col-md-12">
                                <input type="text" name="company_name" id="company_name" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email" class="col-md-12">Email</label>
                            <div class="col-md-12">
                                <input type="text" name="email" id="email" class="form-control" data-rule-email="" data-msg-email="Please enter a valid email address." data-rule-required="" data-msg-required="This field is required."/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="col-md-12">Password</label>
                            <div class="col-md-12">
                                <input type="password" name="password" id="password"   class="form-control" data-rule-required="" data-msg-required="This field is required." data-rule-minlength="6" data-msg-minlength="Please enter at least 6 characters." autocomplete="off" style={{ zIndex: 'auto' }} />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="retype_password" class="col-md-12">Retype password</label>
                            <div class="col-md-12">
                                <input type="password" name="retype_password" id="retype_password" class="form-control" data-rule-equalto="#password"  autocomplete="off" style={{ zIndex: 'auto' }}  data-msg-equalto="Please enter the same value again."/>
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