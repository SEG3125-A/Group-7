// LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = credentials;
    const navigate = useNavigate();

    // Consolidated handler for both email and password for a cleaner approach
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simulating an authentication process
        try {
            // Replace the below with your actual authentication logic
            if (email === 'user@example.com' && password === 'password123') {
                console.log("Authentication successful");
                // Navigate to the user profile page
                navigate("/user-profile", { replace: true });
            } else {
                alert("Authentication failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            // Ideally, set an error state here and show it to the user
        }
    };

    return (
        <div>
            <h1>Welcome back to Roast Resume!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={email} 
                    onChange={handleChange} 
                    placeholder='Enter your email' 
                    required 
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                    value={password} 
                    onChange={handleChange} 
                    placeholder='Enter your password' 
                    required 
                />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
}

export default LoginPage;
