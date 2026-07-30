import React, { useMemo } from "react";

const roleData = [
  {
    id: 1,
    roleName: "Admin",
    users: 5,
    color: "bg-red-500",
  },
  {
    id: 2,
    roleName: "Manager",
    users: 12,
    color: "bg-yellow-500",
  },
  {
    id: 3,
    roleName: "User",
    users: 120,
    color: "bg-blue-500",
  },
];

function RoleDistribution() {

  const totalUsers = useMemo(() => {
    return roleData.reduce((total, role) => total + role.users, 0);
  }, []);

  const updatedRoles = useMemo(() => {
    return roleData.map((role) => ({
      ...role,
      percentage: ((role.users / totalUsers) * 100).toFixed(1),
    }));
  }, [totalUsers]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Role Distribution
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            User roles across the system
          </p>
        </div>

        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">
          Total : {totalUsers}
        </div>
      </div>

      <div className="space-y-5">
        {updatedRoles.map((role) => (
          <div
            key={role.id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">

              <div>
                <h3 className="font-semibold text-gray-800">
                  {role.roleName}
                </h3>

                <p className="text-sm text-gray-500">
                  Active Members
                </p>
              </div>

              <div className="text-right">
                <h4 className="font-bold text-lg">
                  {role.users}
                </h4>

                <p className="text-xs text-gray-500">
                  {role.percentage}%
                </p>
              </div>

            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

              <div
                className={`${role.color} h-full rounded-full transition-all duration-700`}
                style={{
                  width: `${role.percentage}%`,
                }}
              ></div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default RoleDistribution;