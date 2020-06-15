import React, { useState } from "react";
import "./Balance.scss";

const Balance = (props) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <div className="balance_wrapper">
      <div className="balance_left_border colorized"></div>
      <div className="balance_internal_wrapper">
        <div className="balance_flex_item_1">
          <p className="balance_numbers">{props.source.balance}</p>
          <p className="balance_text">Balance</p>
        </div>

        <div className="balance_flex_item_2">
          {props.buttons ? (
            <>
              <button
                onClick={toggleDetails}
                className="balance_btn balance_btn_1 colorized"
              >
                {props.buttons.primary}
              </button>
              <button
                onClick={toggleDetails}
                className="balance_btn balance_btn_2"
              >
                {props.buttons.secondary}
              </button>
            </>
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

      {detailsVisible ? (
        <div className="balance_expanded">
          <div className="hr_line"></div>
          <div className="balance_expanded_input_button">
            <input type="text" placeholder="£ 500" />
            <button className="balance_btn_3 colorized">Transfer</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Balance;
