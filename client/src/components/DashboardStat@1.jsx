import React from "react";

const stats = [
  {
    title: "Total Users",
    value: "1,250",
    icon: "👥",
  },
  {
    title: "Admins",
    value: "25",
    icon: "🛡️",
  },
  {
    title: "Active Users",
    value: "980",
    icon: "✅",
  },
  {
    title: "Revenue",
    value: "₹85,000",
    icon: "💰",
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-5 border hover:shadow-lg transition"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">{item.title}</h3>
              <p className="text-2xl font-bold mt-2">{item.value}</p>
            </div>
            <span className="text-4xl">{item.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;