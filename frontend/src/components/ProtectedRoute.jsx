import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  console.log("Token:", token);
  console.log("Expected Role:", role);
  console.log("User Role:", userRole);

  // Handle edge case if no token or role exists
  if (!token || userRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
