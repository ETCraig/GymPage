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
            {/* <div style={{alignContent: "center", justifyContent: "center"}}> */}
                {products.length !== 0 && !loading ? (
                    products.map(product => (
                        <div className="card" style={{maxWidth: "20rem", textAlign: "center", display: "inline-block", margin: "10px"}} key={product._id}>
                            <img className="card-img-top" src={product.primary_image} alt="Card image cap" height="200" width="200" style={{borderRadius: ".60rem"}} />
                            <div className="card-block">
                                <h4 className="card-title">{product.name}</h4>
                                <p className="card-text">Some quick example text to build</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    ))
                ) : <Loading />}

                {/* <div className="container">
                <h2>Products</h2>
                <div className="card-columns">
                    <div className="card bg-light">
                        <div className="card-body">
                            <p className="card-text">Accessories</p>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body">
                            <p className="card-text">Furnitures</p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* </div> */}
        </Fragment>
    );
}

export default Shop;