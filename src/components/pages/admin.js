import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/admin.css';
import LoginImage from '../../assets/5935925_3092746.jpg';  

const Admin = () => {
    const [adminData, setAdminData] = useState({
        totalUsers: 20,
        newRequests: 5
    });

    const [users, setUsers] = useState([]); // State for storing user data

    // Use the useNavigate hook to get the navigation function
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch admin data from your API endpoint
        axios.get("http://localhost:5000/admin")
            .then((response) => {
                setAdminData({
                    totalUsers: response.data.totalUsers,
                    newRequests: response.data.newRequests,
                });
            })
            .catch((error) => {
                console.error("Error fetching admin data:", error);
            });

        // Fetch the list of users from your API endpoint
        axios.get("http://localhost:5000/users")
            .then((response) => {
                setUsers(response.data); // Assuming the response is an array of user objects
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, []);

    const deleteUser = (userId) => {
        axios.delete(`http://localhost:5000/users/${userId}`)
            .then((response) => {
                // Update the user list after successful deletion
                setUsers(users.filter(user => user.id !== userId));
            })
            .catch((error) => {
                console.error("Error deleting user:", error);
            });
    };

    return (
        <div className="login-container" style={{
            backgroundImage:`url(${LoginImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '20vh',
        }}>
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
            <div className="userList">
                <h3>User List</h3>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.username} -{" "}
                            <button onClick={() => deleteUser(user.id)}>
                                Delete
                            </button>
                            <button>Edit</button>
                        </li>
                    ))}
                </ul>
            </div>
            <Link to="/">Back to Home</Link>
            
            {/* Add a button to navigate to the login page */}
            <button onClick={() => navigate("/login")}>Login Page</button>
        </div>
    );
};

export default Admin;
