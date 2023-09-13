import React, { useState } from 'react';
import axios from 'axios';
import '../styles/register.scss';
import LoginImage from '../../assets/18929952_rm373batch3-socialmediapost-04.jpg'

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register', {
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
            backgroundImage:`url(${LoginImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '50vh',
            width: '55vh'
        }}>
        
        className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
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