import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
    const loginNavigation = useNavigate();
    useEffect(() => {
        loginNavigation('/login');
    }, [loginNavigation]);
}

export default App;
