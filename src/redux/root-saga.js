import { all, call } from 'redux-saga/effects';

import { userSagas } from './auth/auth.saga';

export default function* rootSaga() {
    yield all([
        call(userSagas)
    ]);
}