import AuthActionTypes from './auth.types';

export const checkUserSession = () => ({
    type: AuthActionTypes.CHECK_USER_ACTION
});

export const signInStart = credentials => ({
    type: AuthActionTypes.SIGN_IN_START,
    payload: credentials
});

export const signInFailure = error => ({
    type: AuthActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const signInSuccess = user => ({
    type: AuthActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signOutStart = () => ({
    type: AuthActionTypes.SIGN_OUT_START,
});

export const signOutFailure = error => ({
    type: AuthActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signOutSuccess = () => ({
    type: AuthActionTypes.SIGN_OUT_SUCCESS
});

export const signUpStart = credentials => ({
    type: AuthActionTypes.SIGN_UP_START,
    payload: credentials
});

export const signUpFailure = error => ({
    type: AuthActionTypes.SIGN_UP_FAILURE,
    payload: error
});

export const signUpSuccess = ({ user, additionalData }) => ({
    type: AuthActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
});