import UserActionTypes from './user.types';

export const loginStart = credentials => ({
    type: UserActionTypes.LOGIN_USER_START,
    payload: credentials
});

export const loginSuccess = user => ({
    type: UserActionTypes.LOGIN_USER_SUCCESS,
    payload: user
});

export const loginFailure = error => ({
    type: UserActionTypes.LOGIN_USER_FAILURE,
    payload: error
});

export const logoutStart = () => ({
    type: UserActionTypes.LOGOUT_USER_START
});

export const logoutSuccess = () => ({
    type: UserActionTypes.LOGOUT_USER_SUCCESS
});

export const logoutFailure = error => ({
    type: UserActionTypes.LOGOUT_USER_FAILURE,
    payload: error
});

export const registerStart = credentials => ({
    type: UserActionTypes.REGISTER_USER_START,
    payload: credentials
});

export const registerSuccess = ({ user, additionalData }) => ({
    type: UserActionTypes.REGISTER_USER_SUCCESS,
    payload: { user, additionalData }
});

export const registerFailure = error => ({
    type: UserActionTypes.REGISTER_USER_FAILURE,
    payload: error
});