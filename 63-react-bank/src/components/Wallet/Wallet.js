import React, { useState } from "react";
import "./Wallet.scss";
import Header from "../Header/Header";
import Balance from "../Wallet/Balance/Balance";
import Transactions from "./Transactions/Transactions";
import {
  getTransactions,
  getBalance,
  userTransactions,
  userSavingsTransactions,
  userBalance,
  userSavingsBalance,
} from "../../API/mock";

const Wallet = (props) => {
  const [transactions, setTransactions] = useState(getTransactions());
  const [balance, setBalance] = useState(getBalance());

  const addExpense = () => {
    const fakeExpense = {
      date: "2020/06/18 - 17:05",
      title: "Fake shop",
      details: "Fakey fakey dodgy stuff",
      amount: -3.45,
    };
    userTransactions.unshift(fakeExpense);
    userBalance.balance += fakeExpense.amount;

    if (props.user.roundingPense) {
      const savingExpense = {
        date: "2020/06/18 - 17:05",
        title: "Rounded expense",
        details: "Rounded expense",
        amount: 0.55,
      };
      userSavingsTransactions.unshift(savingExpense);
      userBalance.balance -= savingExpense.amount;
      userSavingsBalance.balance += savingExpense.amount;
    }

    setBalance({ ...userBalance });
    setTransactions([...userTransactions]);
  };

  return (
    <div className="wallet">
      <Balance source={balance} />
      <Transactions source={transactions} detailsExpandable={true} />
      <div>
        <button className="useless_button" onClick={addExpense}>
          Add expense
        </button>
      </div>
    </div>
  );
};

export default Wallet;
