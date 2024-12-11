import React, { useState } from 'react';
import LoginForm from './Components/LoginForm'; // Import LoginForm
import RegisterForm from './Components/RegisterForm'; // Import RegisterForm
import './App.css'; // Import styling

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [showRegister, setShowRegister] = useState(false); // State to show/hide register form

  // Toggle between Login and Register form
  const handleShowRegister = () => setShowRegister((prev) => !prev);

  return (
    <div className="App">
      <header>
        <h1>Welcome to My App</h1>
      </header>

      {/* Conditionally render LoginForm, RegisterForm, or UserDashboard */}
      {isLoggedIn ? (
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          {showRegister ? (
            <RegisterForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}

          <button onClick={handleShowRegister}>
            {showRegister ? 'Go to Login' : 'Go to Register'}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
