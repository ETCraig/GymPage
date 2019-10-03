import React, { Fragment, useContext, useEffect } from 'react';

import AuthContext from '../../context/auth/authContext';
import DashReRoute from './DashReRoute';

const Dashboard = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            Dashboard
            <DashReRoute />
        </Fragment>
    );
}

export default Dashboard;