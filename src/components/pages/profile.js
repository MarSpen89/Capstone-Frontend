import React from "react";
import { Link } from "react-router-dom";
import "../styles/profile.scss";
import LoginImage from "../../assets/19335203_6074571.jpg";

const Profile = ({ email, displayName }) => {
    return (
        <div className="login-container" style={{
            backgroundImage:`url(${LoginImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '30vh',
        }}> 
            <h1>Profile Page</h1>
            <h2>User Profile</h2>
            <p>Email: {email}</p>
            {displayName && <p>Display Name: {displayName}</p>}
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default Profile;