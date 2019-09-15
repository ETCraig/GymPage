import React, { Fragment, useContext, useEffect } from 'react';

import Loading from '../layout/Loading';
import AuthContext from '../../context/auth/authContext';
import StoreContext from '../../context/store/storeContext';
import StoreNav from './StoreNav';

import { Link } from 'react-router-dom';

const Shop = () => {
    const authContext = useContext(AuthContext);
    const storeContext = useContext(StoreContext);

    const { getProducts, products, loading } = storeContext;

    useEffect(() => {
        authContext.loadUser();
        getProducts();
        // eslint-disable-next-line
    }, []);

    if (products !== null && products.length === 0) {
        return <h4>No Products Found</h4>
    }

    return (
        <Fragment>
            <StoreNav />
            <div style={{ minHeight: "400px" }}>
                {products.length !== 0 && !loading ? (
                    products.map(product => (
                        <Link to={`/store/${product._id}`} key={product._id}>
                            <div className="card" style={{ width: "20rem", textAlign: "center", display: "inline-block", margin: "10px" }} key={product._id}>
                                <img className="card-img-top" src={product.primary_image} alt="Card cap" height="200" width="200" style={{ borderRadius: ".60rem" }} />
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