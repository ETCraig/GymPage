import React, { useEffect } from 'react';

import RegisterContent from '../../components/register-content/register-content.component';

import { connect } from 'react-redux';

const Register = ({ isAuthenticated, history }) => {

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/home');
        }
    }, [isAuthenticated, history]);

    return (
        <div>
            <RegisterContent />
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Register);