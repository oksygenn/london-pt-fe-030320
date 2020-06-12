import React from "react";
import "./Form.scss";

export const Form = (props) => {
  return (
    <div className="login_form_top_wrapper">
      <div className="login_form_wrapper">
        <div className="login_form_top">
          <span className="login_form_span">{props.title}</span>
          <div className="login_form_hr-line"></div>
        </div>
        <form className="login_form">{props.children}</form>
      </div>
    </div>
  );
};
