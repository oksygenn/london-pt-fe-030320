import React from "react";
import "./SignUp.scss";
import Header from "../Header/Header";
import { Form } from "../Common/Form";
import { ImageUpload } from "../ImageUpload/ImageUpload";
import { users } from "../../API/mock";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
  const history = useHistory();
  const submit = (e) => {
    e.preventDefault();
    const password = e.target.form_password1.value;
    if (password !== e.target.form_password2.value) {
      alert("Password don't match");
      return;
    }
    const newUser = {
      id: Math.floor(Math.random() * 10000),
      firstName: e.target.form_first_name.value,
      lastName: e.target.form_last_name.value,
      email: e.target.form_email.value,
      password: password,
    };
    users.push(newUser);
    history.push("/login");
  };

  return (
    <div className="signup">
      <Header />
      <Form title="Sign Up" backButton={true} onSubmit={submit}>
        <label htmlFor="form_first_name">First name</label>
        <input
          type="text"
          name="form_first_name"
          className="form_inputs"
          required
        ></input>

        <label htmlFor="form_last_name">Last name</label>
        <input
          type="text"
          name="form_last_name"
          className="form_inputs"
          required
        ></input>

        <label htmlFor="form_email">Email</label>
        <input
          type="email"
          name="form_email"
          className="form_inputs"
          required
        ></input>

        <label htmlFor="form_password">Password</label>
        <input
          type="password"
          name="form_password1"
          className="form_inputs"
          required
        ></input>

        <label htmlFor="form_password">Confirm password</label>
        <input
          type="password"
          name="form_password2"
          className="form_inputs"
          required
        ></input>
        <div className="form_flex_container">
          <ImageUpload />
          <img src="./images/man_1.svg" alt="avatar" />
        </div>
        <input type="submit" value="Sign Up" className="form_btn"></input>
      </Form>
    </div>
  );
};
