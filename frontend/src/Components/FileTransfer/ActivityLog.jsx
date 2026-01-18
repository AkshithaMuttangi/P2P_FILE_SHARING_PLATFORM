import React from "react";
import "../../styles/activityLog.css";

const ActivityLog = () => {
  const activities = [
    "You sent img.png - 2 min ago",
    "Received vid4.mp4 - 5 min ago",
    "Sent ui.png - 7 min ago"
  ];

  return (
    <div className="activity-log card">
      <h3>Activity Log</h3>
      <ul>
        {activities.map((act, idx) => (
          <li key={idx}>{act}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
