import { all, call, put, takeLatest } from 'redux-saga/effects';

import AuthActionTypes from './auth.types';
import { signUpNewUser } from '../../api/auth/auth.utils';
import { signInFailure, signOutFailure, signOutSuccess, signUpFailure, signInSuccess } from './auth.actions';

export function* setUserAuthStatus(userData) {
    yield put(signInSuccess({ id: userData._id, ...userData.user }));
}

export function* isUserAuthenticated() {
    try {
        // const userAuth = yield 
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signIn(payload) {
    try {
        // const { user } = yield axios.post('/api/auth/login', payload, config);
        // yield setUserAuthStatus(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signOut() {
    try {
        //
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* signUp(payload) {
    try {
        console.log(payload)
        const { user } = yield signUpNewUser(payload);
        yield setUserAuthStatus(user);
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield setUserAuthStatus();
}

export function* onCheckUserSession() {
    yield takeLatest(AuthActionTypes.CHECK_USER_ACTION, isUserAuthenticated);
}

export function* onSignInStart() {
    yield takeLatest(AuthActionTypes.SIGN_IN_START, signIn);
}

export function* onSignOutStart() {
    yield takeLatest(AuthActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
    yield takeLatest(AuthActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(AuthActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* authSagas() {
    yield all([
        call(onSignInStart),
        call(isUserAuthenticated),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}