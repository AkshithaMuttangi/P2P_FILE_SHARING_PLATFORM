import React from "react";
import Header from "../components/Header";
import "../Styles/InfoPages.css";
import akshitha2 from "../assets/akshitha2.jpeg";
import zenith from "../assets/zenith.jpeg";
import aditya from "../assets/aditya.png";
const About = () => {
  return (
    <>
      <Header />
      <div
        className="info-page-wrapper"
        style={{ padding: "40px 20px", color: "#e2e8f0" }}
      >
        <div
          className="info-card"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "rgba(15, 23, 42, 0.8)",
            padding: "40px",
            borderRadius: "12px",
            border: "1px solid #334155",
          }}
        >
          <div className="glow-effect left"></div>
          <div className="glow-effect right"></div>

          {/* <h1
            className="info-title"
            style={{
              textAlign: "center",
              fontSize: "2rem",
              marginBottom: "1rem",
              color: "#fff",
            }}
          >
            About VeloSync
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#94a3b8",
              marginBottom: "3rem",
            }}
          >
            Velosync is a faster, safer way to share files. Skip the cloud, skip
            the limits, and skip the accounts. Send files directly from your
            device to theirs — secure and instant.
          </p> */}

          {/* Grid for Mission & Tech details */}
          {/* <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            <div>
              <h2 style={{ color: "#38bdf8", marginBottom: "0.5rem" }}>
                The Challenge
              </h2>
              <p style={{ lineHeight: "1.6" }}>
                Relying on third-party clouds means sacrificing speed for
                storage limits and privacy for convenience. Your data shouldn't
                be rendered on a stranger's server.
              </p>
            </div>

            <div>
              <h2 style={{ color: "#38bdf8", marginBottom: "0.5rem" }}>
                The Velosync Approach
              </h2>
              <p style={{ lineHeight: "1.6" }}>
                We cut out the middleman. By establishing a direct, encrypted
                pipeline between sender and receiver, your files remain
                exclusively yours.
              </p>
            </div>

            <div>
              <h2 style={{ color: "#38bdf8", marginBottom: "0.5rem" }}>
                The Technology
              </h2>
              <p style={{ lineHeight: "1.6" }}>
                We use WebRTC technology to build that direct bridge between
                devices. Add in strong end-to-end encryption, and the result is
                a highly secure transfer that moves exactly as fast as your own
                internet connection allows.
              </p>
            </div>

            <div>
              <h2 style={{ color: "#38bdf8", marginBottom: "0.5rem" }}>
                Our Vision
              </h2>
              <p style={{ lineHeight: "1.6" }}>
                To make decentralized, zero-knowledge file sharing the default
                standard—simple enough for everyday use, secure enough for
                sensitive data.
              </p>
            </div>
          </div> */}

          <hr style={{ borderColor: "#334155", margin: "3rem 0" }} />

          {/* Team Section */}
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.8rem",
              color: "#fff",
              marginBottom: "2rem",
            }}
          >
            The Developers
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            {/* Akshitha Profile */}
            <div
              style={{
                flex: "1 1 300px",
                background: "#1e293b",
                padding: "1.5rem",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <img
                src={akshitha2}
                alt="Akshitha Muttangi"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "1rem",
                  border: "3px solid #8dc7e1ff",
                }}
              />
              <h3 style={{ color: "#fff", margin: "0 0 0.5rem 0" }}>
                Akshitha Muttangi
              </h3>
              <h4
                style={{
                  color: "#38bdf8",
                  fontSize: "0.9rem",
                  margin: "0 0 1rem 0",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Project Architect & WebRTC Lead
              </h4>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                  color: "#cbd5e1",
                }}
              >
                Computer Science student at ABV-IIITM Gwalior passionate about
                building secure web applications. Implemented the core WebRTC
                architecture enabling real-time peer-to-peer file transfers and
                integrated end-to-end encryption to ensure secure and private
                data sharing.
              </p>
            </div>

            {/* Zenith Profile */}
            <div
              style={{
                flex: "1 1 300px",
                background: "#1e293b",
                padding: "1.5rem",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <img
                src={zenith}
                alt="zenith reddy"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "1rem",
                  border: "3px solid #38bdf8",
                }}
              />
              <h3 style={{ color: "#fff", margin: "0 0 0.5rem 0" }}>
                Zenith Reddy Pathakota
              </h3>
              <h4
                style={{
                  color: "#06adf4ff",
                  fontSize: "0.9rem",
                  margin: "0 0 1rem 0",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Full-Stack Integration Engineer
              </h4>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                  color: "#cbd5e1",
                }}
              >
                Computer Science student at ABV-IIITM Gwalior focused on
                building scalable web systems. Contributed to Velosync with
                frontend development, Socket.io integration, and session
                management, while improving the real-time UI/UX for faster file
                transfers.
              </p>
            </div>
          </div>

          <hr style={{ borderColor: "#334155", margin: "4rem 0 3rem 0" }} />

          {/* Mentor Section */}
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              color: "#fff",
              marginBottom: "2rem",
            }}
          >
            Project Mentor
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                maxWidth: "650px",
                background: "#1e293b",
                padding: "1.5rem",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <img
                src={aditya}
                alt="Aditya Kumar Singh"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "1rem",
                  border: "3px solid #38bdf8",
                }}
              />
              <h3 style={{ color: "#fff", margin: "0 0 0.5rem 0" }}>
                Aditya Kumar Singh
              </h3>
              <h4
                style={{
                  color: "#facc15",
                  fontSize: "0.9rem",
                  margin: "0 0 1rem 0",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Technical Advisor
              </h4>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                  color: "#cbd5e1",
                }}
              >
                SDE Intern at project44, GSoC '25 Contributor, and Full-Stack
                Developer, PR at IIIT Gwalior. Guiding the Velosync team in
                scalable architecture and modern web practices. Brings extensive
                experience in building AI-enhanced, real-time collaborative
                tools and a strong track record of mentoring upcoming
                developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
