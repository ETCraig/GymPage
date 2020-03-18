import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case UserActionTypes.LOGOUT_USER_SUCCESS:
            return {
                ...state,
                currentUser: payload,
                error: null
            }
        case UserActionTypes.LOGOUT_USER_SUCCESS:
            return {
                ...state,
                currentUser: null,
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