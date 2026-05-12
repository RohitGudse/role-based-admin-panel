import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-6 grid grid-cols-3 gap-6">

          <DashboardCard
            title="Users"
            value="1200"
          />

          <DashboardCard
            title="Revenue"
            value="$12K"
          />

          <DashboardCard
            title="Orders"
            value="320"
          />

        </div>

      </div>

    </div>
  );
};

export default Dashboard;