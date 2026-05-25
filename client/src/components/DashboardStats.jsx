import React from "react";

const DashboardStats = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,250",
    },
    {
      title: "Revenue",
      value: "$15,000",
    },
    {
      title: "Orders",
      value: "320",
    },
    {
      title: "Admins",
      value: "12",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-5">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-xl shadow"
        >
          <h2 className="text-gray-500">
            {item.title}
          </h2>

          <p className="text-3xl font-bold mt-2">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;