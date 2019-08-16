import {
    EXERCISE_ERROR,
    GET_EXERCISE,
    GET_EXERCISES,
    GET_MUSCLE
} from '../Types';

export default (state, action) => {
    const { type, payload } = action;
    console.log(type, payload);
    switch (action.type) {
        case GET_EXERCISES:
            return {

            }
        case GET_EXERCISE: 
            return {

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