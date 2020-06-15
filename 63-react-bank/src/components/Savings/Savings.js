import React from "react";
import "./Savings.scss";
import Balance from "../Wallet/Balance/Balance";
import Header from "../Header/Header";
import { getSavingsTransactions } from "../../API/mock";
import Transactions from "../Wallet/Transactions/Transactions";

const Savings = () => {
  return (
    <div className="savings">
      <Header signedIn={true} />
      <Balance buttons={true} />
      <Transactions source={getSavingsTransactions()} />
    </div>
  );
};

export default Savings;
