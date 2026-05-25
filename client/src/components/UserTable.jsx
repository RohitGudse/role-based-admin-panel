import React from "react";

const UserTable = () => {
  const users = [
    {
      id: 1,
      name: "Rohit",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Aman",
      role: "Editor",
      status: "Inactive",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Role</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b text-center"
            >
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;