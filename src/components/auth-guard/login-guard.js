import React from "react";
import { Navigate } from "react-router-dom";
import { USER_LOGIN } from "../../constant/routes";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to={USER_LOGIN} />;
}

export default ProtectedRoute;
    