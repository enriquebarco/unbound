import React from 'react';
import PaymentListHeading from '../PaymentListHeading/PaymentListHeading';
import PaymentList from "../PaymentsList/PaymentsList";
import TeamProfile from '../TeamProfile/TeamProfile';
import "./PaymentListContainer.scss";

export default function PaymentListContainer( { data } ) {
  return (
        <main className="payment-container">
            <TeamProfile data={data} />
            <div className="payment-container__list">
            <PaymentListHeading />
            <PaymentList data={data} />
            </div>
        </main>
    )
}
