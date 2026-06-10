import React from "react";

const NotificationPanel = () => {
  const notifications = [
    "New seller registered",
    "Payment received",
    "Inventory low alert",
    "New support ticket",
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold text-xl mb-3">
        Notifications
      </h2>

      {notifications.map((note, index) => (
        <div
          key={index}
          className="p-2 mb-2 bg-gray-100 rounded"
        >
          {note}
        </div>
      ))}
    </div>
  );
};

export default NotificationPanel;