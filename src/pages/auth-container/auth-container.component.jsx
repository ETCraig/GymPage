import React from 'react';
import { AuthContainerWrapper } from './auth-container.styles';

import SignIn from '../../components/signin/signin.component';

const AuthContainer = () => (
    <AuthContainerWrapper>
        <SignIn />
    </AuthContainerWrapper>
);

export default AuthContainer;