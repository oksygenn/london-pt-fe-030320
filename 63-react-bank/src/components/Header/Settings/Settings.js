import React, { useState } from "react";

import "./Settings.scss";
import { Form } from "../../Common/Form";
import { ImageUpload } from "../../ImageUpload/ImageUpload";

const Settings = (props) => {
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
                <input type="checkbox" />
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
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              <span>on</span>
            </div>
          </div>
        </div>

        <Form title="User">
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
          <input type="submit" value="Save" className="form_btn"></input>
        </Form>
      </div>
    </div>
  );
};

export default Settings;
