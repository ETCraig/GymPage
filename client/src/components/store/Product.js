import React, { Fragment, useContext, useEffect } from 'react';

import Loading from '../layout/Loading';
import StoreContext from '../../context/store/storeContext';

const Product = (props) => {
    const storeContext = useContext(StoreContext);

    const { getProduct, loading, product, cart } = storeContext;

    useEffect(() => {
        const id = props.match.params.id;

        getProduct(id);
        // eslint-disable-next-line
    }, []);
    console.log(product)
    return (
        <div>
            {product !== null && !loading ? (
                <Fragment>
                    <img src={product.primary_image} alt="Product Representation" style={{width: "260px", height: "260px"}} />
                    {product.images.map(pic => (
                        <img src={pic.image} style={{width: "60px", height: "60px"}} alt="Smaller Representations" key={pic.image} />
                    ))}
                    <h6>{product.name}</h6>
                    <h6>{product.brand}</h6>
                    <h6>{product.category}</h6>
                    {/* <select>Type</select> */}
                    <div className="card">
                        <button className="btn btn-success">Add To Cart</button>
                    </div>
                    {product.description.map(par => (
                        <p key={par.paragraph}>{par.paragraph}</p>
                    ))}
                </Fragment>
            ) : <Loading />}
        </div>
    );
}

export default Product;