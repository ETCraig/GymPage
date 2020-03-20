import React, { useEffect } from 'react';

import LoginContent from '../../components/login-content/login-content.component';

import { connect } from 'react-redux';

const Login = ({ isAuthenticated, history }) => {

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/home');
        }
    }, [isAuthenticated, history]);

    return (
        <div>
            <LoginContent />
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Login);