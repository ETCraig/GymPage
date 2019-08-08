import {
    DELETE_PROFILE,
    GET_PROFILE,
    GET_PROFILES,
    GET_USER_PROFILE,
    RECORD_SESSION,
    UPDATE_PROFILE
} from '../Types';

export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_USER_PROFILE:
            return {

            }
        case UPDATE_PROFILE: 
            return {

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
        default:
            return state;
    }
}