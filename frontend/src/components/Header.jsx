import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import logo from "../assets/logo.jpeg"; // your logo image

const Header = () => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Velosync Logo" className="nav-logo" />
        <span className="logo-text">Velosync</span>
      </div>

      <nav className="nav-links">
        <Link to="/how-it-works">How it Works</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;