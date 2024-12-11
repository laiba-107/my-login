import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/login', { email, password });
      setIsAuthenticated(true);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      setErrorMessage('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Login;
