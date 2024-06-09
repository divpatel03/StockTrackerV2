import React, { useState } from 'react';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Login isLoggedIn={isLoggedIn} username={username} onLogin={handleLogin} />
    </div>
  );
}

export default App;
