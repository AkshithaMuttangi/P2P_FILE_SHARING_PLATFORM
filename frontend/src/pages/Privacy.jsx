import React from "react";
import Header from "../components/Header";

const Privacy = () => {
  return (
    <>
      <Header />

      <div style={{ paddingTop: "120px", color: "white", textAlign: "center" }}>
        <h1>Privacy & Security</h1>

        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          Velosync is designed to protect your data.
        </p>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>✔ Direct peer-to-peer connection</li>
          <li>✔ No files stored on servers</li>
          <li>✔ Secure WebRTC communication</li>
          <li>✔ Temporary session links</li>
        </ul>
      </div>
    </>
  );
};

export default Privacy;