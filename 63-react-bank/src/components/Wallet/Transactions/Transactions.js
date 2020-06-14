import React from "react";
import "./Transactions.scss";
import TransactionItem from "./TransactionItem";

const Transactions = () => {
  return (
    <div className="transactions">
      <div class="internal_wrapper">
        <div className="header">
          <div className="header_arrows">
            <p>Transactions</p>
            <div className="arrows">
              <img src="./images/arrow_up.svg" alt="" />
              <img src="./images/arrow_down.svg" alt="" />
            </div>
          </div>
          <p>Amount</p>
        </div>
        <div className="hr_line"></div>

        <div className="items_wrapper">
          <TransactionItem />
          <div className="item_wrapper">
            <p className="item_name">Marks & Spencer</p>
            <p className="item_price">-$8.64</p>
          </div>
          <div className="item_wrapper">
            <p className="item_name">Uber</p>
            <p className="item_price">-$23.64</p>
          </div>
          <div className="item_wrapper">
            <p className="item_name">John Lewis</p>
            <p className="item_price">-$78.89</p>
          </div>
          <div className="item_wrapper">
            <p className="item_name">Marks & Spencer</p>
            <p className="item_price">-$8.64</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
