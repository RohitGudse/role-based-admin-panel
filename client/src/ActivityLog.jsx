// src/components/ActivityLog.jsx
import React from "react";

const activities = [
  { id: 1, action: "User Created", user: "Admin" },
  { id: 2, action: "Role Updated", user: "Manager" },
  { id: 3, action: "Permission Changed", user: "Admin" },
];

export default function ActivityLog() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-3">Activity Log</h2>
      {activities.map((item) => (
        <div key={item.id} className="border-b py-2">
          <p>{item.action}</p>
          <small>{item.user}</small>
        </div>
      ))}
    </div>
  );
}