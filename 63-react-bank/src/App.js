import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Wallet from "../src/components/Wallet/Wallet";
import { SignUp } from "./components/SignUp/SignUp";
import Savings from "./components/Savings/Savings";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Wallet} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/savings" component={Savings} />
      </Switch>
    </div>
  );
}

export default App;
