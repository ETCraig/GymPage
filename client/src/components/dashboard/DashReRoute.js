import React, { Fragment, useContext, useEffect } from 'react';

import ProfileContext from '../../context/profile/profileContext';

import { Link } from 'react-router-dom';

const DashReRoute = () => {
    const profileContext = useContext(ProfileContext);

    const { getUserProfile, profile, profiles } = profileContext;

    useEffect(() => {
        getUserProfile();
        //eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            {profile !== null ?
                <Fragment>
                    <h4>Your Profile Was Found.</h4>
                </Fragment> :
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