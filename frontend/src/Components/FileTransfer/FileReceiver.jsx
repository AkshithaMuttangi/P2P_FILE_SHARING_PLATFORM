import React, { useState } from "react";
import "../../styles/FileReceiver.css";

const FileReceiver = () => {
  const [receivedFiles, setReceivedFiles] = useState([
    { name: "vid.mp4" },
    { name: "vid4.mp4" }
  ]);

  return (
    <div className="file-receiver card">
      <h3>Receive Files</h3>
      {receivedFiles.length === 0 && <p>Waiting for files...</p>}
      <ul>
        {receivedFiles.map((file, index) => (
          <li key={index}>
            {file.name} <button>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileReceiver;
