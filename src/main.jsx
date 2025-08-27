// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // AuthProvider ko import karein
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* BrowserRouter ke andar App ko wrap karein */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);