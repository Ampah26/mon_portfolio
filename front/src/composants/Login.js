import React from "react";
import Recaptcha from "./recaptcha";
import Footer from "./Footer";
import { Link } from 'react-router-dom';


function Login () {
 

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
                        <form action="" id="signin-form" class="general-form" method="post" accept-charset="utf-8">
                                <input type='hidden' name="rise_csrf_token" value="bde860d90acd92894b2c7975d0839a63"/>             
                            <div class="form-group">
                                <input type="text" name="email" value="" id="email" class="form-control p10" placeholder="Email" autofocus data-rule-required data-msg-required="This field is required." data-rule-email data-msg-email="Please enter a valid email address."/>
                            </div>

                            <div class="form-group">
                                <input type="password" name="password" value="" id="password" class="form-control p10" placeholder="Password" data-rule-required data-msg-required="This field is required."/>
                            </div>

                                <input type='hidden'></input>  

                            <div class="form-group">
                                <div class="g-recaptcha" data-sitekey="6Le0jrkZAAAAANa3Yq5XfzHC4h34e4K6ynXOhlHK">
                                    <Recaptcha/>
                                </div>
                            </div>
                            <script type="text/javascript"src="https://www.google.com/recaptcha/api.js?hl=en"></script>
                            <Link to="/admin">
                                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                            </Link>
                        </form>

                        <div class="mt5"><a href="https://rise.fairsketch.com/signin/request_reset_password">Forgot password?</a></div>
                        <div class="mt20">You don't have an account? &nbsp; <Link to="/signup">Sign up</Link> </div>
                    </div>

                    </div>

                    <div class="card bg-white mb15">
                    <div class="card-body p30 rounded-bottom">
                        <div class="box p10 b-b strong text-center"> 
                        Sign in as
                        </div>

                        <div class="box p10 clickable fill-login b-b">
                        <div class="box-content">Admin</div>
                        <div class="box-content demo-email">admin@demo.com</div>
                        <div class="box-content text-right demo-password">riseDemo</div>
                        </div>

                        <div class="box p10 clickable fill-login b-b">
                        <div class="box-content">Client</div>
                        <div class="box-content demo-email">client@demo.com</div>
                        <div class="box-content text-right demo-password">riseDemo</div>
                        </div>

                        <div class="box p10">
                            Identifiant ci dessus
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