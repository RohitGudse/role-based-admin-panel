// src/components/DashboardStats.jsx
import React from "react";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-blue-100 p-4 rounded">
        <h3>Total Users</h3>
        <p>150</p>
      </div>

      <div className="bg-green-100 p-4 rounded">
        <h3>Total Roles</h3>
        <p>12</p>
      </div>

      <div className="bg-yellow-100 p-4 rounded">
        <h3>Active Users</h3>
        <p>125</p>
      </div>
    </div>
  );
}