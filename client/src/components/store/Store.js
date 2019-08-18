import React, { Fragment, useContext, useEffect } from 'react';

import Loading from '../layout/Loading';
import StoreContext from '../../context/store/storeContext';

const Shop = () => {
    const storeContext = useContext(StoreContext);

    const { getProducts, products, loading } = storeContext;

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, []);

    if (products !== null && products.length === 0) {
        return <h4>No Products Found</h4>
    }

    return (
        <Fragment>
            {products.length !== 0 && !loading ? (
                products.map(product => (
                    <div key={product._id}>
                        {product.name}
                    </div>
                ))
            ) : <Loading />}
        </Fragment>
    );
}

export default Shop;