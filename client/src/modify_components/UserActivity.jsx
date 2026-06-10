import React from "react";

const UserActivity = () => {
  const activities = [
    "Admin logged in",
    "Manager updated inventory",
    "User placed new order",
    "Product added successfully",
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-3">
        Recent Activities
      </h2>

      <ul>
        {activities.map((activity, index) => (
          <li
            key={index}
            className="border-b py-2"
          >
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivity;