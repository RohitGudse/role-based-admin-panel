import React, { useState } from "react";

const Navbar = () => {
  // Navigation Menu
  const navigationLinks = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Users",
      path: "/users",
    },
    {
      id: 3,
      name: "Orders",
      path: "/orders",
    },
    {
      id: 4,
      name: "Reports",
      path: "/reports",
    },
    {
      id: 5,
      name: "Settings",
      path: "/settings",
    },
  ];

  // Active Menu State
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  // Search State
  const [searchValue, setSearchValue] = useState("");

  // Login State
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    alert("Login Successful");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    alert("Logout Successful");
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex justify-between items-center px-8 py-4">

          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold text-blue-600">
              Admin Dashboard
            </h1>

            <p className="text-gray-500 text-sm">
              Manage your application efficiently
            </p>
          </div>

          {/* Search Box */}
          <div className="w-80">
            <input
              type="text"
              placeholder="Search anything..."
              value={searchValue}
              onChange={(e) =>
                setSearchValue(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-4">

            <div className="text-right">
              <h3 className="font-semibold">
                Rohit Gudse
              </h3>

              <p className="text-sm text-gray-500">
                Administrator
              </p>
            </div>

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-12 h-12 rounded-full border"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gray-100 px-8 py-3 flex justify-between items-center">

          <ul className="flex gap-6">

            {navigationLinks.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() =>
                    setActiveMenu(item.name)
                  }
                  className={`font-medium transition duration-300 ${
                    activeMenu === item.name
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}

          </ul>

          {/* Authentication Buttons */}
          <div className="flex gap-3">

            {!loggedIn ? (
              <button
                onClick={handleLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
              >
                Logout
              </button>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;