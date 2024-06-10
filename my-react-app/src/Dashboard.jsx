import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
    const location = useLocation();
    const { username } = location.state || {};

    const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrTime(new Date().toLocaleTimeString());
        }, 1000); // Update every second

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex-container">
            <div className = "leftSide">
            <h1>{username}</h1>
            <h3>Current Time (EST): {currTime}</h3>
        </div>
            <div className = "rightSide">
                
            </div>
        </div>
        
    );
}

export default Dashboard;
