import React, { useState } from 'react';
import { SignUpContainer, SignUpTitle } from './signup.styles';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { signUpStart } from '../../redux/auth/auth.actions';

import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {
    const [credentials, setCredentials] = useState({
        name: 'Name',
        email: 'email2@gmail.com',
        password: 'password13',
        confirmPassword: 'password13'
    });

    const { name, email, password, confirmPassword } = credentials;

    const handleChange = e => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    }

    const handleSubmit = async e => {
        console.log('Hit Submit', credentials);
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords Do Not Match.");
            return;
        }

        signUpStart({ name, email, password });
    }

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    label="Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </SignUpContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: credentials => dispatch(signUpStart(credentials))
});

export default connect(null, mapDispatchToProps)(SignUp);