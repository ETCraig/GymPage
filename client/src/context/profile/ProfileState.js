import { useReducer } from 'react';

import ProfileContext from './profileContext';
import ProfileReducer from './profileReducer';

import {
    DELETE_PROFILE,
    GET_PROFILE,
    GET_PROFILES,
    GET_USER_PROFILE,
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

        } catch (err) {

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
        <AuthContext.Provider
            value={{

            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default ProfileState;