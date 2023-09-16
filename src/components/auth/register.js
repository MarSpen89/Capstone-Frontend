import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';
import '../styles/register.scss';
import LoginImage from '../../assets/5913861_3079485.jpg';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://cyber-guardian-project-be-2cb6d708e01b.herokuapp.com/user', {
                username,
                email,
                password,
            });
            console.log('Registration successful:', response.data);
            // Redirect or show a success message here
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle registration error, e.g., display an error message
        }
    };

    return (
        <div className="login-container" style={{
            backgroundImage: `url(${LoginImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '45vh',
        }}>

            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                {/* Add a Link to navigate back to the home page */}
                <Link to="/home" className="home-link">Home</Link>
                <div className="form-group">
                    <label htmlFor="username">username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
