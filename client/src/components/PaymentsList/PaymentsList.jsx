import React from 'react';
import PaymentItem from '../PaymentItem/PaymentItem';

export default function PaymentList( { data, token } ) {

    return(
        <div className="list">
            {data.map(payment => {
                return <PaymentItem
                    key={payment.id}
                    id={payment.id}
                    dateSent={payment.dateSent}
                    status={payment.status}
                    milestone={payment.milestone}
                    paymentAmount={payment.paymentAmount}
                    
                />
            })}
        </div>
    )
}