import {
    UPDATE_AVATAR,
    UPDATE_EMAIL,
    UPDATE_PASSWORD
} from '../Types';

export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_AVATAR:
            return {

            }
        case UPDATE_EMAIL:
            return {

            }
        case UPDATE_PASSWORD:
            return {

            }
        default:
            return state;
    }
}