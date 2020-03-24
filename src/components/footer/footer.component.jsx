import React from 'react';

const Footer = () => (
    <footer className="footer bg-dark mt-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                    <ul className="list-inline mb-2">
                        <li className="list-inline-item">
                            <a href="#">About</a>
                        </li>
                        <li className="list-inline-item">&sdot;</li>
                        <li className="list-inline-item">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <p className="text-muted small mb-4 mb-lg-0">&copy; GymPage 2020. All Rights Reserved.</p>
                </div>
                <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item mr-3">
                            <a href="https://www.facebook.com/ethan.craig.524" target="blank">
                                <i className="fab fa-facebook fa-2x fa-fw"></i>
                            </a>
                        </li>
                        <li className="list-inline-item mr-3">
                            <a href="https://github.com/ETCraig" target="blank">
                                <i className="fab fa-github fa-2x fa-fw"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.instagram.com/ethanthomas.craig/" target="blank">
                                <i className="fab fa-instagram fa-2x fa-fw"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;