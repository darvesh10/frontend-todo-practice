// src/pages/RegisterPage.jsx

import React, { useState } from 'react';
import { registerUser } from '../services/authService'; // Service ko import karein

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handleSubmit ko async banayein
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Service function ko call karein aur form data pass karein
      const data = await registerUser({ name, email, password });
      console.log('Registration successful:', data);
      alert('Registration successful! Please login.');
      // Hum baad mein user ko login page par bhej denge
    } catch (error) {
      console.error('Registration failed:', error);
      // Backend se aaye error message ko dikhayein
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Form inputs mein koi change nahi hai */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;