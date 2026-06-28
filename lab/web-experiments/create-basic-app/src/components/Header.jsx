import React, {Component} from 'react';

function Header() {
    return (
        <header className="bg-dark text-white py-3 shadow">
            <div className="container">

                <h2 className="mb-3">
                    ROS2 Web Based Navigation 
                </h2>

                <nav className="nav">

                    <a href="#" className="nav-link text-white">
                        Home
                    </a>

                    <a href="#" className="nav-link text-white">
                        Map
                    </a>

                    <a href="#" className="nav-link text-white">
                        Navigation
                    </a>

                    <a href="#" className="nav-link text-white">
                        Telemetry
                    </a>

                    <a href="#" className="nav-link text-white">
                        Settings
                    </a>

                </nav>

            </div>
        </header>
    );
}

export default Header;