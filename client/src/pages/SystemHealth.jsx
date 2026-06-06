import React from "react";

function SystemHealth() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        System Health
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Server Status</span>
          <span className="text-green-600">
            Online
          </span>
        </div>

        <div className="flex justify-between">
          <span>Database</span>
          <span className="text-green-600">
            Connected
          </span>
        </div>

        <div className="flex justify-between">
          <span>API Status</span>
          <span className="text-green-600">
            Running
          </span>
        </div>
      </div>
    </div>
  );
}

export default SystemHealth;