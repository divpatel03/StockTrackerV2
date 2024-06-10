import React from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
    const location = useLocation();
    const { username } = location.state || {};

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome {username}!</p>
        </div>
    );
}

export default Dashboard;
