import React from 'react'

import {
    injectStripe,
    CardElement,
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
                {/* Will Be Expanded in Future */}
                <CardElement />
                <button className="mt-2 btn btn-block">Continue</button>
            </form>
        </div>
    )
}

export default injectStripe(AddMethodForm)