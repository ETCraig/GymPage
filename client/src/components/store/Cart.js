import React, { Fragment, useContext, useEffect } from 'react';

import Loading from '../layout/Loading';
import StoreContext from '../../context/store/storeContext';

const Cart = () => {
    const storeContext = useContext(StoreContext);

    const { cart, loading } = storeContext;
    return (
        <div>
            {cart !== null && !loading ? (
                cart.map(item => (
                    <div>
                        {item.name}
                    </div>
                ))
            ) : <Loading />}
        </div>
    );
}

export default Cart;