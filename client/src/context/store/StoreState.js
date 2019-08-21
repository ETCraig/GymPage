import React, { useReducer } from 'react';
import StoreContext from './storeContext';
import StoreReducer from './storeReducer';
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
    STORE_ERROR
} from '../Types';

import axios from 'axios';

const StoreState = props => {
    const initialState = {
        products: [],
        product: null,
        cart: null,
        methods: null,
        error: null,
        loading: true
    }

    const [state, dispatch] = useReducer(StoreReducer, initialState);

    //
    const getProducts = async () => {
        try {
            const res = await axios.get('/api/store');
            console.log('RES', res)

            if (res.data.msg) {
                let data = [];
                console.log('IN')
                dispatch({
                    type: GET_PRODUCTS,
                    payload: data
                });
            }

            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: STORE_ERROR,
                payload: err
            });
        }
    }
    //
    const getProduct = async id => {
        try {
            console.log(id)
            const res = await axios.get(`/api/store/${id}`);
            console.log(res);
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: STORE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const getCart = async () => {
        try {
            console.log('HIT GET');
            const res = await axios.get('/api/store/cart');
            console.log('GET RES', res);
            dispatch({
                type: GET_CART,
                payload: res.data
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: STORE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const addToCart = async (product, amount) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        let data = { product, amount };

        try {
            const res = await axios.post('/api/store/cart', data, config);

            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: STORE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const removeFromCart = async (product, amount) => {
        try {
            
        } catch (err) {
            dispatch({
                type: STORE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const getMethods = async () => {
        try {
            const res = await axios.get('/api/store/methods');

            dispatch({
                type: GET_METHODS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: STORE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const createMethod = async (tokenId) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/store/methods', tokenId, config);

            dispatch({
                type: CREATE_METHOD,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: STORE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const processPurchase = async () => {
        try {

        } catch (err) {
            dispatch({
                type: STORE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const getOrders = async limit => {
        try {
            const res = await axios.get(`/api/store/receipts?page=1&limit=${limit}`);

            dispatch({
                type: GET_ORDERS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: STORE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const deleteMethod = async sourceId => {
        try {
            const res = await axios.delete(`/api/store/method/${sourceId}`);

            dispatch({
                type: DELETE_METHOD,
                payload: sourceId
            });
        } catch (err) {
            dispatch({
                type: STORE_ERROR,
                payload: err.response.msg
            });
        }
    }

    return (
        <StoreContext.Provider
            value={{
                products: state.products,
                product: state.product,
                cart: state.cart,
                methods: state.methods,
                error: state.error,
                loading: state.loading,
                getProduct,
                getProducts,
                getCart,
                addToCart
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreState;