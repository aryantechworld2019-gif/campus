// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('authToken');

  if (!isAuthenticated) {
    // Redirect to login page, but save the attempted location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
