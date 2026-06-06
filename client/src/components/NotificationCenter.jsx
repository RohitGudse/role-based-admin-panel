import React, { useState } from "react";

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    "New user registered",
    "Permission updated",
    "System backup completed",
  ]);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Notifications
      </h2>

      {notifications.map((note, index) => (
        <div
          key={index}
          className="p-3 border-b"
        >
          {note}
        </div>
      ))}
    </div>
  );
};

export default NotificationCenter;