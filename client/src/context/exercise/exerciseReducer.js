import {
    EXERCISE_ERROR,
    GET_EXERCISE,
    GET_EXERCISES,
    GET_MUSCLE
} from '../Types';

export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_EXERCISES:
            return {

            }
        case GET_EXERCISE: 
            return {
                ...state,
                exercise: payload,
                loading: false
            }
        case GET_MUSCLE:
            return {
                ...state,
                exercises: payload,
                loading: false
            }
        case EXERCISE_ERROR:
            return {
                ...state,
                exercise: null,
                exercises: null,
                error: payload
            }
        default:
            return state;
    }
}