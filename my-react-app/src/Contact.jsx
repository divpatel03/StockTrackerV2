import React from 'react';

function Contact(){
    return (
        <div className="flex-container">
            <nav className="nav">
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
        </div>
    );
}

export default Contact;