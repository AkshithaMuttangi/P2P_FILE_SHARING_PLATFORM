import React, { useState } from "react";
import "../../styles/FileSender.css";

const FileSender = () => {
  const [files, setFiles] = useState([]);

  const handleAddFiles = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);
  };

  const handleSend = () => {
    alert("Files sent: " + files.map(f => f.name).join(", "));
    setFiles([]);
  };

  return (
    <div className="file-sender card">
      <h3>Send Files</h3>
      <input
        type="file"
        multiple
        onChange={handleAddFiles}
        className="file-input"
      />
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name} - {(file.size / (1024 * 1024)).toFixed(2)} MB
            <button onClick={() => setFiles(files.filter((_, i) => i !== index))}>x</button>
          </li>
        ))}
      </ul>
      <button className="send-btn" onClick={handleSend}>Send</button>
    </div>
  );
};

export default FileSender;
