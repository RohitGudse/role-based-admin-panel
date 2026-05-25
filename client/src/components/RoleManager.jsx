import React from "react";

const RoleManager = () => {
  const roles = [
    "Admin",
    "Editor",
    "Manager",
    "User",
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        Role Management
      </h2>

      {roles.map((role, index) => (
        <div
          key={index}
          className="flex justify-between border-b py-3"
        >
          <span>{role}</span>

          <button className="bg-blue-500 text-white px-4 py-1 rounded">
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default RoleManager;