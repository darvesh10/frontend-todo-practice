

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth(); // Context se user aur logout function nikalein
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Context wala logout function call karein
    // Yeh function humein login page par redirect kar dega
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#eee', color: 'black'}}>
      <div>
        <Link to="/">TodoApp</Link>
      </div>
      <div>
        {user ? (
          // Agar user logged in hai toh yeh dikhao
          <>
            <span style={{ marginRight: '1rem' }}>Welcome, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          // Agar user logged in nahi hai toh yeh dikhao
          <>
            <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;