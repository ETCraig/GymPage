import React from 'react';
import '../styles/Landing.css';

const Footer = () => {
    return (
        <footer className="py-5 page-footer">
            <div className="container-fluid container-fluid-max">
                <div className="row">
                    <div className="col-12 col-md-6 footer-child copyright">
                        GymPage © 2019 All Rights Reserved
                            </div>
                    <div className="col-12 col-md-6 footer-child footer-links">
                        <p className="mr-3">Privacy Policy</p>
                        <p>FAQ</p>
                        <div>
                            <small>Made by <a href="https://github.com/ETCraig" target="_blank" rel="noopener noreferrer"><i className="fas fa-code"></i> ETCraig</a>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;