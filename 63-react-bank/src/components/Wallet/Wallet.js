import React from "react";
import Header from "../Header/Header";
import Balance from "../Wallet/Balance/Balance";
import Transactions from "./Transactions/Transactions";

const Wallet = () => {
  return (
    <>
      <Header signedIn={true} />
      <Balance />
      <Transactions />
    </>
  );
};

export default Wallet;
