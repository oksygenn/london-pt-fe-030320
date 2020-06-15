import React, { useState } from "react";
import "./Transactions.scss";
import TransactionItem from "./TransactionItem";
import { getTransactions } from "../../../API/mock";

const Transactions = () => {
  const [transactions] = useState(getTransactions());

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
            <TransactionItem transaction={el} />
          ))}
        </div>
      </div>
      <div className="date_header">Yesterday</div>
    </div>
  );
};

export default Transactions;
