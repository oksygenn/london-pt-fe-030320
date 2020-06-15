import React from "react";
import "./Savings.scss";
import Balance from "../Wallet/Balance/Balance";
import Header from "../Header/Header";

const Savings = () => {
  return (
    <div className="savings">
      <Header signedIn={true} />
      <Balance />
    </div>
  );
};

export default Savings;
