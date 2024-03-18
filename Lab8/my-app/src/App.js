// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/Loginpage';
import UserProfile from './components/UserProfile/UserProfile';
import ExplorePage from './components/ExplorePage';

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
        <Route path="/" element={<LoginPage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/explore" element={<ExplorePage />} /> 
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

