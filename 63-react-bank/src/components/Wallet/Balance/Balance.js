import React from "react";
import "./Balance.scss";

const Balance = (props) => {
  return (
    <div className="balance_wrapper">
      <div className="balance_left_border colorized"></div>
      <div className="balance_internal_wrapper">
        <div className="balance_flex_item_1">
          <p className="balance_numbers">{`${props.source.balance}`}</p>
          <p className="balance_text">Balance</p>
        </div>

        <div className="balance_flex_item_2">
          {props.buttons ? (
            <div className="balance_buttons">
              <button className="balance_btn_1">pay in</button>
              <button className="balance_btn_2">pay out</button>
            </div>
          ) : (
            <>
              <div className="balance_user_avatar">
                <img src="./images/man_1.svg" alt="avatar" />
              </div>
              <p className="balance_date">{props.source.date}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Balance;
