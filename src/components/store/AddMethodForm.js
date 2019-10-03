import React from 'react'

import {
    injectStripe,
    CardElement
} from 'react-stripe-elements';

const AddMethodForm = (props) => {

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