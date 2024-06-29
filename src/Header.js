// src/Header.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { AuthContext } from './AuthContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { isAuthenticated, login, logout } = useContext(AuthContext);

    return (
        <header style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <h1>To-Do List Activity</h1>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
            <button onClick={isAuthenticated ? logout : login}>
                {isAuthenticated ? 'Logout' : 'Login'}
            </button>
        </header>
    );
};

export default Header;
