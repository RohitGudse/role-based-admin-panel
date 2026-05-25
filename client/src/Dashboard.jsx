import React from "react";
import DashboardStats from "../components/dashboard/DashboardStats";
import RevenueChart from "../components/charts/RevenueChart";
import UserTable from "../components/users/UserTable";

const Dashboard = () => {
  return (
    <div className="p-6">
      <DashboardStats />

      <div className="mt-6">
        <RevenueChart />
      </div>

      <div className="mt-6">
        <UserTable />
      </div>
    </div>
  );
};

export default Dashboard;