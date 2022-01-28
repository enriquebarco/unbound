import React from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { fetchFromAPI } from "../../helpers";
import axios from "axios";
import "./StripeCheckout.scss";

const url = process.env.REACT_APP_BASE_URL

const StripeCheckout = ( { id, paymentAmount, name, milestone, token }) => {
const stripe = useStripe();


    const handlePayment = async () => {
        const line_items = [{
            quantity: 1,
            price_data: {
                currency: "usd",
                unit_amount: paymentAmount * 100, //amount is in cents
                product_data: {
                    name,
                    description: milestone,
                }
            }
        }];
        
        
        const response = await fetchFromAPI("create-checkout-session", {
            body: { line_items },
        }, token, id);


        
        const { sessionId } = response;

        const { error } = await stripe.redirectToCheckout({
            sessionId
        });

        if(error) {
            console.log(error)
        }

    }
    
    return (
        <button 
        onClick={() => {
            axios.post(url + "/payments" , {
                dateSent: new Date().toISOString().slice(0, 10),
                status: "Received",
                milestone: milestone,
                paymentAmount: paymentAmount,
                teams_id: id,
            })
            .then((response) => console.log(response))
            .then(() => handlePayment())
            .catch((err) => console.log(err));
        }} 
        type="submit" 
        className="stripe-checkout-button">
            Send Payment
        </button>
    ) 
}

export default StripeCheckout