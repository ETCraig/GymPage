import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark static-top">
            <div className="container">
                <Link to="/" className="navbar-brand">GymPage</Link>
                <button className="navbar-toggler" dtat-toggle="collapse" data-target="navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbar-nav" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;