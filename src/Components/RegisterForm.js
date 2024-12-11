import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/register', { email, password });
      setIsAuthenticated(true);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      setErrorMessage('Failed to register, please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
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
        <button className="btn btn-primary" onClick={handleRegister}>Register</button>
        {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Register;
