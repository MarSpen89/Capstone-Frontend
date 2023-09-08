import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Admin from './admin'; // Import the Admin component
import Home from './home';
import Profile from './profile';
// eslint-disable-next-line
import Login from '../auth/login';

function App() {
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status

    // Function to handle successful login
    // eslint-disable-next-line
    const handleLogin = () => {
        setLoggedIn(true);
    };

    // Function to handle logout
    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <Router>
            <Routes>
                {/* Route to Home - Only accessible when logged in */}
                <Route
                    path="/"
                    element={
                        loggedIn ? (
                            <div>
                                <Home />
                                <Link to="/profile">View Profile</Link>
                                <Link to="/admin">Admin</Link>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        ) : (
                            <Navigate to="/auth/login" />
                        )
                    }
                />
                {/* Route to Profile - Only accessible when logged in */}
                <Route
                    path="/profile"
                    element={
                        loggedIn ? (
                            <div>
                                <Profile />
                                <Link to="/">Back to Home</Link>
                            </div>
                        ) : (
                            <Navigate to="/auth/login" />
                        )
                    }
                />
                {/* Route to Admin - Only accessible when logged in */}
                <Route
                    path="/admin"
                    element={
                        loggedIn ? (
                            <div>
                                <Admin />
                                <Link to="/">Back to Home</Link>
                            </div>
                        ) : (
                            <Navigate to="/auth/login" />
                        )
                    }
                />
                {/* ... Other routes ... */}
            </Routes>
        </Router>
    )