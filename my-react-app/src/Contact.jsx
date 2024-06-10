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
                    <div className="logoutButton">
                        <li>
                            <a href="/Login">Logout</a>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Contact;