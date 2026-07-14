import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import Dashboard from "../pages/Dashboard";

// Route Configuration
const routeList = [
  {
    id: 1,
    path: "/",
    element: <Dashboard />,
    title: "Dashboard",
  },
];

const AppRoutes = () => {
  // Function to render all application routes
  const renderRoutes = () => {
    return routeList.map((route) => {
      return (
        <Route
          key={route.id}
          path={route.path}
          element={route.element}
        />
      );
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Dynamic Routes */}
        {renderRoutes()}

        {/* Redirect Unknown URLs */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;