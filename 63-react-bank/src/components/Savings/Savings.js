import React from "react";
import "./Savings.scss";
import Balance from "../Wallet/Balance/Balance";
import Header from "../Header/Header";
import { getSavingsTransactions, getSavingsBalance } from "../../API/mock";
import Transactions from "../Wallet/Transactions/Transactions";

const buttons = {
  primary: "pay in",
  secondary: "pay out",
};

const Savings = () => {
  return (
    <div className="savings">
      <Balance source={getSavingsBalance()} buttons={buttons} />
      <Transactions
        dateVisible={true}
        detailsExpandable={false}
        source={getSavingsTransactions()}
      />
    </div>
  );
};

export default Savings;
