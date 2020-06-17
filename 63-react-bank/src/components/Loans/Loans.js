import React, { useState } from "react";
import Balance from "../Wallet/Balance/Balance";
import Transactions from "../Wallet/Transactions/Transactions";
import {
  getLoansBalance,
  getLoansTransactions,
  userLoansBalance,
  userBalance,
} from "../../API/mock";
import "./Loans.scss";

const Loans = () => {
  const [balance, setBalance] = useState(getLoansBalance());

  const buttons = {
    primary: "take loan",
    secondary: "pay back",
    inputAction: (value) => {
      userLoansBalance.balance -= value;
      setBalance({ ...userLoansBalance });
      userBalance.balance += value;
    },
  };

  return (
    <div className="loans">
      <Balance source={balance} buttons={buttons} />
      <Transactions source={getLoansTransactions} dateVisible={true} />
    </div>
  );
};

export default Loans;
