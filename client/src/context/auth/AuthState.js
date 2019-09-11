import React, { useReducer } from 'react';

import AuthContext from './authContext';
import AuthReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';

import axios from 'axios';

import {
    CLEAR_ERRORS,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
} from '../Types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //LOAD USER
    const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        try {
            const res = await axios.get('/api/auth');
            console.log(res)
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        } catch (err) {
            console.log(err)
            dispatch({ type: AUTH_ERROR });
        }
    }

    //REGISTER USER
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/auth/register', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            loadUser();
        } catch (err) {
            console.log(err.response.msg);
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            });
        }
    }

    //LOGIN USER
    const login = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log('IN', formData)
        try {
            const res = await axios.post('/api/auth/login', formData, config);
            console.log('RES', res);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            loadUser();
        } catch (err) {
            console.log(err);
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg
            });
        }
    }

    //LOGOUT USER
    const logout = () => dispatch({
        type: LOGOUT
    });

    //CLEAR ERRORS
    const clearErrors = () => dispatch({
        type: CLEAR_ERRORS
    });

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register,
                loadUser,
                login,
                logout,
                clearErrors
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;