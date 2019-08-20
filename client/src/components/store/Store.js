import React, { Fragment, useContext, useEffect } from 'react';

import Loading from '../layout/Loading';
import StoreContext from '../../context/store/storeContext';

import { Link } from 'react-router-dom';

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
            <div style={{minHeight: "400px"}}>
            {products.length !== 0 && !loading ? (
                products.map(product => (
                    <Link to={`/store/${product._id}`} key={product._id}>
                        <div className="card" style={{ width: "20rem", textAlign: "center", display: "inline-block", margin: "10px" }} key={product._id}>
                            <img className="card-img-top" src={product.primary_image} alt="Card image cap" height="200" width="200" style={{ borderRadius: ".60rem" }} />
                            <div className="card-block">
                                <h4 className="card-title">{product.name}</h4>
                                <p className="card-text">Some quick example text to build</p>
                                <button className="btn btn-primary">Go somewhere</button>
                            </div>
                        </div>
                    </Link>
                ))
            ) : <Loading />}
            </div>
        </Fragment>
    );
}

export default Shop;