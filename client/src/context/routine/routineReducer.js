import {
    ADD_EXERCISE,
    CREATE_COMMENT,
    CREATE_ROUTINE,
    CREATE_WORKOUT,
    DELETE_COMMENT,
    DELETE_ROUTINE,
    DELETE_WORKOUT,
    EDIT_ROUTINE,
    EDIT_WORKOUT,
    REMOVE_EXERCISE,
    ROUTINE_ERROR,
    SAVE_ROUTINE,
    UNSAVE_ROUTINE,
    UPDATE_RECORD
} from '../Types';

export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_ROUTINE:
            return {

            }
        case CREATE_WORKOUT:
            return {

            }
        case DELETE_ROUTINE:
            return {

            }
        case DELETE_WORKOUT:
            return {

            }
        case UPDATE_RECORD:
            return {

            }
        case EDIT_ROUTINE:
            return {

            }
        case EDIT_WORKOUT:
            return {

            }
        case ADD_EXERCISE:
            return {

            }
        case REMOVE_EXERCISE:
            return {

            }
        case SAVE_ROUTINE:
            return {

            }
        case UNSAVE_ROUTINE:
            return {

            }
        case CREATE_COMMENT:
            return {

            }
        case DELETE_COMMENT:
            return {

            }
        case ROUTINE_ERROR:
            return {
                ...state,
                routines: null,
                routine: null,
                workout: null,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
}