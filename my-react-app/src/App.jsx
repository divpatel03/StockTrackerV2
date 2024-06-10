import React, { useState } from 'react';

function App() {
    const [loggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if(name.length === 0) {
            alert("ERROR: Username must be 1 character or longer.");
        }

        else {
            alert("Logged In!");
            setIsLoggedIn(true);
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

export default App;
