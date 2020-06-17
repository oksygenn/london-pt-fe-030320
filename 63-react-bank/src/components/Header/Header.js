import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Settings from "./Settings/Settings";

const Header = (props) => {
  const [settingsVisible, setSettingsVisible] = useState(false);

  const toggleSettings = () => {
    setSettingsVisible(!settingsVisible);
  };

  return (
    <>
      <div className="login_header">
        <div className="logo">
          <img src="./images/CH.svg" alt="company logo" />
        </div>
        <ul className="nav_menu">
          {props.signedIn ? (
            <>
              <li>
                <Link to="/">Wallet</Link>
              </li>
              <li>
                <Link to="/savings">Savings</Link>
              </li>
              <li>
                <Link to="/loans">loans</Link>
              </li>
              <li>
                <a href="#" onClick={toggleSettings}>
                  settings
                </a>
              </li>
              <li>
                <Link to="/signout">sign out</Link>
              </li>
            </>
          ) : (
            <li>login / sign up</li>
          )}
        </ul>
      </div>
      {settingsVisible ? (
        <Settings
          goBack={toggleSettings}
          user={props.user}
          updateUser={props.updateUser}
        />
      ) : null}
      {props.user?.blocked ? (
        <div className="blocked_account">
          <h1>Account is blocked!</h1>
        </div>
      ) : null}
    </>
  );
};

export default Header;
