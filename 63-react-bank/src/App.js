import React, { useState } from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import Wallet from "../src/components/Wallet/Wallet";
import { SignUp } from "./components/SignUp/SignUp";
import Savings from "./components/Savings/Savings";
import Loans from "./components/Loans/Loans";
import { users } from "./API/mock";

function App() {
  // FIXME: replace with undefined before release!
  const [user, setUser] = useState(users[0]);

  const login = (user) => {
    setUser(user);
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login onLogin={login} />
        </Route>
        <Route path="/signup" component={SignUp} />
        {user === undefined ? (
          <Redirect to="/login" />
        ) : (
          <>
            <Route path="/" exact>
              <Wallet user={user} />
            </Route>
            <Route path="/savings">
              <Savings user={user} />
            </Route>
            <Route path="/loans">
              <Loans user={user} />
            </Route>
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
