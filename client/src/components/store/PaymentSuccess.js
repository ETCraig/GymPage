import React from 'react';

import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-3">Thank You!</h1>
            <p className="lead"><strong className={{ bold: "9" }}>Your order was successful</strong> for further information on your purchase please review or receipt or navigate to your profile orders page.</p>
            <hr />
            <p>View your <a href="">Receipt</a></p>
            <p className="lead">
                <Link to="/" className="btn btn-primary btn-sm" role="button">Continue to Home Feed</Link>
            </p>
        </div>
    );
}

export default PaymentSuccess;