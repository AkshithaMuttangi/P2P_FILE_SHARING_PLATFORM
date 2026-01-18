import React from "react";
import FileSender from "./FileSender";
import FileReceiver from "./FileReceiver";
import TransferStatus from "./TransferStatus";
import ActivityLog from "./ActivityLog";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header>
        <h2>Raysync</h2>
        <nav>
          <span className="active">Home</span>
          <span>Activity</span>
          <span>Settings</span>
        </nav>
        <div className="profile-icons">
          <span>👤</span>
        </div>
      </header>
      <div className="dashboard-grid">
        <FileSender />
        <TransferStatus />
        <FileReceiver />
        <ActivityLog />
      </div>
    </div>
  );
};

export default Dashboard;
