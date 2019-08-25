import {
    ADD_PRODUCT,
    CREATE_METHOD,
    DELETE_METHOD,
    EDIT_PRODUCT,
    EMPTY_CART,
    GET_CART,
    GET_METHODS,
    GET_ORDERS,
    GET_PRODUCT,
    GET_PRODUCTS,
    PROCESS_PURCHASE,
    REMOVE_PRODUCT,
    SET_LOADING,
    STORE_ERROR,
} from '../Types';

export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                loading: false
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: payload,
                loading: false
            }
        case GET_CART:
            return {
                ...state,
                cart: payload,
                loading: false
            }
        case ADD_PRODUCT:
            return {
                ...state,
                cart: payload
            }
        case EDIT_PRODUCT:
            return {
                ...state,
                
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                cart: state.cart.items.filter(item => item._id !== payload),
                loading: false
            }
        case EMPTY_CART:
            return {
                ...state,
                cart: null,
                loading: false
            }
        case GET_METHODS:
            return {
                ...state,
                methods: payload
            }
        case CREATE_METHOD:
            return {
                
            }
        case PROCESS_PURCHASE: {

        }
        case GET_ORDERS: 
            return {
                ...state,
                orders: payload,
                loading: false
            }
        case DELETE_METHOD:
            return {
                ...state,
                methods: state.methods.filter(method => method.sourceId !== method.payload)
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case STORE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default: 
            return state;
    }
}