import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import { } from '';
import {
    loginFailure,
    loginSuccess,
    logoutFailure,
    logoutSuccess,
    registerFailure,
    registerSuccess
} from './user.actions';

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

    } catch (error) {
        yield put(registerFailure(error));
    }
}

export function* loginAfterRegister({ payload: { user, additionalData } }) {
    yield setUserAuthStatus(payload);
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