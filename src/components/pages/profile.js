import React from "react";
import { Link } from "react-router-dom";
import "../styles/profile.scss"; 

const Profile = ({ email }) => {
    return (
        <div className="profileContainer">
            <h2>User Profile</h2>
            <p>Email: {email}</p>
            {displayName && <p>Display  Name: {displayName}</p>}
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default Profile;