import './App.css';
import UserProfile from './components/UserProfile/UserProfile.js';

function App() {
  return (
    <div className="App">

      <UserProfile name="John Wick" age="36" job="gunman" company="continental" image="/john.jpg"/>
    </div>
  );
}

export default App;
