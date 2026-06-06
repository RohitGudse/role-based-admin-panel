import React from "react";

const permissions = [
  {
    role: "Admin",
    create: true,
    update: true,
    delete: true,
  },
  {
    role: "Manager",
    create: true,
    update: true,
    delete: false,
  },
  {
    role: "User",
    create: false,
    update: false,
    delete: false,
  },
];

const PermissionMatrix = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow overflow-auto">
      <h2 className="text-xl font-semibold mb-4">
        Role Permissions
      </h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Role</th>
            <th className="p-3 border">Create</th>
            <th className="p-3 border">Update</th>
            <th className="p-3 border">Delete</th>
          </tr>
        </thead>

        <tbody>
          {permissions.map((item, index) => (
            <tr key={index}>
              <td className="p-3 border">{item.role}</td>
              <td className="p-3 border">
                {item.create ? "✅" : "❌"}
              </td>
              <td className="p-3 border">
                {item.update ? "✅" : "❌"}
              </td>
              <td className="p-3 border">
                {item.delete ? "✅" : "❌"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionMatrix;