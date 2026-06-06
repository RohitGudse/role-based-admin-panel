import React from "react";

const activities = [
  "Rohit added a new user",
  "Admin updated permissions",
  "User login successful",
  "Manager generated report",
];

const ActivityTimeline = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>

      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="border-l-4 border-blue-500 pl-4 py-2"
          >
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityTimeline;