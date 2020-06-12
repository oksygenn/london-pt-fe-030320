import React from "react";
import "./Form.scss";
import { ImageUpload } from "../ImageUpload/ImageUpload";

export const Form = (props) => {
  return (
    <div className="login_form_top_wrapper">
      <div className="login_form_wrapper">
        <div className="login_form_top">
          {props.backButton ? (
            <img src="./images/back_arrow.svg" alt="" />
          ) : (
            <span />
          )}
          <span className="login_form_span">{props.title}</span>
        </div>
        <div className="login_form_hr-line"></div>
        <form className="login_form">{props.children}</form>
      </div>
    </div>
  );
};
