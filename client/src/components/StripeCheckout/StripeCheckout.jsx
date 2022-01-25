import React from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { fetchFromAPI } from "../../helpers";

const StripeCheckout = ( { paymentAmount, name, milestone, token }) => {

    const stripe = useStripe();
    const handlePayment = async (event) => {
        event.preventDefault();
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
        }, token);


        
        const { sessionId } = response;
        const { error } = await stripe.redirectToCheckout({
            sessionId
        });
        debugger;

        if(error) {
            alert(error)
        }
    }
    
    return (
        <button onClick={handlePayment} type="submit" className="stripe-checkout-button">
            Send Payment
        </button>
    ) 
}

export default StripeCheckout