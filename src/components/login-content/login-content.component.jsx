import React from 'react';
import { 
    LoginCard,
    LoginLogoContainer,
    LoginLogo,
    LoginCardContainer,
    LoginBtnContainer,
    LoginBtn
} from './login-content.styles';

import { Link } from 'react-router-dom';

const LoginContent = () => {
    return (
        <div className="container h-100" style={{marginTop: "150px"}}>
            <div className="d-flex justify-content-center h-100">
                <LoginCard>
                    <div className="d-flex justify-content-center">
                        <LoginLogoContainer>
                            <LoginLogo src="https://logopond.com/logos/0343ba08a5fd3ca2a92cbd23932a1b14.png" alt="Logo" />
                        </LoginLogoContainer>
                    </div>
                    <LoginCardContainer className="d-flex justify-content-center">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-append primary">
                                    <span className="input-group-text bg-primary"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="email" name="" className="form-control" value="" placeholder="email" />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text bg-primary"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="" className="form-control" value="" placeholder="password" />
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                    <label className="custom-control-label" for="customControlInline">Remember me</label>
                                </div>
                            </div>
                            <LoginBtnContainer className="d-flex justify-content-center mt-3">
                                <LoginBtn type="button" name="button" className="btn btn-primary">Login</LoginBtn>
                            </LoginBtnContainer>
                        </form>
                    </LoginCardContainer>

                    <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            Don't have an account? <a href="#" className="ml-2">Sign Up</a>
                        </div>
                        <div className="d-flex justify-content-center links">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </LoginCard>
            </div>
        </div>
    );
}

export default LoginContent;