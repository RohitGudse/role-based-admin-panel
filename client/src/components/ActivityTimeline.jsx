import React from "react";

const activityList = [
  { id: 1, text: "Rohit added a new user" },
  { id: 2, text: "Admin updated permissions" },
  { id: 3, text: "User login successful" },
  { id: 4, text: "Manager generated report" },
];

function ActivityTimeline() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-5">
        Recent Activities
      </h2>

      <div className="space-y-4">
        {activityList.map(({ id, text }) => (
          <div
            key={id}
            className="flex items-center border-l-4 border-blue-500 pl-4 py-2"
          >
            <p className="text-gray-700">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivityTimeline;