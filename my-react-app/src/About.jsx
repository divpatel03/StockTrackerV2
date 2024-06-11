import React from 'react';

function About(){
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
            <div className="aboutDescription">
                <h1>StockTrack: Your Ultimate Stock Tracking Companion</h1>
                <p>Welcome to StockTrack, the premier stock tracking application designed to empower investors of all levels. 
                    Whether you're a seasoned trader or just starting, 
                    StockTrack provides the tools and insights you need to make informed investment decisions.</p>
                <h2>Key Features:</h2>
                <p>
                Key Features:
                <li>
                    Real-Time Stock Data: Stay updated with live stock prices, charts, and market trends. Our real-time data ensures you never miss a market movement.
                </li>
                <li>
                    Customizable Watchlists: Create and manage multiple watchlists to track your favorite stocks, ETFs, and indices. Personalize your watchlists with custom alerts and notifications.
                </li>
                <li>
                    In-Depth Analysis: Access comprehensive financial data, including historical performance, earnings reports, and key metrics. Utilize our advanced charting tools to analyze stock trends and patterns.
                </li>
                <li>
                    News & Insights: Stay ahead of the market with the latest news, expert analysis, and market insights. Our curated news feed ensures you are always informed about the factors impacting your investments.
                </li>
                <li>
                    Portfolio Management: Monitor your investments and track your portfolio’s performance with ease. Get detailed reports and analytics to evaluate your investment strategies.
                </li>
                <li>
                    User-Friendly Interface: Enjoy a sleek, intuitive design that makes stock tracking effortless. Our user-friendly interface ensures a seamless experience on both desktop and mobile devices.
                </li>
                <li>
                    Secure & Reliable: Your data security is our top priority. StockTrack employs advanced encryption and security measures to keep your information safe.
                </li>
                </p>
            </div>
        </div>
    );
}

export default About;