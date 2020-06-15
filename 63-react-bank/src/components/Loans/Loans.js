import React from "react";
import Header from "../Header/Header";
import Balance from "../Wallet/Balance/Balance";
import Transactions from "../Wallet/Transactions/Transactions";
import { getLoansBalance, getLoansTransactions } from "../../API/mock";
import "./Loans.scss";

const buttons = {
  primary: "take loan",
  secondary: "pay back",
};

const Loans = () => {
  return (
    <div className="loans">
      <Header signedIn={true} />
      <Balance source={getLoansBalance()} buttons={buttons} />
      <Transactions source={getLoansTransactions} dateVisible={true} />
    </div>
  );
};

export default Loans;
