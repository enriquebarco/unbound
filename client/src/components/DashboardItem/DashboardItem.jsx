import React from 'react';
import StripeCheckout from '../StripeCheckout/StripeCheckout';
import Icon from "../../assets/Icons/contract.png";
import "./DashboardItem.scss"

export default function DashboardItem( { id, name, country, jobTitle, contract, prefCurrency, paymentAmount, milestone, token } ) {
  return(
      <div className="dashboard-item">
        <div className="dashboard-item__container">
            <h3 className="dashboard-item__text">{name}</h3>
        </div>
        <div className="dashboard-item__container">
            <h3 className="dashboard-item__text">{jobTitle}</h3>
        </div>
        <div className="dashboard-item__container">
            <h3 className="dashboard-item__text">{country}</h3>
        </div>
        <div className="dashboard-item__container">
            <a target="_blank" href={contract} className="dashboard-item__link">
                <img src={Icon} alt="contract icon" className="dashboard-item__icon" />
            </a>
        </div>
        <div className="dashboard-item__container">
            <h3 className="dashboard-item__text">{prefCurrency}</h3>
        </div>
        <div className="dashboard-item__container">
            <h3 className="dashboard-item__text">${paymentAmount.toLocaleString("en-US")}</h3>
        </div>
        <StripeCheckout 
            paymentAmount={paymentAmount}
            name={name}
            milestone={milestone}
            token={token}
            id={id}
        />
      </div>
  )
}
