// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Agar user logged in nahi hai, toh use /login page par bhej do
    return <Navigate to="/login" />;
  }

  // Agar user logged in hai, toh us page ko dikhao jo access karna chahta hai
  return children;
};

export default ProtectedRoute;