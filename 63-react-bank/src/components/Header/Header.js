import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="login_header">
      <div className="logo">
        <img src="./images/CH.svg" alt="company logo" />
      </div>
      <div className="nav_menu">
        <Link to="/login">Login</Link>
        <span>/</span>
        <Link to="/sign_up">Sign up </Link>
      </div>
    </div>
  );
};

export default Header;
