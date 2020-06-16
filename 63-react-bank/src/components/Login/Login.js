import React from "react";
import Header from "../Header/Header";
import "./Login.scss";
import { Form } from "../Common/Form";
import { Link, useHistory } from "react-router-dom";
import { users } from "../../API/mock";

const Login = (props) => {
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    const email = e.target.form_email.value;
    const pass = e.target.form_password.value;

    const user = users.find((el) => el.email === email && el.password === pass);
    if (user !== undefined) {
      props.onLogin(user);
      history.push("/");
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <div className="login_page">
      <Header />

      <Form title="login" backButton={false} onSubmit={submit}>
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
