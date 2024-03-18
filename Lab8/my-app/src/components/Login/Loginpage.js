import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import './Loginpage.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = credentials;
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    navigate("/user-profile");
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
        <br/>
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
        <br/>
        {error && <p className="error">{error}</p>}
        <button type="submit">LOGIN</button>
      </form>
      <p>Don't have a account yet?<Link to="sign-up">Sign Up!</Link></p>
    </div>
  );
}

export default LoginPage;
