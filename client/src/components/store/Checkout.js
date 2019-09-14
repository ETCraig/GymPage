import React, { useContext, useEffect, useState } from 'react';

import AddMethodForm from './AddMethodForm';
import '../styles/Checkout.css';
import StoreContext from '../../context/store/storeContext';

import { Elements } from 'react-stripe-elements';

const Checkout = (props) => {
    const storeContext = useContext(StoreContext);

    const { getMethods } = storeContext;

    useEffect(() => {
        getMethods();
    }, []);

    // if(props.show) {
    //     getMethods();
    // }

    const [wallets, setWallets] = useState([]);
    const [addresses, serAddresses] = useState([]);

    const showHideClassname = props.show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassname}>
            <section className="modal-main">
                <div className="container">
                    <h5>Total: $24.99</h5>
                    <label>Shipping Address:</label>
                    {addresses.length ? (
                        <div>

                        </div>
                    ) : (
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Street" />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="City, State" />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="input-group">
                                        <input type="text" className="form-group" placeholder="Zip" />
                                    </div>
                                </div>
                            </div>
                        )}
                    <label>Payment Method:</label>
                    {wallets.length ? (
                        <div>

                        </div>
                    ) : (
                            <Elements>
                                <AddMethodForm />
                            </Elements>
                        )}
                </div>
                <button onClick={props.handleClose}>Cancel</button>
            </section>
        </div>
    );
}

export default Checkout;