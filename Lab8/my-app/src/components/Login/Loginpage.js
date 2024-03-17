import React, { useState } from 'react';
import axios from 'axios';
import './Loginpage.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = credentials;
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', credentials);
      console.log(response.data); // Handle success (e.g., redirect to user profile page)
    } catch (error) {
      console.error(error);
      setError('Invalid email or password');
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
    </div>
  );
}

export default LoginPage;
