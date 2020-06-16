import React, { useState } from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import Wallet from "../src/components/Wallet/Wallet";
import { SignUp } from "./components/SignUp/SignUp";
import Savings from "./components/Savings/Savings";
import Loans from "./components/Loans/Loans";
import { users } from "./API/mock";
import Header from "./components/Header/Header";

function App() {
  const [user, setUser] = useState(undefined);

  const updateUser = (user) => {
    setUser(user);
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Header />
          <Login onLogin={updateUser} />
        </Route>
        <Route path="/signup">
          <Header />
          <SignUp />
        </Route>
        {user === undefined ? (
          <Redirect to="/login" />
        ) : (
          <>
            <Route path="/" exact>
              <Header user={user} updateUser={updateUser} signedIn={true} />
              <Wallet user={user} />
            </Route>
            <Route path="/savings">
              <Header user={user} updateUser={updateUser} signedIn={true} />
              <Savings user={user} />
            </Route>
            <Route path="/loans">
              <Header user={user} updateUser={updateUser} signedIn={true} />
              <Loans user={user} />
            </Route>
            <Route path="/signout">
              <Redirect to="/login" />
            </Route>
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
