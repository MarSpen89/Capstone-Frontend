import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './pages/admin';
import Home from './pages/home';
import Profile from './pages/profile';
import Login from '../components/auth/login';
import Password from '..//..//src/password';

function App() {
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status

    // Function to handle successful login
    const handleLogin = () => {
        setLoggedIn(true);
    };

    // Function to handle logout
    // eslint-disable-next-line
    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <Router>
            <Routes>
                {/* Route to Home - Only accessible when logged in */}
                <Route
                    path="/"
                    element={loggedIn ? <Home /> : <Navigate to="/auth/login" />}
                />
                {/* Route to Admin - Only accessible when logged in */}
                <Route
                    path="/admin"
                    element={loggedIn ? <Admin /> : <Navigate to="/auth/login" />}
                />
                {/* Route to Profile - Only accessible when logged in */}
                <Route
                    path="/profile"
                    element={loggedIn ? <Profile /> : <Navigate to="/auth/login" />}
                />
                {/* Route to Login */}
                <Route
                    path="/auth/login"
                    element={<Login onLogin={handleLogin} />}
                />
                {/* Route to Password */}
                <Route path="/src/password" element={<Password />} />
            </Routes>
        </Router>
    );
}

export default App;
