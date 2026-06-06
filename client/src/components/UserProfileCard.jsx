import React from "react";

const UserProfileCard = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-sm">
      <div className="flex flex-col items-center">
        <img
          src="https://i.pravatar.cc/150"
          alt="user"
          className="w-24 h-24 rounded-full"
        />

        <h2 className="mt-4 text-xl font-bold">
          Rohit Gudse
        </h2>

        <p className="text-gray-500">
          rohit@example.com
        </p>

        <span className="mt-3 px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
          Admin
        </span>
      </div>
    </div>
  );
};

export default UserProfileCard;