import React, { useReducer } from 'react';
import StoreContext from './storeContext';
import StoreReducer from './storeReducer';
import {
    ADD_PRODUCT,
    CALCULATE_TOTAL,
    // CREATE_METHOD,
    // DELETE_METHOD,
    EDIT_PRODUCT,
    EMPTY_CART,
    GET_CART,
    GET_METHODS,
    // GET_ORDERS,
    GET_PRODUCT,
    GET_PRODUCTS,
    PROCESS_PURCHASE,
    REMOVE_PRODUCT,
    SET_LOADING,
    STORE_ERROR
} from '../Types';

import axios from 'axios';

const StoreState = props => {
    const initialState = {
        products: [],
        product: null,
        cart: null,
        methods: null,
        total: 0,
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
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            console.log('HIT GET');
            const res = await axios.post('/api/store/user-cart', {}, config);
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
    const editCartItem = async (product_id, count) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.patch(`/api/store/cart/${product_id}`, {count}, config);

            dispatch({
                type: EDIT_PRODUCT,
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
    const removeFromCart = async product_id => {
        try {
            await axios.delete(`/api/store/cart/${product_id}`);

            dispatch({
                type: REMOVE_PRODUCT,
                payload: product_id
            });
        } catch (err) {
            dispatch({
                type: STORE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const emptyCart = async product_id => {
        try {
            await axios.delete(`/api/store/cart/${product_id}`);

            dispatch({
                type: EMPTY_CART,
                payload: product_id
            });
        } catch (err) {
            dispatch({
                type: STORE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const getMethods = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            console.log('HIT GET METHODS');
            const res = await axios.post('/api/store/methods', {}, config);
            console.log('METHODS', res);
            dispatch({
                type: GET_METHODS,
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: STORE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    // const createMethod = async (tokenId) => {
    //     const config = {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }

    //     try {
    //         const res = await axios.post('/api/store/methods', tokenId, config);

    //         dispatch({
    //             type: CREATE_METHOD,
    //             payload: res.data
    //         });
    //     } catch (err) {
    //         dispatch({
    //             type: STORE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }
    //
    const processPurchase = async data => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/store/checkout', data, config);
            console.log(res);

            dispatch({
                type: PROCESS_PURCHASE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: STORE_ERROR,
                payload: err.response.msg
            });
        }
    }
    // //
    // const getOrders = async limit => {
    //     try {
    //         const res = await axios.get(`/api/store/receipts?page=1&limit=${limit}`);

    //         dispatch({
    //             type: GET_ORDERS,
    //             payload: res.data
    //         });
    //     } catch (err) {
    //         dispatch({
    //             type: STORE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }
    // //
    // const deleteMethod = async sourceId => {
    //     try {
    //         const res = await axios.delete(`/api/store/method/${sourceId}`);

    //         dispatch({
    //             type: DELETE_METHOD,
    //             payload: sourceId
    //         });
    //     } catch (err) {
    //         dispatch({
    //             type: STORE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }

    const setLoading = () => {
        dispatch({ type: SET_LOADING });
    }

    const calculateTotal = () => {
        let due = initialState.total;
        console.log(state.cart)
        let products = state.cart.items;

        for(let i = 0; i< products.length; i++) {
            due = due + (products[i].item.sizes[0].price * products[i].count);
        }
        console.log('DUE', due);
        dispatch({
            type: CALCULATE_TOTAL,
            payload: due
        });
    }

    return (
        <StoreContext.Provider
            value={{
                products: state.products,
                product: state.product,
                cart: state.cart,
                methods: state.methods,
                total: state.total,
                error: state.error,
                loading: state.loading,
                getProduct,
                getProducts,
                getCart,
                calculateTotal,
                addToCart,
                editCartItem,
                removeFromCart,
                emptyCart,
                getMethods,
                processPurchase,
                setLoading
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreState;