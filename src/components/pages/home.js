// This page will render a Log in button if your not logged in, upon clicking will lead you to a login page.
// If you're logged in, it will render a Log out button with your email address.

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Removed unused import: import Login from "../../components/auth/login";
import "../styles/home.scss";

const Home = (props) => { // TODO: Describe how data is passed from one API to another
    const { loggedIn, email } = props;
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onButtonClick = () => {
        if (loggedIn) {
            // Handle logout logic here (e.g, call API to log the user out)
            console.log("Log out clicked");
        } else {
            // Handle login logic here (e.g., navigate to login page)
            navigate('/login');
        }
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
                {!loggedIn ? (
                    <div>
                        {/* Username Input box */}
                        <input
                            className="inputButton"
                            type="button"
                            onClick={onButtonClick}
                            value={loggedIn ? "Log out" : "Log in"}
                        />
                    </div>
                ) : (
                    <div>Your email address is {email}</div>
                )}
            </div>
        </div>
    );
};


export default Home;