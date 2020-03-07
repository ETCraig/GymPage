import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light static-top">
            <div className="container">
                <a href="#" className="navbar-brand">GymPage</a>
                <button className="navbar-toggler" dtat-toggle="collapse" data-target="navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbar-nav" class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link to="/login" class="nav-link">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/register" class="nav-link">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;