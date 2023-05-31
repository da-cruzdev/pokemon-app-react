import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthentificationService from "./services/authentification-services";

const PrivateRoute = () => {
  const isAuthenticated = AuthentificationService.isAuthenticated;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
