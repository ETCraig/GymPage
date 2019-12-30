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
    UPDATE_PROFILE,
} from '../Types';

import axios from 'axios';

const ProfileState = props => {
    const initialState = {
        profile: null,
        profiles: [],
        loading: true,
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

    const updateProfile = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(formData)
        try {
            const res = await axios.post('/api/profile', formData, config);
            console.log(res);
            dispatch({
                type: UPDATE_PROFILE,
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

    const getProfiles = async () => {
        try {
            const res = await axios.get('/api/profile/community');

            dispatch({
                type: GET_PROFILES,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: err.response.msg
            });
        }
    }

    const getProfile = async profile_id => {
        try {
            const res = await axios.get(`/api/profile/user/${profile_id}`);

            dispatch({
                type: GET_PROFILE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: err.response.msg
            });
        }
    }

    const recordSession = async session => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/profile/session', session, config);

            dispatch({
                type: RECORD_SESSION,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: err.response.msg
            });
        }
    }

    const deleteProfile = async () => {
        try {
            const res = await axios.delete('/api/profile');

            dispatch({
                type: DELETE_PROFILE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: err.response.msg
            });
        }
    }

    return (
        <ProfileContext.Provider
            value={{
                profile: state.profile,
                profiles: state.profiles,
                loading: state.loading,
                error: state.error,
                getUserProfile,
                updateProfile,
                getProfile,
                getProfiles,
                recordSession,
                deleteProfile
            }}
        >
            {props.children}
        </ProfileContext.Provider>
    );
}

export default ProfileState;