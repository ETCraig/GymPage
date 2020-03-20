import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    isAuthenticated: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case UserActionTypes.LOGIN_USER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                currentUser: payload.user,
                isAuthenticated: true,
                error: null
            }
        case UserActionTypes.LOGOUT_USER_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                currentUser: null,
                isAuthenticated: false,
                error: null
            }
        case UserActionTypes.LOGIN_USER_FAILURE:
        case UserActionTypes.LOGOUT_USER_FAILURE:
        case UserActionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                error: payload
            }    
        default:
            return state;
    }
}

export default userReducer;