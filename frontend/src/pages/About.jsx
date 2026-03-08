import React from "react";
import Header from "../components/Header";
import "../Styles/InfoPages.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="info-page-wrapper">
        <div className="info-card">
          <div className="glow-effect left"></div>
          <div className="glow-effect right"></div>

          <h1 className="info-title">About Velosync</h1>

          <div className="info-content text-center">
            <p className="mb-6">
              Velosync is a decentralized peer-to-peer file sharing platform built
              using WebRTC technology.
            </p>

            <h2>Development Team</h2>
            <p><strong>Harish</strong> — Frontend Developer</p>
            <p><strong>Team Member 2</strong> — Backend Developer</p>
            <p><strong>Team Member 3</strong> — UI/UX Designer</p>

            <h2>Mentor</h2>
            <p><strong>Dr. XYZ</strong></p>

            <p className="mt-4 text-sm text-slate-400">
              This project was developed as part of a college innovation contest
              to demonstrate secure decentralized file transfer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;