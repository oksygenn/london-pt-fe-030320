import React from "react";
import "./SignUp.scss";
import Header from "../Header/Header";
import { Form } from "../Common/Form";
import { ImageUpload } from "../ImageUpload/ImageUpload";

export const SignUp = () => {
  return (
    <div className="signup">
      <Header />
      <Form title="Sign Up" backButton={true}>
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
          name="form_password"
          className="form_inputs"
          required
        ></input>

        <label htmlFor="form_password">Confirm password</label>
        <input
          type="password"
          name="form_password"
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
