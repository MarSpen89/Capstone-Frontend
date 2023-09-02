// Admin.js
import React from "react";
import { Link } from "react-router-dom";
// import styles admin once you create admin stules

const Admin = () => {
    //Idea of amin-specific data
    const adminData = {
        totalUsers: 20,
        newRequests: 5
    };

return (
    <div className="adminContainer">
        <h2>Admin Dashboard</h2>
        <div className="adminContent">
            <h3>Statistics</h3>
            <p>Tota lUsers: {adminData.totalUsers}</p>
            <p>New Requests: {adminData.newRequests}</p>
        </div>
        <div className="adminAction">
        <h3>adminAction</h3>
        <button>Delete User</button>
        <button>Approve Request</button>
        </div>
    </div>
);
};

expport default Admin;