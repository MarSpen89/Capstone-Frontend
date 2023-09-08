import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './pages/admin';
import Home from './pages/home';
import Profile from './pages/profile';
import Login from '../components/auth/login';
import Password from '..//..//src/password';
import Register from './auth/register';

function App() {
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status

    // Function to handle successful login
    const handleLogin = () => {
        setLoggedIn(true);
    };

    // Function to handle logout
    const handleLogout = () => {
        setLoggedIn(false);
    };

    // Function to handle successful registration
    const handleRegister = () => {
        setLoggedIn(true);
    };

    return (
        <Router>
            <Routes>
                <Route path="/src/components/pages/home.js" element={<Home loggedIn={loggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />} />
                <Route path="/admin" element={<Admin loggedIn={loggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />} />
                <Route path="/profile" element={<Profile loggedIn={loggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />} />
                <Route path="/login" element={<Login loggedIn={loggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />} />
                <Route path="/register" element={<Register loggedIn={loggedIn} handleRegister={handleRegister} handleLogout={handleLogout} />} />
                <Route path="/password" element={<Password loggedIn={loggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
