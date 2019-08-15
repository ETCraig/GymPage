import {
    DELETE_PROFILE,
    GET_PROFILE,
    GET_PROFILES,
    GET_USER_PROFILE,
    RECORD_SESSION,
    UPDATE_PROFILE,
    PROFILE_ERROR
} from '../Types';

export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_USER_PROFILE:
            return {
                ...state,
                profile: payload
            }
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: payload
            }
        case GET_PROFILES:
            return {

            }
        case GET_PROFILE:
            return {

            }
        case RECORD_SESSION:
            return {

            }
        case DELETE_PROFILE:
            return {

            }
        case PROFILE_ERROR:
            return {
                ...state,
                profile: null,
                error: payload
            }
        default:
            return state;
    }
}