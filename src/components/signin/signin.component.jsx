import React, { useState } from 'react';
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './signin.styles';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { onSignInStart } from '../../redux/auth/auth.saga';

import { connect } from 'react-redux';

const SignIn = ({ onSignInStart }) => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const { email, password } = credentials;

    const handleChange = e => {
        const { value, name } = e.target;
        setCredentials({ ...credentials, [name]: value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        onSignInStart(email, password);
    }
    
    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <ButtonsBarContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    onSignInStart: (email, password) => dispatch(onSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);