import React, { useContext, useEffect } from 'react';

import StoreContext from '../../context/store/storeContext';

import { Link } from 'react-router-dom';

const StoreNav = () => {
    const storeContext = useContext(StoreContext);

    const { getCart } = storeContext;

    useEffect(() => {
        getCart();
    }, []);
    return (
        <div style={{ marginBottom: "30px" }}>
            <div className="float-right">
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                </Link>
            </div>
        </div>
    );
}

export default StoreNav;