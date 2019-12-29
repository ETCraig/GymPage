import React from 'react';
import { AuthContainerWrapper } from './auth-container.styles';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

const AuthContainer = () => (
    <AuthContainerWrapper>
        <SignIn />
        <SignUp />
    </AuthContainerWrapper>
);

export default AuthContainer;