import React from "react";
import Header from "../Header/Header";
import "./Login.scss";
import { Form } from "../Common/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_page">
      <Header />

      <Form action="#" title="login" backButton={false}>
        <label htmlFor="form_email">Email</label>
        <input
          type="email"
          name="form_email"
          className="form_inputs"
          required
        ></input>
        <label htmlFor="form_password" required>
          Password
        </label>
        <input
          type="password"
          name="form_password"
          className="form_inputs"
          required
        ></input>
        <input type="submit" value="Login" className="form_btn"></input>
        <Link to="/signup">Sign Up</Link>
      </Form>
    </div>
  );
};
export default Login;
