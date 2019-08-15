import React, { Fragment, useContext } from 'react';

import AuthContext from '../../context/auth/authContext';

import { Link } from 'react-router-dom';

const NavBar = () => {
    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout, user } = authContext;

    const handleLogout = () => {
        logout();
    }

    const authLinks = (
        <Fragment>
            <li>
                <Link to='/'>Dashboard</Link>
            </li>
            <li>
                <Link to=''><i className="fas fa-shopping-cart"></i> Store</Link>
            </li>
            <li>
                <Link to='/routines'><i className="fas fa-th-list"></i> Routine</Link>
            </li>
            <li>
                <Link to='/articles'><i className="fas fa-newspaper"></i> Article</Link>
            </li>
            <li>
                <Link to='/profile'><i className="fas fa-user"></i> Profile</Link>
            </li>
            <li>
                <a href='#!' onClick={handleLogout} style={{color: "#333333"}}>
                    <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    );
    return (
        <div className="navbar" style={{ background: "#da7618" }}>
            <h1>
                <i className="fas fa-dumbbell"></i> GymPage
            </h1>
            
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    );
}

export default NavBar;