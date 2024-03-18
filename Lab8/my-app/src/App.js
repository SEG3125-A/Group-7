import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/Loginpage';
import UserProfile from './components/UserProfile/UserProfile';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user-profile" element={<UserProfile 
          name="Edward He" 
          age={30} 
          job="Software Developer" 
          company="Tech Innovations" 
          image="/john.jpg" />} 
        />
        <Route path="sign-up" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;

