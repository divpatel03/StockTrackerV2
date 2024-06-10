import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [name, setName] = useState("");
    const dashboardNavigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if(name.length === 0) {
            alert("ERROR: Username must be 1 character or longer.");
        }

        else {
            alert("Logged In!");
            dashboardNavigate('/dashboard');
        }
    }
  
    return(
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="submit"/>
            </form>
        </div>
    );
}

export default Login;
