import React from "react";
import Header from "../components/Header";
import "../Styles/InfoPages.css";

const Privacy = () => {
  return (
    <>
      <Header />
      <div className="info-page-wrapper">
        <div className="info-card">
          <div className="glow-effect left"></div>
          <div className="glow-effect right"></div>

          <h1 className="info-title">Privacy & Security</h1>

          <div className="info-content text-center">
            <p className="mb-6">
              Velosync is designed from the ground up to protect your data with end-to-end security.
            </p>

            <ul className="feature-list">
              <li>
                <ShieldIcon /> 
                <span>Direct peer-to-peer connection</span>
              </li>
              <li>
                <ShieldIcon /> 
                <span>No files are ever stored on our servers</span>
              </li>
              <li>
                <ShieldIcon /> 
                <span>Secure WebRTC encrypted communication</span>
              </li>
              <li>
                <ShieldIcon /> 
                <span>Temporary session links that expire automatically</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

// --- SVG ICON COMPONENT ---
const ShieldIcon = () => (
  <svg 
    width="24" height="24" viewBox="0 0 24 24" 
    fill="none" stroke="#4ade80" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

export default Privacy;