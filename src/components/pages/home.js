import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Admin from './admin'; // Import the Admin component
//import Home from '../pages/home.js';
import Profile from './profile';
// eslint-disable-next-line
import Login from '../auth/login';

function Home() {
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status

    // Function to handle successful login
    const Home = () => {
        setLoggedIn(true);
    };

    // Function to handle logout
    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <div>
            <h1>Welcome to Cyber Guardian</h1>
                <p>The Cyber Guardian Project is a web application designed with the primary objective of empowering web developers with the latest and most effective security practices. In today's digital landscape, where online threats and vulnerabilities continue to evolve, safeguarding web applications and user data is of paramount importance. This application serves as a trusted and up-to-date resource, enabling developers to fortify their creations against cyber threats and ensure the safety and integrity of their users' information.</p>
                <p>In an era where cyber threats are constantly evolving, the Cyber Guardian Project stands as a guardian of web development, providing developers with the knowledge and tools they need to protect their projects and, ultimately, the digital world. Whether you're a seasoned developer looking to stay updated or a newcomer eager to learn, this application is your go-to destination for building a safer online environment. Join us in the pursuit of a more secure web today!</p>
        </div>

        
        
        
        // <Router>
        //     <Routes>
        //         {/* Route to Home - Only accessible when logged in */}
        //         <Route
        //             path="/"
        //             element={
        //                 loggedIn ? (
        //                     <div>
        //                         <Home />
        //                         <Link to="/profile">View Profile</Link>
        //                         <Link to="/admin">Admin</Link>
        //                         <button onClick={handleLogout}>Logout</button>
        //                     </div>
        //                 ) : (
        //                     <Navigate to="/auth/login" />
        //                 )
        //             }
        //         />
        //         {/* Route to Profile - Only accessible when logged in */}
        //         <Route
        //             path="/profile"
        //             element={
        //                 loggedIn ? (
        //                     <div>
        //                         <Profile />
        //                         <Link to="/">Back to Home</Link>
        //                     </div>
        //                 ) : (
        //                     <Navigate to="/auth/login" />
        //                 )
        //             }
        //         />
        //         {/* Route to Admin - Only accessible when logged in */}
        //         <Route
        //             path="/admin"
        //             element={
        //                 loggedIn ? (
        //                     <div>
        //                         <Admin />
        //                         <Link to="/">Back to Home</Link>
        //                     </div>
        //                 ) : (
        //                     <Navigate to="/auth/login" />
        //                 )
        //             }
        //         />
        //         {/* ... Other routes ... */}
        //     </Routes>
        // </Router>
    );
}

export default Home; // Export the App component