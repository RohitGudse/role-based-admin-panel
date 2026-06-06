import React from "react";

const users = [
  { id: 1, name: "Rohit", role: "Admin" },
  { id: 2, name: "Rahul", role: "Manager" },
  { id: 3, name: "Amit", role: "User" },
];

function RecentUsers() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Recent Users</h2>

      {users.map((user) => (
        <div
          key={user.id}
          className="flex justify-between py-2 border-b"
        >
          <span>{user.name}</span>
          <span>{user.role}</span>
        </div>
      ))}
    </div>
  );
}

export default RecentUsers;