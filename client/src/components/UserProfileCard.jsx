
import React from "react";

const UserProfileCard = ({ name, email, role, avatar }) => {
  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Profile Header */}
      <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

      {/* User Information */}
      <div className="relative px-6 pb-6 text-center">

        <img
          src={avatar}
          alt={`${name}'s profile`}
          className="w-24 h-24 mx-auto -mt-12 rounded-full border-4 border-white object-cover shadow-md"
        />

        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          {name}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {email}
        </p>

        <div className="mt-5">
          <span className="inline-block rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            {role}
          </span>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-4">
          <p className="text-xs text-gray-400">
            USER PROFILE
          </p>
        </div>

      </div>
    </div>
  );
};

// User Data
const App = () => {
  const userDetails = {
    name: "Rohit Gudse",
    email: "rohit@example.com",
    role: "Admin",
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <UserProfileCard {...userDetails} />
    </div>
  );
};

export default App;
