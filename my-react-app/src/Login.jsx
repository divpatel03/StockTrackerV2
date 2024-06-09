import React, { useState } from 'react';

function Login({ isLoggedIn, username, onLogin }) {
  const [val, setVal] = useState("");

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const handleClick = () => {
    onLogin(val);
  };

  if (isLoggedIn) {
    return <h2>Welcome {username}</h2>;
  }

  return (
    <div className="Login">
      <h2>Login to continue</h2>
      <input type="text" onChange={handleChange} value={val} placeholder="Enter username" />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Login;
