import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />

      <div style={{ paddingTop: "120px", color: "white", textAlign: "center" }}>
        <h1>About Velosync</h1>

        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          Velosync is a decentralized peer-to-peer file sharing platform built
          using WebRTC technology.
        </p>

        <h2>Development Team</h2>

        <p>Harish — Frontend Developer</p>
        <p>Team Member 2 — Backend Developer</p>
        <p>Team Member 3 — UI/UX Designer</p>

        <h2>Mentor</h2>

        <p>Dr. XYZ</p>

        <p style={{ marginTop: "20px" }}>
          This project was developed as part of a college innovation contest
          to demonstrate secure decentralized file transfer.
        </p>
      </div>
    </>
  );
};

export default About;