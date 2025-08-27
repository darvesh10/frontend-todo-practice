// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar ko import karein
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar ko yahan add karein */}
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Home page ka route hum agle step mein banayenge */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
