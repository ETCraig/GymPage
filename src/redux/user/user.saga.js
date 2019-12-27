import { all, call, put, takeLatest } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import { signInFailure, signOutFailure, signOutSuccess, signUpFailure } from './user.actions';

export function* setUserAuthStatus() {

}

export function* isUserAuthenticated() {
    try {
        // const userAuth = yield 
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signIn({ payload: { email, password } }) {
    try {

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

export function* signUp({ payload: { } }) {
    try {

    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield setUserAuthStatus();
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_ACTION, isUserAuthenticated);
}

export function* onSignInStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
    yield all([
        onSignInStart,
        isUserAuthenticated,
        onSignOutStart,
        onSignUpStart,
        onSignUpSuccess
    ]);
}