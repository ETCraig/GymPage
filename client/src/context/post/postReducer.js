import {
    CREATE_POST,
    GET_POST,
    GET_POSTS,
    DELETE_POST,
    LIKE_POST,
    UNLIKE_POST,
    COMMENT_POST,
    UNCOMMENT_POS,
} from '../Types';

export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        
        default:
            return state;
    }
}