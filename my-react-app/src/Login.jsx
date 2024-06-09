import React, { useState } from 'react';

function Login({ onLogin, error }) {
  const [val, setVal] = useState("");

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const handleClick = () => {
    onLogin(val);
  };

  return (
    <div className="Login">
      <h2>Login to continue</h2>
      <input 
        type="text" 
        onChange={handleChange} 
        value={val} 
        placeholder="Enter username" 
      />
      <button onClick={handleClick}>Click Me</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;
