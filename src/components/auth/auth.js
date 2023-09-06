// auth.js

import React, { useState, useEffect, createContext, useContext } from 'react';
import { auth } from './firebase'; // Import your initialized Firebase app
import { useNavigate } from 'react-router-dom';

// Create a context to hold the user authentication state
const AuthContext = createContext();

// Custom hook to use the AuthContext
export function useAuth() {
return useContext(AuthContext);
}

// AuthProvider component to wrap the entire application and provide authentication context
export function AuthProvider({ children }) {
const [currentUser, setCurrentUser] = useState(null);
const [loading, setLoading] = useState(true);
const history = useHistory();

  // Function to sign up a new user
async function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

  // Function to log in an existing user
async function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

  // Function to log out the current user
function logout() {
    return auth.signOut();
}

  // Listen for user state changes when the component mounts
useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
    setCurrentUser(user);
    setLoading(false);
    });

    // Unsubscribe when the component unmounts
    return unsubscribe;
}, []);

  // Context value to be provided to consumers
const value = {
    currentUser,
    signup,
    login,
    logout
};

return (
    <AuthContext.Provider value={value}>
    {!loading && children}
    </AuthContext.Provider>
);
}