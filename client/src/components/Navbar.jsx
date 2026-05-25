import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-2xl font-bold">
        Admin Panel
      </h1>

      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>

        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;