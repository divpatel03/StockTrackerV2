import React, { useState } from 'react';

function App() {
    let isLoggedIn = false;
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted");
    }

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
