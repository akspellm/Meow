import React, { Component } from 'react';
import TranslationBox from "../../components/TranslationBox";
import Button from "../../components/Button";

import "./Login.css";

class Login extends Component {

render() {
  return (
    <div className="content">
      <h4 className="login-text">Log In To Get Started!</h4>
      <a href="/auth/google"><img src="http://www.setyourowntests.com/_/rsrc/1468869481521/help/accounts/btn_google_signin_dark_normal_web%402x.png" /></a>
    </div>
    )}
}

export default Login;
