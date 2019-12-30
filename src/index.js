import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StripeProvider } from 'react-stripe-elements';

ReactDOM.render(
<StripeProvider apiKey='pk_test_kPuqN3JaLiSE9ukURyhMzCWY00ZE77NxF6'>
    <App />
</StripeProvider>
, document.getElementById('root'));