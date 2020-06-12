import React from "react";
import Header from "../Header/Header";
import "./Login.scss";
import { Form } from "../Common/Form";

const Login = () => {
  return (
    <div className="login_page">
      <Header />

      <Form title="Login">
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
        <a href="#">Sign Up</a>
      </Form>
    </div>
  );
};
export default Login;
