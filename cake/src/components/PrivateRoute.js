import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  if (isAuthenticated) {
    return <Outlet />;
  }

  return (
    <Navigate
      to="/login"
      state={{ message: "You must log in to view this page." }}
      replace
    />
  );
};

export default PrivateRoute;
