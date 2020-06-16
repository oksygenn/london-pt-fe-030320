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
          {transactions.slice(0, transactions.length / 2).map((el) => (
            <TransactionItem
              transaction={el}
              dateVisible={props.dateVisible}
              detailsExpandable={props.detailsExpandable}
            />
          ))}
          <div className="date_header colorized">Yesterday</div>
          {transactions.slice(transactions.length / 2).map((el) => (
            <TransactionItem
              transaction={el}
              dateVisible={props.dateVisible}
              detailsExpandable={props.detailsExpandable}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
