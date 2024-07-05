/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
import React, { useEffect, useState} from 'react'
import './App.css';

function App(){
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
      fetch("/api").then(
        response => response.json()
      ).then(
        data => {
          setBackendData(data)
        }
      )
    }, [])

  return (
  <div>
      <div class="scrollable-page" style={{ height: '653px', position: 'relative', overflowY: 'scroll' }}>
          <div class="form-signin">
            <div  class="card bg-white mb15">
              <div class="card-header text-center">
                <h2>Sign in</h2>
              </div>

              <div class="card-body p30 rounded-bottom">
                <form action="" id="signin-form" class="general-form" role="form" method="post" accept-charset="utf-8">
                    <input type='hidden' name="rise_csrf_token" value="bde860d90acd92894b2c7975d0839a63"/>             
                  <div class="form-group">
                    <input type="text" name="email" value="admin@demo.com" id="email" class="form-control p10" placeholder="Email" autofocus data-rule-required data-msg-required="This field is required." data-rule-email data-msg-email="Please enter a valid email address."/>
                  </div>

                  <div class="form-group">
                    <input type="password" name="password" value="riseDemo" id="password" class="form-control p10" placeholder="Password" data-rule-required data-msg-required="This field is required."/>
                  </div>

                    <input type='hidden'></input>  

                  <div class="form-group">
                    <div class="g-recaptcha" data-sitekey="6Le0jrkZAAAAANa3Yq5XfzHC4h34e4K6ynXOhlHK"></div>
                  </div>
                  <script type="text/javascript"src="https://www.google.com/recaptcha/api.js?hl=en"></script>

                  <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in
                  </button>

                </form>

                <div class="mt5"><a href="https://rise.fairsketch.com/signin/request_reset_password">Forgot password?</a></div>
                <div class="mt20">You don't have an account? &nbsp; <a href="https://rise.fairsketch.com/signup">Sign up</a></div>
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
                To check team members, use the email addresses from the Team members list. Password is same riseDemo.
                </div>
              </div>
            </div>

          </div>
      </div>
      <div class="footer p15">
          <div class="float-start">
           Copyright © 2024 VNB-IT | Powered by VNB-IT           
          </div>
          
          <div class="float-end">
            <a href="https://rise.fairsketch.com/store">Store</a>
            <a href="https://rise.fairsketch.com/knowledge_base">Knowledge base</a>
            <a href="https://rise.fairsketch.com/about/custom-page-example">Custom page</a>
          </div>
      </div>
  </div>
 )
  
}

export default App;
