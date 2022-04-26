import React from 'react';
import "./DashboardListHeading.scss";

export default function DashboardListHeading() {
  return (
        <div className="list-heading">
            <h3 className="list-heading__title">Full Name</h3>
            <h3 className="list-heading__title">Job Title</h3>
            <h3 className="list-heading__title">Country of Residence</h3>
            <h3 className="list-heading__title">Contract</h3>
            <h3 className="list-heading__title">Preferred Currency</h3>
            <h3 className="list-heading__title">Payment Amount</h3>
            <h3 className="list-heading__title">Send Payment</h3>
        </div>
    );
}
