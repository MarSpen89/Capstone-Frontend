import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/login.scss';
import LoginImage from '../../assets/AdobeStock_493493706_Preview.jpeg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  // Use the useNavigate hook to get the navigation function
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    setErrorText('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        'https://cyber-guardian-project-be-2cb6d708e01b.herokuapp.com/user/verify',
        {
          client: {
            email: email,
            password: password,
          },
        }
      )
      .then((response) => {
        if (response.data.status === 'created') {
          // Use the navigate function to navigate to the home page
          navigate('/dashboard');
        } else {
          setErrorText('Wrong email or password');
        }
      })
      .catch((error) => {
        setErrorText('An error occurred');
      });
  };

  return (
    <div className="login-container" style={{
        backgroundImage:`url(${LoginImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '20vh',
    }}>
      <h1>LOGIN TO ACCESS YOUR PROFILE</h1>

      <div className="error-text">{errorText}</div>

      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type='email'
          name='email'
          placeholder='Your email'
          value={email}
          onChange={handleChange}
        />

        <input
          className="input-field"
          type='password'
          name='password'
          placeholder='Your password'
          value={password}
          onChange={handleChange}
        />

        <button type='submit' className="login-button">Login</button>

        {/* Remove the incorrect code */}
        
        <button type='button' className="register-button" onClick={() => navigate('/register')}>Register</button>
      </form>
    </div>
  );
};

export default Login;

