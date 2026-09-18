import React from "react";

const user = {
  name: "Rohit Gudse",
  email: "rohit@example.com",
  role: "Admin",
  avatar: "https://i.pravatar.cc/150?img=12",
};

const UserProfileCard = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">
      <div className="flex flex-col items-center text-center">
        <img
          src={user.avatar}
          alt={`${user.name} profile`}
          className="h-24 w-24 rounded-full object-cover ring-4 ring-blue-100"
        />

        <h2 className="mt-4 text-xl font-bold text-gray-800">
          {user.name}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {user.email}
        </p>

        <div className="mt-4">
          <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            {user.role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;