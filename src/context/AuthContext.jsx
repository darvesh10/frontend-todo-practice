// src/context/AuthContext.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser as registerUserService, loginUser as loginUserService } from '../services/authService';
import API from '../services/api';

// 1. Context Banana
const AuthContext = createContext();

// 2. Provider Component Banana
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Login function
  const login = async (userData) => {
    try {
      setLoading(true);
      const data = await loginUserService(userData);
      setUser(data); // User state ko update karein
      navigate('/'); // Login ke baad home page ('/') par bhej dein
    } catch (error) {
      console.error('Login failed in context:', error);
      throw error; // Error ko component tak pahunchayein
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    // Hum baad mein cookie clear karne ke liye API call bhi add karenge
    navigate('/login'); // Logout ke baad login page par bhej dein
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom Hook Banana
// Isse humein har component mein useContext aur AuthContext import nahi karna padega
export const useAuth = () => {
  return useContext(AuthContext);
};