import {
    ADD_PRODUCT,
    CREATE_METHOD,
    DELETE_METHOD,
    GET_CART,
    GET_METHODS,
    GET_ORDERS,
    GET_PRODUCT,
    GET_PRODUCTS,
    PROCESS_PURCHASE,
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