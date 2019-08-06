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

export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}