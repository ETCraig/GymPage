import React, { Fragment, useContext, useEffect } from 'react';

import Loading from '../layout/Loading';
import ProfileContext from '../../context/profile/profileContext';

import { Link, Redirect } from 'react-router-dom';

const DashReRoute = () => {
    const profileContext = useContext(ProfileContext);

    const { getUserProfile, profile, loading } = profileContext;

    useEffect(() => {
        getUserProfile();
        //eslint-disable-next-line
    }, []);

    const renderRedirect = () => {
        return <Redirect to='/feed' />
    }

    return (
        <Fragment>
            {loading ? 
                <Loading /> :
            profile !== null && !loading ?
                renderRedirect() :
                <Fragment>
                    <p>You have not yet set up a profile, please add some info.</p>
                    <Link to="/create-profile" className="btn btn-primary my-1">
                        Create Profile
                    </Link>
                </Fragment>
            }
        </Fragment>
    );
}

export default DashReRoute;