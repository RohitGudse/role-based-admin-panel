import React from "react";

const activities = [
  {
    id: 1,
    message: "Rohit added a new user",
  },
  {
    id: 2,
    message: "Admin updated permissions",
  },
  {
    id: 3,
    message: "User login successful",
  },
  {
    id: 4,
    message: "Manager generated report",
  },
];

const ActivityItem = ({ message }) => (
  <div className="flex gap-3 items-center">
    <span className="w-3 h-3 rounded-full bg-blue-500"></span>

    <p className="text-gray-700 text-sm">
      {message}
    </p>
  </div>
);

const ActivityTimeline = () => {
  return (
    <section className="rounded-xl bg-white p-6 shadow-md">
      <header className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Activities
        </h2>
      </header>

      <div className="space-y-5">
        {activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            message={activity.message}
          />
        ))}
      </div>
    </section>
  );
};

export default ActivityTimeline;