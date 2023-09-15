import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/home.scss'; // Import your CSS file

function Home() {
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status

    // Function to handle successful login
    // const handleLogin = () => {
    //     setLoggedIn(true);
    // };

    // Function to handle logout
    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to Cyber Guardian</h1>
            </header>
            <div className="content">
                <p className="intro-text">
                    The Cyber Guardian Project is a web application designed with the primary objective of empowering web developers with the latest and most effective security practices. In today's digital landscape, where online threats and vulnerabilities continue to evolve, safeguarding web applications and user data is of paramount importance. This application serves as a trusted and up-to-date resource, enabling developers to fortify their creations against cyber threats and ensure the safety and integrity of their users' information.
                </p>
                <p className="intro-text">
                    In an era where cyber threats are constantly evolving, the Cyber Guardian Project stands as a guardian of web development, providing developers with the knowledge and tools they need to protect their projects and, ultimately, the digital world. Whether you're a seasoned developer looking to stay updated or a newcomer eager to learn, this application is your go-to destination for building a safer online environment. Join us in the pursuit of a more secure web today!
                </p>
            </div>
            <div className="buttons">
                {loggedIn ? (
                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <Link to="/login" className="portal-login-button">
                        Portal Login
                    </Link>
                )}
                <Link to="/register" className="register-portal-button">
                    Register portal
                </Link>
                
                {/* Buttons for navigating to admin and profile pages */}
                <Link to="/admin" className="admin-button">
                    Admin
                </Link>
                <Link to="/profile" className="profile-button">
                    Profile
                </Link>
            </div>
        </div>
    );
}

export default Home;
