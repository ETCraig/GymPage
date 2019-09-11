import React, { useContext, useEffect, useState } from 'react';

import '../styles/Checkout.css';
import StoreContext from '../../context/store/storeContext';

const Checkout = (props) => {
    const storeContext = useContext(StoreContext);

    const { getMethods } = storeContext;

    useEffect(() => {
        getMethods();
    }, []);

    // if(props.show) {
    //     getMethods();
    // }

    const showHideClassname = props.show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassname}>
            <section className="modal-main">
                <button onClick={props.handleClose}>Cancel</button>
            </section>
        </div>
    );
}

export default Checkout;