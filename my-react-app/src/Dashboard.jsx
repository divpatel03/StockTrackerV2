import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
    const location = useLocation();
    const { username } = location.state || {};

    const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());
    const [marketMessage, setMarketMessage] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrTime(new Date().toLocaleTimeString());
        }, 1000); // Update every second

        const now = new Date();
        const hour = now.getHours();
        if(hour <= 16 && hour >= 9.5) {
            setMarketMessage("Market: Open");
        }
        else {
            setMarketMessage("Market Closed");
        }

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
                <h2><p>{marketMessage}</p></h2>
            </div>
        </div>
        
    );
}

export default Dashboard;
