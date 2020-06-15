import React, { useState } from "react";
import "./Transactions.scss";
import TransactionItem from "./TransactionItem";
// import { getTransactions } from "../../../API/mock";

const Transactions = (props) => {
  const [transactions] = useState(props.source);

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

        <div className="items_container">
          {transactions.map((el) => (
            <TransactionItem
              transaction={el}
              dateVisible={props.dateVisible}
              detailsExpandable={props.detailsExpandable}
            />
          ))}
        </div>
      </div>
      <div className="date_header colorized">Yesterday</div>
    </div>
  );
};

export default Transactions;
