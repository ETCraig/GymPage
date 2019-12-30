import {
    CREATE_ARTICLE,
    USERS_ARTICLES,
    SINGLE_ARTICLE,
    COMMUNITY_ARTICLE,
    EDIT_ARTICLE,
    FAVORITE_ARTICLE,
    UNFAVORITE_ARTICLE,
    COMMENT_ARTICLE,
    UNCOMMENT_ARTICLE
} from '../Types';

export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_ARTICLE:
            return {

            }
        case USERS_ARTICLES:
            return {

            }
        case SINGLE_ARTICLE:
            return {

            }
        case COMMUNITY_ARTICLE:
            return {

            }
        case EDIT_ARTICLE:
            return {

            }
        case FAVORITE_ARTICLE:
            return {

            }
        case UNFAVORITE_ARTICLE: 
            return {

            }
        case COMMENT_ARTICLE:
            return {

            }
        case UNCOMMENT_ARTICLE:
            return {
                
            }
        default:
            return state;
    }
}