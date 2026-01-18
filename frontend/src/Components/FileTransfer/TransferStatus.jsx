import React from "react";
import "../../styles/TransferStatus.css";

const TransferStatus = () => {
  const upload = 45;
  const download = 45;

  return (
    <div className="transfer-status card">
      <h3>Transfer Status</h3>
      <div className="status">
        <p>Uploading file</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${upload}%` }}></div>
        </div>
        <span>{upload}%</span>
      </div>
      <div className="status">
        <p>Downloading file</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${download}%` }}></div>
        </div>
        <span>{download}%</span>
      </div>
    </div>
  );
};

export default TransferStatus;
