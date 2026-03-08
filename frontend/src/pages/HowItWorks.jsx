import React from "react";
import Header from "../components/Header";
import "../Styles/HowItWorks.css";

const HowItWorks = () => {
  return (
    <>
      <Header />

      <div className="info-page">
        <div className="info-card">

          {/* glow effects like session page */}
          <div className="glow-effect left"></div>
          <div className="glow-effect right"></div>

          <h1>How Velosync Works</h1>

          <p>
            Velosync enables secure peer-to-peer file sharing using WebRTC.
            Files move directly between devices without being stored on servers.
          </p>

          <h3>1. Create Session</h3>
          <p>A unique secure session link is generated.</p>

          <h3>2. Share Link</h3>
          <p>Send the link or QR code to another device.</p>

          <h3>3. Peer Connection</h3>
          <p>The second device joins the session.</p>

          <h3>4. Direct Transfer</h3>
          <p>A secure peer-to-peer connection transfers files instantly.</p>

        </div>
      </div>
    </>
  );
};

export default HowItWorks;