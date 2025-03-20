import React, { useState } from 'react';
import './Login.css';

const Login = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState('Login');

    return (
        <div className='login-page'>
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <h1 onClick={() => setShowLogin(false)}>X</h1>
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? (
                        <>
                            <input type="text" placeholder="Username" required />
                            <input type="password" placeholder="Password" required />
                        </>
                    ) : (
                        <>
                            <input type="text" placeholder="First Name" required />
                            <input type="text" placeholder="Last Name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <input type="password" placeholder="Confirm Password" required />
                        </>
                    )}
                    <button type="submit">{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                </div>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing I agree to the terms of use & privacy</p>
                </div>
                {currentState === "Login" ? (
                    <p className='account'>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p>
                ) : (
                    <p className='account'>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
                )}
            </form>
        </div>
    );
};

export default Login;
