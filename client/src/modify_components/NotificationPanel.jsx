import React, { useState } from "react";

const NotificationPanel = () => {
  // Notification data
  const [notificationList] = useState([
    {
      id: 1,
      title: "New Seller Registered",
      message: "A new seller account has been successfully created.",
      type: "success",
      time: "5 Minutes Ago",
      read: false,
    },
    {
      id: 2,
      title: "Payment Received",
      message: "Customer payment has been received successfully.",
      type: "payment",
      time: "20 Minutes Ago",
      read: true,
    },
    {
      id: 3,
      title: "Inventory Low",
      message: "Stock quantity is below the minimum limit.",
      type: "warning",
      time: "1 Hour Ago",
      read: false,
    },
    {
      id: 4,
      title: "Support Ticket",
      message: "A customer has created a new support request.",
      type: "info",
      time: "3 Hours Ago",
      read: true,
    },
    {
      id: 5,
      title: "Order Delivered",
      message: "Your latest order has been delivered successfully.",
      type: "success",
      time: "Yesterday",
      read: true,
    },
  ]);

  // Total unread notifications
  const unreadNotifications = notificationList.filter(
    (notification) => !notification.read
  ).length;

  // Return emoji according to notification type
  const getNotificationIcon = (type) => {
    switch (type) {
      case "success":
        return "✅";
      case "payment":
        return "💳";
      case "warning":
        return "⚠️";
      case "info":
        return "📩";
      default:
        return "🔔";
    }
  };

  // Return background color according to notification type
  const getNotificationColor = (type) => {
    switch (type) {
      case "success":
        return "bg-green-100";
      case "payment":
        return "bg-blue-100";
      case "warning":
        return "bg-yellow-100";
      case "info":
        return "bg-purple-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">

      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-5">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Notification Center
          </h2>
          <p className="text-sm text-gray-500">
            Stay updated with recent activities
          </p>
        </div>

        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {unreadNotifications} New
        </div>
      </div>

      {/* Notification List */}
      <div className="space-y-4">
        {notificationList.length > 0 ? (
          notificationList.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border transition duration-300 hover:shadow-md ${getNotificationColor(
                notification.type
              )}`}
            >
              <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">

                  <div className="text-2xl">
                    {getNotificationIcon(notification.type)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {notification.title}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </p>

                    <p className="text-xs text-gray-500 mt-2">
                      {notification.time}
                    </p>
                  </div>

                </div>

                {!notification.read && (
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            No notifications available.
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 border-t pt-4 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition duration-300">
          View All Notifications
          client All Notifications
        </button>
      </div>

    </div>
  );
};

export default NotificationPanel;