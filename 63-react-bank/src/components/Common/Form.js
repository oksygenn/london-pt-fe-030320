import React from "react";
import "./Form.scss";
import { ImageUpload } from "../ImageUpload/ImageUpload";
import { useHistory } from "react-router-dom";

export const Form = (props) => {
  const history = useHistory();

  return (
    <div className="login_form_top_wrapper">
      <div className="login_form_wrapper">
        <div className="login_form_top setting_form_top">
          {props.backButton ? (
            <img
              src="./images/back_arrow.svg"
              alt=""
              onClick={history.goBack}
            />
          ) : (
            <span />
          )}
          <span className="login_form_span">{props.title}</span>
        </div>
        <div className="login_form_hr-line"></div>
        <form className="login_form settings_form">{props.children}</form>
      </div>
    </div>
  );
};
