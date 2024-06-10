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
            dashboardNavigate('/dashboard', { state: { username: name } });
        }
    }
  
    return(
        <div className="Login">
            <div className="LoginText">
                <h2>Login</h2>
            </div>
            <div className="Username">
                <h4>Username</h4>
                <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="submit"/>
                </form>
            </div>
        </div>
    );
}

export default Login;
