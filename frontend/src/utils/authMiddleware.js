import React from "react";
import { Navigate } from "react-router-dom";

const authMiddleware = (Component) => {
  return () => {
    const isLoggedIn = localStorage.getItem("token") !== null; // Or your token storage logic

    return isLoggedIn ? <Component /> : <Navigate to="/signin" replace />;
  };
};

export default authMiddleware;
