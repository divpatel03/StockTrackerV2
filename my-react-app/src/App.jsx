import React, { useState } from 'react';

function App() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    let isLoggedIn = false;

    
    return(
        <div className="Login">
            <h1>Login</h1>
            <form>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="submit"/>
            </form>
        </div>
    );
}

export default App;
