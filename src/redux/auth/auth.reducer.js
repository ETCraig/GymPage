import AuthActionTypes from './auth.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case AuthActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload,
                error: null
            }
        case AuthActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case AuthActionTypes.SIGN_IN_FAILURE:
        case AuthActionTypes.SIGN_OUT_FAILURE:
        case AuthActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}

export default authReducer;