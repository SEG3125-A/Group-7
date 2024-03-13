import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const welcometitle = "Welcome back to Roast Resume!";
    let navigate = useNavigate();

    const handleClickLogin = (e) => {
        e.preventDefault();
        // Perform login logic here, such as authentication
        
        // Navigate to the homepage
        navigate("/homepage");
    }

    return (
        <div>
            <h1>{welcometitle}</h1>
            <form onSubmit={handleClickLogin}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='your email' 
                    required 
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder='your password' 
                    required 
                />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
}

export default LoginPage;
