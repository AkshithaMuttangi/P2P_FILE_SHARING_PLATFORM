import React from "react";
import Header from "../components/Header";
import "../Styles/InfoPages.css";

const HowItWorks = () => {
  return (
    <>
      <Header />
      <div className="info-page-wrapper">
        <div className="info-card">
          <div className="glow-effect left"></div>
          <div className="glow-effect right"></div>

          <h1 className="info-title">How Velosync Works</h1>

          <div className="info-content">
            <p className="text-center mb-6">
              Velosync enables secure peer-to-peer file sharing using WebRTC.
              Files move directly between devices without being stored on servers.
            </p>

            <div className="step-list">
              <div className="step-item">
                <h3>1. Create Session</h3>
                <p>A unique, secure session link and QR code is generated.</p>
              </div>
              <div className="step-item">
                <h3>2. Share Link</h3>
                <p>Send the link or show the QR code to another device.</p>
              </div>
              <div className="step-item">
                <h3>3. Peer Connection</h3>
                <p>The second device joins the session to establish a secure handshake.</p>
              </div>
              <div className="step-item">
                <h3>4. Direct Transfer</h3>
                <p>A secure peer-to-peer connection transfers files instantly with high speeds.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;