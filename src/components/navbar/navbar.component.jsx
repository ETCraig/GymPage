import React from 'react';

import { logoutStart } from '../../redux/user/user.actions';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, logoutStart }) => {

    const authLinks = (
        <>
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link">Exercises</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link">Routines</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link">Profile</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link" onClick={logoutStart}>Logout</Link>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
            </li>
        </>
    );

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark static-top">
            <div className="container">
                <Link to="/" className="navbar-brand">GymPage</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbar-nav" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        {isAuthenticated ? authLinks : guestLinks}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    logoutStart: () => dispatch(logoutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);