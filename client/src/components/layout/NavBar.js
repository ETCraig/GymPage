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
                <a href='#!' onClick={handleLogout}>
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
        <div className="navbar bg-primary">
            <h1>
                GymPage
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    );
}

export default NavBar;