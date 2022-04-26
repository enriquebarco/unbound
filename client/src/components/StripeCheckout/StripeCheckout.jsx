import React from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { fetchFromAPI } from "../../helpers";
import axios from "axios";
import "./StripeCheckout.scss";
import Button from "../Button/Button.jsx";
import Logo from "../../assets/Logo/Logo Files/For Web/png/Color logo with background.png"

const url = process.env.REACT_APP_BASE_URL
const frontEndURL = process.env.REACT_APP_WEB_URL

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
        <div
        onClick={() => {
            axios.post(url + "/payments" , {
                dateSent: new Date().toISOString().slice(0, 10),
                status: "Processing",
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
            <Button />
        </div>
    ) 
}

export default StripeCheckout