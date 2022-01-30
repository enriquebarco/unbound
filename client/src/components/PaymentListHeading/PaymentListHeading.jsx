import React from 'react';
import "./PaymentListHeading.scss";

export default function PaymentListHeading() {
  return (
        <div className="payment-heading">
            <h3 className="payment-heading__title">Milestone</h3>
            <h3 className="payment-heading__title">Payment Amount</h3>
            <h3 className="payment-heading__title">Date of Payment</h3>
            <h3 className="payment-heading__title">Status</h3>
        </div>
    );
}
