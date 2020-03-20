import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import {
    loginFailure,
    loginSuccess,
    logoutFailure,
    logoutSuccess,
    registerFailure,
    registerSuccess
} from './user.actions';
import { config } from '../../utils/api-config';
import setAuthToken from '../../utils/SetAuthToken';
import API from '../../utils/api';

// export function* isUserAuthenticated() {
//     try {

//     } catch (error) {
//         yield put(loginFailure(error));
//     }
// }

export function* setUserAuthStatus(userData) {
    if(localStorage.token) {
        yield setAuthToken(localStorage.token);
    }

    yield put(loginSuccess({ ...userData }));
}

export function* login({ payload: { email, password } }) {
    try {
        const body = { email, password };
        const user = yield axios.post(`${API}/api/user/login`, body, config);
        console.log('USER', user);
        yield put(loginSuccess(user.data));
    } catch (error) {
        yield put(loginFailure(error));
    }
}

export function* logout() {
    try {
        yield put(logoutSuccess());
    } catch (error) {
        yield put(logoutFailure(error));
    }
}

export function* register(payload) {
    try {
        const newUser = yield axios.post(`${API}/api/register`, payload, config);
        yield put(registerSuccess(newUser));
    } catch (error) {
        yield put(registerFailure(error));
    }
}

export function* loginAfterRegister({ payload: { user, additionalData } }) {
    yield setUserAuthStatus(user, additionalData);
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_ACTION);
}

export function* onLoginStart() {
    yield takeLatest(UserActionTypes.LOGIN_USER_START, login);
}

export function* onLogoutStart() {
    yield takeLatest(UserActionTypes.LOGOUT_USER_START, logout);
}

export function* onRegisterStart() {
    yield takeLatest(UserActionTypes.REGISTER_USER_START, register);
}

export function* onRegisterSuccess() {
    yield takeLatest(UserActionTypes.REGISTER_USER_SUCCESS, loginAfterRegister);
}

export function* userSagas() {
    yield all([
        call(onLoginStart),
        // call(isUserAuthenticated),
        call(onLogoutStart),
        call(onRegisterStart),
        call(onRegisterSuccess)
    ]);
}