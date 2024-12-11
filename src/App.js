import React, { useState } from 'react';
import Login from './Components/LoginForm';
import Register from './Components/RegisterForm';
import Logout from './Components/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [showLogin, setShowLogin] = useState(true); // To toggle between login and register

  return (
    <div className="container">
      {isAuthenticated ? (
        <div>
          <h1>Welcome to the App</h1>
          <Logout setIsAuthenticated={setIsAuthenticated} />
        </div>
      ) : (
        <div>
          <h1>{showLogin ? 'Login' : 'Register'} Required</h1>
          {showLogin ? (
            <Login setIsAuthenticated={setIsAuthenticated} />
          ) : (
            <Register setIsAuthenticated={setIsAuthenticated} />
          )}
          <div className="mt-3">
            <button
              className="btn btn-link"
              onClick={() => setShowLogin(!showLogin)}>
              {showLogin ? 'No account? Register here' : 'Already have an account? Login here'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
