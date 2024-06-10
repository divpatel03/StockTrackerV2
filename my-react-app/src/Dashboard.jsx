import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css'; // Ensure this path is correct

function Dashboard() {
    const location = useLocation();
    const { username } = location.state || {};
    const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());
    const [marketMessage, setMarketMessage] = useState("");
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [stocks, setStocks] = useState([]);
    const [inputValue, setInputValue] = useState('');

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

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddStock = () => {
        if (inputValue !== '') {
            setStocks([...stocks, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteStock = (index) => {
        const newStocks = stocks.filter((_, i) => i !== index);
        setStocks(newStocks);
    };

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
                    <div className="input-container">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Enter a stock name"
                        />
                        <button onClick={handleAddStock}>Add Stock</button>
                    </div>
                    <div className="stock-list">
                        {stocks.map((stock, index) => (
                            <div key={index} className="stock-row">
                                <span>{stock}</span>
                                <button onClick={() => handleDeleteStock(index)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rightSide">
                    <h2><p>{marketMessage}</p></h2>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
