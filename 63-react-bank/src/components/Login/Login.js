import React from "react";
import Header from "../Header/Header";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login_page">
      <Header />

      <div className="login_form_top_wrapper">
        <div className="login_form_wrapper">
          <div className="login_form_top">
            <span className="login_form_span">Login</span>
            <div className="login_form_hr-line"></div>
          </div>
          <form className="login_form">
            <label for="login_email">Email</label>
            <input type="email" name="login_email" required></input>
            <label for="login_password">Password</label>
            <input type="password" name="login_password"></input>
            <input type="submit" value="Login"></input>
            <a href="#">Sign Up</a>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
