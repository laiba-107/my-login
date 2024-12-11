import React from 'react';

function Home({ token, setCurrentPage, setToken }) {
  return (
    <div className="container mt-5">
      <h1>Welcome to the App</h1>
      {token ? (
        <>
          <p>You are logged in.</p>
          <button className="btn btn-danger" onClick={() => { setToken(''); setCurrentPage('home'); }}>
            Logout
          </button>
        </>
      ) : (
        <>
          <button className="btn btn-primary" onClick={() => setCurrentPage('register')}>
            Register
          </button>
          <button className="btn btn-secondary ml-3" onClick={() => setCurrentPage('login')}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default Home;
