import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (username) => {
    if (username.trim() === '') {
      setError('Username cannot be empty');
    } else {
      setUsername(username);
      setIsLoggedIn(true);
      setError(''); // Clear the error if login is successful
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard username={username} />
      ) : (
        <Login onLogin={handleLogin} error={error} />
      )}
    </div>
  );
}

export default App;
