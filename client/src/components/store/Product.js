import React, { Fragment, useContext, useEffect, useState } from 'react';

import AuthContext from '../../context/auth/authContext';
import Loading from '../layout/Loading';
import StoreContext from '../../context/store/storeContext';

const Product = (props) => {
    const authContext = useContext(AuthContext);
    const storeContext = useContext(StoreContext);

    const { getProduct, loading, product, addToCart } = storeContext;

    useEffect(() => {
        authContext.loadUser();
        const id = props.match.params.id;

        getProduct(id);
        // eslint-disable-next-line
    }, []);

    const [type, setType] = useState({});
    const [selected, setSelected] = useState(20);
    const [amount, setAmount] = useState(1);

    const onChange = e => setAmount( e.target.value );

    const selectOption = (option, index) => {
        console.log(option)
        setType({ type: option });
        setSelected(index);
        console.log(type, selected, amount);
    }

    const addProduct = () => {
        console.log(type.type.size)
        if (!type.type.price || !type.type.size || selected === 20) {
            console.log('Select a Type.');
        } else {
            console.log(type.type.flavor);
            let editedProduct = product;
            editedProduct.comments = [];
            editedProduct.sizes = [];
            editedProduct.sizes.push(type.type);
            console.log(editedProduct);
            addToCart(editedProduct, amount);
        }
    }
    console.log(product)
    return (
        <div>
            <div className="float-right">
                <i className="fas fa-shopping-cart"></i>
            </div>
            {product !== null && !loading ? (
                <Fragment>
                    <img src={product.primary_image} alt="Product Representation" style={{ width: "260px", height: "260px" }} />
                    {product.images.map(pic => (
                        <img src={pic.image} style={{ width: "60px", height: "60px" }} alt="Smaller Representations" key={pic.image} />
                    ))}
                    <h6>{product.name}</h6>
                    <h6>{product.brand}</h6>
                    <h6>{product.category}</h6>
                    {/* {selected} */}
                    <a
                        type="button"
                        className="btn btn-danger"
                        href="#type-collapse"
                        data-parent="#type-collapse"
                        data-toggle="collapse">
                        Type
                        </a>
                    <div id="type-collapse" className="collapse hide">
                        {product.sizes.map((option, index) => (
                            <div
                                className="card"
                                key={index}
                                style={{ border: selected === index ? "2px solid #ffd11a" : "1 px solid grey", width: "20rem", textAlign: "center", display: "inline-block", margin: "10px" }}
                                onClick={() => selectOption(option, index)}>
                                <img src={option.image} alt="Option Representation" style={{ width: "60px", height: "60px" }} />
                                <div className="card-body">
                                    <p>Flavor: {option.flavor}</p>
                                    <p>Servings: {option.size}</p>
                                    <p>Price: ${option.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="btn-group">
                        <select value={amount} onChange={e => onChange(e)}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                    <div className="card">
                        <button className="btn btn-success" onClick={() => addProduct()}>Add To Cart</button>
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