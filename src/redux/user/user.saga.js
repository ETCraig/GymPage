import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import {
    loginFailure,
    loginSuccess,
    logoutFailure,
    // logoutSuccess,
    registerFailure,
    registerSuccess
} from './user.actions';
import { config } from '../../utils/api-config';

export function* isUserAuthenticated() {
    try {

    } catch (error) {
        yield put(loginFailure(error));
    }
}

export function* setUserAuthStatus(userData) {
    yield put(loginSuccess({ ...userData }));
}

export function* login(payload) {
    try {
        const user = yield axios.post('/api/login', payload, config);
        console.log('USER', user);
        yield put(loginSuccess({ id: user._id, ...user }));
    } catch (error) {
        yield put(loginFailure(error));
    }
}

export function* logout() {
    try {

    } catch (error) {
        yield put(logoutFailure(error));
    }
}

export function* register(payload) {
    try {
        const newUser = yield axios.post('/api/register', payload, config);
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
        call(isUserAuthenticated),
        call(onLogoutStart),
        call(onRegisterStart),
        call(onRegisterSuccess)
    ]);
}