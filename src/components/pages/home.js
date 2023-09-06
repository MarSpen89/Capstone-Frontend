// This page will render a Log in button if your not logged in, upon clicking will lead you to a login page.
// If you're logged in, it will render a Log out button with your email address.

import React from "react";
import { Link, useNavigate } from "react-router-dom";
// Removed unused import: import Login from "../../components/auth/login";
import "../styles/home.scss";



const Home = (props) => { // TODO: Describe how data is passed from one API to another
    const { loggedIn, email } = props;
    const navigate = useNavigate();
    

    const onButtonClick = () => {
        navigate('/profile') 
        console.log("Button Clicked!")
    };

    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <div>Welcome Back!</div>
            </div>
            <div>
                This is the home page.
                {loggedIn && (
                    <div>
                        <Link to="/profile">View Profile</Link>
                        <br />
                    </div>
                )}
            </div>
            <div className="buttonContainer">
                <input
                    className="inputButton"
                    type="button"
                    onClick={onButtonClick}
                    value={loggedIn ? "Log out" : "Log in"} 
                />
                {loggedIn ? <div>Your email address is {email}</div> : null}
            </div>
        </div>
    );
};

export default Home;