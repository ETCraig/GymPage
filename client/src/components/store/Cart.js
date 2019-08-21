import React, { Fragment, useContext, useEffect } from 'react';

import Loading from '../layout/Loading';
import StoreContext from '../../context/store/storeContext';

const Cart = () => {
    const storeContext = useContext(StoreContext);

    const { cart, loading } = storeContext;
    console.log(cart);
    return (
        <div>
            {cart !== null && !loading ? (
                cart.items.map(item => (
                    <div>
                        {item}
                    </div>
                ))
            ) : <Loading />}
        </div>
    );
}

export default Cart;