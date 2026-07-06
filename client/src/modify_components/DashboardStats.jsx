import React from "react";

const DashboardStats = () => {
  const stats = [
    { title: "Users", value: "1,250" },
    { title: "Orders", value: "845" },
    { title: "Revenue", value: "₹52,000" },
    { title: "Products", value: "320" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-lg p-4 border"
        >
          <h3 className="text-gray-500">{item.title}</h3>
          <p className="text-2xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );

    return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-lg p-4 border"
        >
          <h3 className="text-gray-500">{item.title}</h3>
          <p className="text-2xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;