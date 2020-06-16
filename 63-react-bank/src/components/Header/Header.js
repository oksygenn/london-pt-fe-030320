import React from "react";
import { Link } from "react-router-dom";
import "../Common/Common.scss";
import "./Header.scss";

const Header = (props) => {
  return (
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
              <Link to="/settings">settings</Link>
            </li>
            <li>
              <Link to="/sign_out">sign out</Link>
            </li>
          </>
        ) : (
          <li>login / sign up</li>
        )}
      </ul>
    </div>
  );
};

export default Header;
