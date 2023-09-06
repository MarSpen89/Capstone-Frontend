// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './auth'; // Import the AuthProvider if you're using authentication
import Admin from "./pages/admin";
import Home from "./pages/home";
import Profile from "./pages/profile";
// import Auth from "../components/auth/auth";
import Login from "../components/auth/login"; 
// import Index from "../index";
import Password from "..//..//src/password";

const API_KEY = 'fym-yagmm';

function App() {
    return (
        <Router>
        {/* <AuthProvider> Wrap your entire app with the AuthProvider if you're using authentication */}
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/admin" element={<Admin/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/auth/login" element={<Login/>} />
                {/* <Route path="/src/index" component={Index} /> */}
                <Route path="/src/password" element={<Password/>} /> 
            </Routes>
        {/* </AuthProvider> */}
    </Router>
    );
}

export default App;

// coment out api key, test connections