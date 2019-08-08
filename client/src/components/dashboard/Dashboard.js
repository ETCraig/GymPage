import React, { Fragment, useContext, useEffect } from 'react';

import AuthContext from '../../context/auth/authContext';

import { Link } from 'react-router-dom';

const Dashboard = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            Dashboard
        </Fragment>
    );
}

export default Dashboard;