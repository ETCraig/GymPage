import React, { useContext, useEffect, useState } from 'react';

import '../styles/Checkout.css';
import ProfileContext from '../../context/profile/profileContext';
import StoreContext from '../../context/store/storeContext';
import { withRouter } from 'react-router-dom';

import {
    CardElement,
    Elements,
    injectStripe
} from 'react-stripe-elements';

const Checkout = (props) => {
    const storeContext = useContext(StoreContext);
    const profileContext = useContext(ProfileContext);

    const { getMethods, methods, processPurchase, setLoading, total } = storeContext;
    const { profile } = profileContext;

    useEffect(() => {
        getMethods();
        console.log(profile, '!');
        console.log(profileContext, '!!');
        if(profile != null && profile.address && profile.address.length > 0) {
            setAddresses(profile.address);
        }
        //eslint-disable-next-line
    }, []);

    const handleInputChange = e => {
        const { name, value } = e.target
        setNewAddress({ ...newAddress, [name]: value });
    }

    const updateAddress = _id => {
        if (address && address.length > 1) {
            setAddress('');
        } else {
            setAddress(_id);
        }
    }

    const updateSource = id => {
        if (source && source.length > 1) {
            setSource('');
        } else {
            setSource(id);
        }
    }

    const handleCheckout = async e => {
        e.preventDefault();
        if (source && source.length > 1) {
            setLoading();
            let data = {
                source,
                address: newAddress,
                amount: parseFloat(total),
            }
            await processPurchase(data);
            props.history.push('/success');
        } else if (props.stripe) {
            setLoading();
            let { token } = await props.stripe.createToken();
            let data = {
                token,
                address,
                amount: parseFloat(total),
            }
            await processPurchase(data);
            props.history.push('/success');
        } else {
            console.log('Stripe.js has not loaded.');
        }
    }

    const [addresses, setAddresses] = useState([]);
    const [newAddress, setNewAddress] = useState({ name: 'Dummy Address', street: '1234 St', city: 'City', state: 'Somewhere', zip: '12345', });
    const [address, setAddress] = useState('');
    const [source, setSource] = useState('');

    const showHideClassname = props.show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassname}>
            <section className="modal-main text-center">
                <div>
                <h5 style={{ float: "left" }}>Total: ${total}</h5>
                <button onClick={props.handleClose} className="btn" style={{ float: "right" }}>
                    <i className="fas fa-times"></i>
                </button>
                <form className="container" onSubmit={handleCheckout}>
                    <label>Shipping Address:</label>
                    {addresses.length ? (
                        addresses.map(location => (
                            <div key={location._id} className="container">
                                <div style={{border: address._id === location._id ? "3px solid #da7618" : ""}} className="card" onClick={() => updateAddress(location._id)}>
                                    <div className="card-body row justify-content-between">
                                        <div className="mb-3">
                                            {location.name}
                                        </div>
                                        <div className="mb-3">
                                            {location.street}
                                        </div>
                                        <div className="mb-3">
                                            {location.city}, {location.state}
                                        </div>
                                        <div className="mb-3">
                                            {location.zip}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : null }
                    <div style={{marginTop: "15px"}}></div>
                        <button 
                            className="btn btn-primary" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#addressCollapse" 
                            aria-expanded="false" 
                            aria-controls="addressCollapse">
                            Use New Address
                        </button>
                            <div className="collapse mt-2" id="addressCollapse">
                                <div className="row justify-content-center">
                                    <div className="col-sm-4">
                                        <div className="input-group mb-3 input-group-sm">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Name</span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Joe Smith"
                                                name="name"
                                                onChange={handleInputChange}
                                                value={newAddress.name}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="input-group mb-3 input-group-sm">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Street</span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="1234 Abby Ln"
                                                name="street"
                                                onChange={handleInputChange}
                                                value={newAddress.street}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-sm-3">
                                        <div className="input-group mb-3 input-group-sm">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">City</span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Gilbert"
                                                name="city"
                                                onChange={handleInputChange}
                                                value={newAddress.city}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="input-group mb-3 input-group-sm">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">State</span>
                                            </div>
                                            <select
                                                className="form-control"
                                                id="state"
                                                name="state"
                                                onChange={handleInputChange}
                                                value={newAddress.state}>
                                                <option value="">N/A</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AL">Alabama</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="AZ">Arizona</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DC">District of Columbia</option>
                                                <option value="DE">Delaware</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="IA">Iowa</option>
                                                <option value="ID">Idaho</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MD">Maryland</option>
                                                <option value="ME">Maine</option>
                                                <option value="MI">Michigan</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MO">Missouri</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MT">Montana</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="NV">Nevada</option>
                                                <option value="NY">New York</option>
                                                <option value="OH">Ohio</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="PR">Puerto Rico</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VA">Virginia</option>
                                                <option value="VT">Vermont</option>
                                                <option value="WA">Washington</option>
                                                <option value="WI">Wisconsin</option>
                                                <option value="WV">West Virginia</option>
                                                <option value="WY">Wyoming</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="input-group mb-3 input-group-sm">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Zip</span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="12345"
                                                name="zip"
                                                onChange={handleInputChange}
                                                value={newAddress.zip}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                    <div style={{marginTop: "15px"}}></div>
                    <label>Payment Method:</label>
                    {methods != null ? (
                        methods.map(wallet => (
                            <div className="container" key={wallet.id}>
                                <div style={{border: source === wallet.id ? "3px solid #da7618" : ""}} className="card" onClick={() => updateSource(wallet.id)}>
                                    <div className="card-body row justify-content-between">
                                        <div className="mb-3">
                                            {wallet.card.brand}
                                        </div>
                                        <div className="mb-3">
                                            {wallet.card.last4}
                                        </div>
                                        <div className="mb-3">
                                            {wallet.card.exp_month} / {wallet.card.exp_year}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : null }
                        <button 
                            className="btn btn-primary" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#walletCollapse" 
                            aria-expanded="false" 
                            aria-controls="walletCollapse">
                            Use New Address
                        </button>
                        <div className="collapse mb-2" id="walletCollapse">
                            <CardElement />
                        </div>
                    <input type="submit" value="Purchase" className="btn btn-success btn-block mt-5" />
                </form>
                </div>
            </section>
        </div>
    );
}

export default injectStripe(withRouter(Checkout));