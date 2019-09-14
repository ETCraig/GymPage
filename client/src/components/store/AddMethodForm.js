import React from 'react'

import {
    injectStripe,
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    PostalCodeElement
} from 'react-stripe-elements';

const AddMethodForm = (props) => {

const handleSubscribe = e => {
        e.preventDefault();
        console.log('HIT')
        if (props.stripe) {
            props.stripe.createToken().then(payload => {
                
            })
        } else {
            console.log('Stripe.js has not loaded.');
        }
    }

    return (
        <div>
            <form>
                <label>Card Number</label>
                <CardNumberElement />
                <label>Expiration Date</label>
                <CardExpiryElement />
                <label>CVC</label>
                <CardCVCElement />
                <label>Postal Code</label>
                <PostalCodeElement />
                <button className="mt-2 btn btn-block">Continue</button>
            </form>
        </div>
    )
}

export default injectStripe(AddMethodForm)
