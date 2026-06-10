// src/components/NotificationCenter.jsx
import React from "react";

export default function NotificationCenter() {
  const notifications = [
    "New User Registered",
    "Permission Updated",
    "Role Deleted",
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-3">Notifications</h2>

      <ul>
        {notifications.map((item, index) => (
          <li key={index} className="py-2 border-b">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}