import React, { useState } from 'react';
import {
    RegisterBtn,
    RegisterBtnContainer,
    RegisterCard,
    RegisterCardContainer,
    RegisterLogo,
    RegisterLogoContainer
} from './register-content.styles';

import { Link } from 'react-router-dom';

const RegisterContent = () => {

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = e => setCredentials({ ...credentials, [e.target.name]: e.target.value });

    const {
        username,
        email,
        password,
        confirmPassword
    } = credentials;

    return (
        <div className="container h-100" style={{ marginTop: "150px" }}>
            <div className="d-flex justify-content-center h-100">
                <RegisterCard>
                    <div className="d-flex justify-content-center">
                        <RegisterLogoContainer>
                            <RegisterLogo src="https://logopond.com/logos/0343ba08a5fd3ca2a92cbd23932a1b14.png" alt="Logo" />
                        </RegisterLogoContainer>
                    </div>
                    <RegisterCardContainer className="d-flex justify-content-center">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-append primary">
                                    <span className="input-group-text bg-primary"><i className="fas fa-user"></i></span>
                                </div>
                                <input 
                                    type="text" 
                                    name="username" 
                                    value={username}
                                    className="form-control" 
                                    placeholder="username" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-append primary">
                                    <span className="input-group-text bg-primary"><i className="fas fa-at"></i></span>
                                </div>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={email}
                                    className="form-control" 
                                    placeholder="email" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-append primary">
                                    <span className="input-group-text bg-primary"><i className="fas fa-key"></i></span>
                                </div>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={password}
                                    className="form-control" 
                                    placeholder="password" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text bg-primary"><i className="fas fa-key"></i></span>
                                </div>
                                <input 
                                    type="password" 
                                    name="confirmPassword" 
                                    value={confirmPassword}
                                    className="form-control" 
                                    placeholder="confirm password" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                    <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                </div>
                            </div>
                            <RegisterBtnContainer className="d-flex justify-content-center mt-3">
                                <RegisterBtn type="button" name="button" className="btn btn-primary">Register</RegisterBtn>
                            </RegisterBtnContainer>
                        </form>
                    </RegisterCardContainer>

                    <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            Already have an account? <Link to="/login" className="ml-2">Login</Link>
                        </div>
                    </div>
                </RegisterCard>
            </div>
        </div>
    );
}

export default RegisterContent;