import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ Component, ...rest }) => {
  // authentication logic
  const isAuthenticated = Cookies.get("userToken");
  //const isAuthenticated = true;

  return isAuthenticated ? (
    <Component {...rest} /> // Render the Component directly
  ) : (
    <Navigate to="/login" /> // Redirect to Rules page if not authenticated
  );
};

export default ProtectedRoute;
