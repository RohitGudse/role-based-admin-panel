const Navbar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-2xl font-bold">
        Admin Dashboard
      </h1>

      <button className="bg-black text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default Navbar;