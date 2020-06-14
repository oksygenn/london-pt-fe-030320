import React from "react";
import "./Balance.scss";

const Balance = (props) => {
  return (
    <div className="balance_wrapper">
      <div className="balance_left_border"></div>
      <div className="balance_internal_wrapper">
        <div className="balance_flex_item_1">
          <p className="balance_numbers">
            3 830.<span>21</span>
          </p>
          <div className="balance_user_avatar">
            <img src="./images/man_1.svg" alt="avatar" />
          </div>
        </div>

        <div className="balance_flex_item_2">
          <p className="">Balance</p>
          <p className="balance_date">01/02/2020</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
