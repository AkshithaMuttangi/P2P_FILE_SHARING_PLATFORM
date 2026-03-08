import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Header.css";
import logo from "../assets/logo.svg"; 

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <header className="navbar-wrapper">
      <div className="navbar">
        {/* Left: Logo */}
        <Link to="/" className="nav-left">
          <img src={logo} alt="Velosync Logo" className="nav-logo" />
          <span className="logo-text">VELOSYNC</span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="nav-links">
          <Link to="/" className={isActive("/")}>Send</Link>
          <Link to="/how-it-works" className={isActive("/how-it-works")}>How it Works</Link>
          <Link to="/privacy" className={isActive("/privacy")}>Privacy</Link>
          <Link to="/about" className={isActive("/about")}>About</Link>
        </nav>

        {/* Right: Action Button */}
        <div className="nav-right">
          <a 
            href="https://github.com/AkshithaMuttangi/P2P_FILE_SHARING_PLATFORM" 
            target="_blank" 
            className="github-btn"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default Header;