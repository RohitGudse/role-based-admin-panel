import {
  Home,
  Users,
  Settings,
} from "lucide-react";

const Sidebar = () => {

  return (
    <div className="w-64 h-screen bg-black text-white p-5">

      <h1 className="text-3xl font-bold mb-10">
        Admin
      </h1>

      <div className="space-y-6">

        <div className="flex gap-3 cursor-pointer">
          <Home />
          Dashboard
        </div>

        <div className="flex gap-3 cursor-pointer">
          <Users />
          Users
        </div>

        <div className="flex gap-3 cursor-pointer">
          <Settings />
          Settings
        </div>

      </div>

    </div>
  );
};

export default Sidebar;