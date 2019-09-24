import React, { useReducer } from 'react';

import UserContext from './userContext';
import UserReducer from './userReducer';
import {
    UPDATE_AVATAR,
    UPDATE_EMAIL,
    UPDATE_PASSWORD
} from '../Types';

import axios from 'axios';

const UserState = props => {
    const initialState = {}

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const updateUserAvatar = () => {
        try {

        } catch (error) {

        }
    }

    const updateUserEmail = () => {
        try {

        } catch (error) {

        }
    }

    const updateUserPassword = () => {
        try {

        } catch (error) {

        }
    }

    <UserContext.Provider
        value={{}}
    >
        {props.children}
    </UserContext.Provider>
}

export default UserState;