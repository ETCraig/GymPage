import React, { Fragment, useContext, useEffect, useState } from 'react';

import Checkout from './Checkout';
import Loading from '../layout/Loading';
import StoreContext from '../../context/store/storeContext';

const Cart = () => {
    const storeContext = useContext(StoreContext);

    const { cart, calculateTotal, loading, setLoading, emptyCart, editCartItem, removeFromCart } = storeContext;

    useEffect(() => {
        console.log(cart)
        if(cart && cart.items.length > 0) {
            calculateTotal();
        }
    }, []);

    const [userCart, setCart] = useState(cart);
    const [show, setShow] = useState(false);

    const handleUpdate = (e, id) => {
        console.log(e.target.value, id);
        let product_id = id;
        let count = e.target.value;
        editCartItem(product_id, count);
    }

    const handleDelete = async (product_id) => {
        await setLoading();
        var array = userCart; // make a separate copy of the array
        console.log(array);
        var index = array.items.findIndex(obj => obj._id == product_id);
        if (index !== -1) {
            array.items.splice(index, 1);
            setCart(array);
        }
        if(userCart.items.length === 0) {
            await emptyCart(product_id);
        } else {
            await removeFromCart(product_id);
        }
    }

    const showModal = () => {
        setShow(true);
    }

    const hideModal = () => {
        setShow(false)
    }

    if(cart === null && userCart === null) {
        return (
            <div className="container-fluid">
                No Items in Cart
            </div>
        );
    }

    return (
        <div>
            Cart
            <button className="btn btn-success" onClick={showModal}>Check out</button>
            <Checkout show={show} handleClose={hideModal} />
            {userCart !== null && !loading ? (
                userCart.items.map(item => (
                    <div className="container-fluid" key={item._id}>
                        <div className="row">
                            <div className="col-12 mt-3">
                                <div className="card">
                                    <div style={{ display: "flex", flex: "1 1 auto" }}>
                                        <div className="img-square-wrapper">
                                            <img src={item.item.sizes[0].image} alt="Card image cap" style={{ width: "300px", height: "220px" }} />
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">{item.item.name}</h4>
                                            <p className="card-text">{item.item.brand}</p>
                                            <p className="card-text">Price: {item.item.sizes[0].price}</p>
                                        </div>
                                    </div>
                                    <div className="card-footer" style={{ display: "flex", flexDirection: "row" }}>
                                        <small className="text-muted">
                                            Count:
                                        </small>
                                        <select defaultValue={item.count} onChange={(e) => handleUpdate(e, item._id)}>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                        <small className="text-muted btn" onClick={() => handleDelete(item._id)}>
                                            Delete
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : <Loading />}
        </div>
    );
}

export default Cart;