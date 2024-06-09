import React from 'react';
import { useState } from 'react';

function Login(props) {
    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }

    else{
        const [val, setVal] = useState("Hello There");
        const click = () => {
            alert(val)
        }
        const change = event => {
            setVal(event.target.value)
        }

        return (
        <div className = "Login">
            <h2>Login to continue</h2>
            <input onChange = {change}
            value = {val}/>

            <button onClick = {click}>Click Me</button>
        </div>
        );  
    }
}

export default Login