import React, { useContext, useEffect, useState } from 'react';

import AddMethodForm from './AddMethodForm';
import '../styles/Checkout.css';
import StoreContext from '../../context/store/storeContext';

import { 
    CardElement, 
    Elements, 
    injectStripe 
} from 'react-stripe-elements';

const Checkout = (props) => {
    const storeContext = useContext(StoreContext);

    const { getMethods, processPurchase } = storeContext;

    useEffect(() => {
        getMethods();
        //eslint-disable-next-line
    }, []);

    // if(props.show) {
    //     getMethods();
    // }
    
    const handleInputChange = e => {
        const {name, value} = e.target
        setAddress({...address, [name]: value});
    }

    const handleCheckout = async e => {
        e.preventDefault();
        console.log('HIT', address)
        if (props.stripe) {
            let {token} = await props.stripe.createToken();
            console.log(token);
            // let data = {}
        } else {
            console.log('Stripe.js has not loaded.');
        }
    }

    const [wallets] = useState([]);
    const [addresses] = useState([]);
    const [address, setAddress] = useState({name: '', street: '', city: '', state: '', zip: '',});

    const showHideClassname = props.show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassname}>
            <section className="modal-main text-center">
                <h5 style={{float: "left"}}>Total: $24.99</h5>
                <button onClick={props.handleClose} className="btn" style={{float: "right"}}>
                    <i className="fas fa-times"></i>
                </button>
                    <form className="container" onSubmit={handleCheckout}>
                    <label>Shipping Address:</label>
                    {addresses.length ? (
                        <div>

                        </div>
                    ) : (
                            <div>
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
                                                value={address.name}
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
                                                value={address.street}
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
                                                value={address.city}
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
                                                value={address.state}>
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
                                                value={address.zip}    
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    <label>Payment Method:</label>
                    {wallets.length ? (
                        <div>

                        </div>
                    ) : (
                            <CardElement />
                        )}
                    <input type="submit" value="Purchase" className="btn btn-success btn-block mt-5" />
                </form>
            </section>
        </div>
    );
}

export default injectStripe(Checkout);