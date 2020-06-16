import React, { useState } from "react";

import "./Settings.scss";
import { Form } from "../../Common/Form";
import { ImageUpload } from "../../ImageUpload/ImageUpload";
import { users } from "../../../API/mock";

const Settings = (props) => {
  const [user, setUser] = useState(props.user);

  const handleBlockedChange = (e) => {
    updateUser({
      blocked: e.target.checked,
    });
  };

  const handleRoundExpensesChange = (e) => {
    updateUser({
      roundingPense: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.form_password1.value;
    if (password !== e.target.form_password2.value) {
      alert("Passwords don't match");
      return;
    }
    updateUser({
      firstName: e.target.form_first_name.value,
      lastName: e.target.form_last_name.value,
      email: e.target.form_email.value,
      password: password,
    });
    props.goBack();
  };

  const updateUser = (changes) => {
    const newUser = {
      ...user,
      ...changes,
    };
    const userIndex = users.findIndex((el) => el.id === newUser.id);
    users[userIndex] = newUser;
    setUser(newUser);
    props.updateUser(newUser);
  };

  return (
    <div className="settings">
      <div className="settings_wrapper">
        <div className="settings_header">
          <p>Settings</p>
          <img onClick={props.goBack} src="././images/back_arrow.svg" alt="" />
        </div>
        <div className="settings_togglers">
          <div className="toggler block_account_toggler">
            <span>Block account</span>
            <div className="internal_toggler_wrapper">
              <span>off</span>
              <label class="switch">
                <input
                  type="checkbox"
                  // defaultChecked={user.blocked}
                  name="blocked"
                  checked={user.blocked}
                  onChange={handleBlockedChange}
                />
                <span class="slider round"></span>
              </label>
              <span>on</span>
            </div>
          </div>
          <div className="toggler round_expenses_toggler">
            <span>Round expenses</span>
            <div className="internal_toggler_wrapper">
              <span>off</span>
              <label class="switch">
                <input
                  type="checkbox"
                  // defaultChecked={user.roundingPense}
                  name="roundingPense"
                  checked={user.roundingPense}
                  onChange={handleRoundExpensesChange}
                />
                <span class="slider round"></span>
              </label>
              <span>on</span>
            </div>
          </div>
        </div>

        <Form title="User" onSubmit={handleSubmit}>
          <label htmlFor="form_first_name">First name</label>
          <input
            type="text"
            name="form_first_name"
            className="form_inputs"
            defaultValue={user.firstName}
            required
          ></input>

          <label htmlFor="form_last_name">Last name</label>
          <input
            type="text"
            name="form_last_name"
            className="form_inputs"
            defaultValue={user.lastName}
            required
          ></input>

          <label htmlFor="form_email">Email</label>
          <input
            type="email"
            name="form_email"
            className="form_inputs"
            defaultValue={user.email}
            required
          ></input>

          <label htmlFor="form_password1">Password</label>
          <input
            type="password"
            name="form_password1"
            className="form_inputs"
            defaultValue={user.password}
            required
          ></input>

          <label htmlFor="form_password2">Confirm password</label>
          <input
            type="password"
            name="form_password2"
            className="form_inputs"
            defaultValue={user.password}
            required
          ></input>

          <div className="form_flex_container">
            <ImageUpload />
            <img src="./images/man_1.svg" alt="avatar" />
          </div>
          <input type="submit" value="Save" className="form_btn"></input>
        </Form>
      </div>
    </div>
  );
};

export default Settings;
