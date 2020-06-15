import React from "react";
import "./Wallet.scss";
import Header from "../Header/Header";
import Balance from "../Wallet/Balance/Balance";
import Transactions from "./Transactions/Transactions";
import { getTransactions } from "../../API/mock";

const Wallet = () => {
  return (
    <div className="wallet">
      <Header signedIn={true} />
      <Balance />
      <Transactions source={getTransactions()} />
    </div>
  );
};

export default Wallet;
