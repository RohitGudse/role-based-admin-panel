import React from "react";

function RoleDistribution() {
  const roles = [
    { role: "Admin", count: 5 },
    { role: "Manager", count: 12 },
    { role: "User", count: 120 },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        Role Distribution
      </h2>

      {roles.map((item, index) => (
        <div key={index} className="mb-3">
          <div className="flex justify-between">
            <span>{item.role}</span>
            <span>{item.count}</span>
          </div>

          <div className="w-full bg-gray-200 h-2 rounded">
            <div
              className="bg-blue-500 h-2 rounded"
              style={{
                width: `${item.count}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoleDistribution;