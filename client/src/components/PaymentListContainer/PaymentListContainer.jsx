import React from 'react';
import PaymentListHeading from '../PaymentListHeading/PaymentListHeading';
import PaymentList from "../PaymentsList/PaymentsList";
import "./PaymentListContainer.scss";

export default function PaymentListContainer( { data } ) {
  return (
        <main className="payment-container">
            <PaymentListHeading />
            <PaymentList data={data} />
        </main>
    )
}
