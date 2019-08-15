import {
    EXERCISE_ERROR,
    GET_EXERCISE,
    GET_EXERCISES,
    GET_MUSCLE
} from '../Types';

export default (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case GET_EXERCISES:
            return {

            }
        case GET_EXERCISE: 
            return {

            }
        case GET_MUSCLE:
            return {

            }
        case EXERCISE_ERROR:
            return {
                
            }
        default: 
            return state;
    }
}