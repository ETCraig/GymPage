import React, { Fragment, useContext } from 'react';

import ProfileContext from '../../context/profile/profileContext';

const UserProfile = () => {
    const profileContext = useContext(ProfileContext);

    return (
        <div>
            User Profile
        </div>
    );
}

export default UserProfile;