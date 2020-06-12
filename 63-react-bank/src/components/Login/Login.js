import React from "react";
import Header from "../Header/Header";
import "./Login.scss";
import { Form } from "../Common/Form";

const Login = () => {
  return (
    <div className="login_page">
      <Header />

      <Form title="Login">
        <label for="login_email">Email</label>
        <input type="email" name="login_email" required></input>
        <label for="login_password" required>
          Password
        </label>
        <input type="password" name="login_password"></input>
        <input type="submit" value="Login"></input>
        <a href="#">Sign Up</a>
      </Form>
    </div>
  );
};
export default Login;
