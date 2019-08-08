import React, { useReducer } from 'react';

import ProfileContext from './profileContext';
import ProfileReducer from './profileReducer';

import {
    DELETE_PROFILE,
    GET_PROFILE,
    GET_PROFILES,
    GET_USER_PROFILE,
    PROFILE_ERROR,
    RECORD_SESSION,
    UPDATE_PROFILE
} from '../Types';

import axios from 'axios';

const ProfileState = props => {
    const initialState = {
        profile: null,
        profiles: [],
        error: null
    }

    const [state, dispatch] = useReducer(ProfileReducer, initialState);

    const getUserProfile = async () => {
        try {
            const res = await axios.get('/api/profile');
            console.log(res);
            dispatch({
                type: GET_USER_PROFILE,
                payload: res.data
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: PROFILE_ERROR,
                payload: err.response.msg
            });
        }
    }

    const updateProfile = async () => {
        try {

        } catch (err) {

        }
    }

    const getProfiles = async () => {
        try {

        } catch (err) {

        }
    }

    const getProfile = async () => {
        try {

        } catch (err) {

        }
    }

    const recordSession = async () => {
        try {

        } catch (err) {

        }
    }

    const deleteProfile = async () => {
        try {

        } catch (err) {

        }
    }

    return (
        <ProfileContext.Provider
            value={{
                profile: state.profile,
                profiles: state.profiles,
                error: state.error,
                getUserProfile
            }}
        >
            {props.children}
        </ProfileContext.Provider>
    );
}

export default ProfileState;