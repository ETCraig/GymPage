import React, { Fragment, useContext, useEffect } from 'react';

import StoreContext from '../../context/store/storeContext';

const Product = (props) => {
    const storeContext = useContext(StoreContext);

    const {getProduct, loading, product, cart} = storeContext;

    useEffect(() => {
        const id = props.match.params.id;

        getProduct(id);
        // eslint-disable-next-line
    }, []);
    console.log(product)
    return (
        <div>

        </div>
    );
}

export default Product;