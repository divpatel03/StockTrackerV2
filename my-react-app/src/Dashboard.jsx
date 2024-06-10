import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css'; // Adjust the path as needed

function Dashboard() {
    const location = useLocation();
    const { username } = location.state || {};
    const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());
    const [marketMessage, setMarketMessage] = useState("");
    const [sidebarVisible, setSidebarVisible] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrTime(new Date().toLocaleTimeString());
        }, 1000); // Update every second

        function setMarketMessageBasedOnTime() {
            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();

            if ((hour > 9 || (hour === 9 && minute >= 30)) && (hour < 16 || (hour === 16 && minute === 0))) {
                setMarketMessage("Market: Open");
            } else {
                setMarketMessage("Market: Closed");
            }
        }

        setMarketMessageBasedOnTime();

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="dashboard-container">
            <nav className={`nav ${sidebarVisible ? 'visible' : 'hidden'}`}>
                <a href="/Dashboard" className="nav-title">StockTracker</a>
                <ul>
                    <li>
                        <a href="/About">About Us</a>
                    </li>
                    <li>
                        <a href="/Contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className={`main-content ${sidebarVisible ? 'with-sidebar' : 'without-sidebar'}`}>
                <div className="leftSide">
                    <h1>{username}</h1>
                    <h3>Current Time (EST): {currTime}</h3>
                </div>
                <div className="rightSide">
                    <h2><p>{marketMessage}</p></h2>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
