// src/pages/HomePage.jsx

import React from 'react';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1>My Todos</h1>
            <p>Welcome to your personal todo list, {user.name}!</p>
            
        </div>
    );
};

export default HomePage;