import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./index.scss";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)


ReactDOM.render(
    <Elements stripe={stripePromise}>
      <App />
    </Elements>,
  document.getElementById('root')
);

