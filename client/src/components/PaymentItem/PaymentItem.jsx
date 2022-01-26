import React from 'react';
import "./PaymentItem.scss"

export default function PaymentItem( { dateSent, status, milestone, paymentAmount,  } ) {
  return(
      <div className="payment-item">
        <div className="payment-item__container">
            <h3 className="payment-item__text">{milestone}</h3>
        </div>
        <div className="payment-item__container">
            <h3 className="payment-item__text">${paymentAmount.toLocaleString("en-US")}</h3>
        </div>
        <div className="payment-item__container">
            <h3 className="payment-item__text">{dateSent}</h3>
        </div>
        <div className="payment-item__container">
            <h3 className="payment-item__text">{status}</h3>
        </div>
      </div>
  )
}
