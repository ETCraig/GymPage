import {
    CREATE_POST,
    GET_POST,
    GET_POSTS,
    DELETE_POST,
    LIKE_POST,
    UNLIKE_POST,
    COMMENT_POST,
    UNCOMMENT_POST,
} from '../Types';

export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_POST: 
            return {

            }
        case GET_POST:
            return {

            }
        case GET_POSTS:
            return {

            }
        case DELETE_POST:
            return {

            }
        case LIKE_POST:
            return {

            }
        case UNLIKE_POST:
            return {

            }
        case COMMENT_POST:
            return {

            }
        case UNCOMMENT_POST:
            return {

            }
        default:
            return state;
    }
}