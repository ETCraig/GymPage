import React, { useReducer } from 'react';

import UserContext from './userContext';
import UserReducer from './userReducer';
import {
    UPDATE_AVATAR,
    UPDATE_EMAIL,
    UPDATE_PASSWORD,
    USER_ERROR
} from '../Types';

import axios from 'axios';

const UserState = props => {
    const initialState = {}

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const updateUserAvatar = avatar => {
        try {
            const res = await axios.patch('/api/user/avatar', avatar);

            dispatch({
                type: UPDATE_AVATAR,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: USER_ERROR,
                payload: err.response.msg
            });
        }
    }

    const updateUserEmail = email => {
        try {
            const res = await axios.patch('/api/user/password', email);

            dispatch({
                type: UPDATE_EMAIL,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: USER_ERROR,
                payload: err.response.msg
            });
        }
    }

    const updateUserPassword = password => {
        try {
            const res = await axios.patch('/api/user/password', password);

            dispatch({
                type: UPDATE_PASSWORD,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: USER_ERROR,
                payload: err.response.msg
            });
        }
    }

    <UserContext.Provider
        value={{
            updateUserAvatar,
            updateUserEmail,
            updateUserPassword
        }}
    >
        {props.children}
    </UserContext.Provider>
}

export default UserState;