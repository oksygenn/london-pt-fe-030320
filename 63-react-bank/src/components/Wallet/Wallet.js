import React from "react";
import "./Wallet.scss";
import Header from "../Header/Header";
import Balance from "../Wallet/Balance/Balance";
import Transactions from "./Transactions/Transactions";
import { getTransactions, getBalance } from "../../API/mock";

const Wallet = () => {
  return (
    <div className="wallet">
      <Header signedIn={true} />
      <Balance source={getBalance()} />
      <Transactions source={getTransactions()} detailsExpandable={true} />
    </div>
  );
};

export default Wallet;
