import React from "react";
import { Link } from "react-router-dom";
import '../styles/admin.css'; // Import your CSS file for styling once you create it

const Admin = () => {
    // Idea of admin-specific data
    const adminData = {
        totalUsers: 20,
        newRequests: 5
    };

    return (
        <div className="adminContainer">
            <h2>Admin Dashboard</h2>
            <div className="adminContent">
                <h3>Statistics</h3>
                <p>Total Users: {adminData.totalUsers}</p>
                <p>New Requests: {adminData.newRequests}</p>
            </div>
            <div className="adminAction">
                <h3>Admin Actions</h3>
                <button>Delete User</button>
                <button>Approve Request</button>
            </div>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default Admin;
