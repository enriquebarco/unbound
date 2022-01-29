import React from 'react';
import Input from "../../components/Input/Input";
import Icon from "../../assets/Icons/contract.png"
import "./AddContractForm.scss";
import 'animate.css';

export default function AddContactForm( { handleForm } ) {
  return(
    <main className="add-contract__container">
        <form className="add-contract__form animate__animated" onSubmit={handleForm}>
            <h1 className="add-contract__title">Create a new contract</h1>

            <div className="add-contract__column add-contract__column--primary ">
              <Input type="text" name="name" label="Full name" />
              <Input type="text" name="country" label="Country" />
              <Input type="date" name="startDate" label="Start Date" />
              <Input type="date" name="endDate" label="End Date (optional)" />
              <Input type="number" name="terminationPeriod" label="Termination Period (days)" />
            </div>

            <div className="add-contract__column">
              <Input type="text" name="jobTitle" label="Job Title" />
              <Input type="text" name="milestone" label="Milestone" />
              <Input type="text" name="milestoneDescription" label="Milestone Description" />
              <Input type="text" name="prefCurrency" label="Preferred Currency" />
              <Input type="text" name="paymentAmount" label="Payment Amount ($US)" />
            </div>

            <div className="add-contract__submit-wrapper">
              <img src={Icon} alt="" className="add-contract__icon" />
              <button className="add-contract__button">Create Contract</button>
              <img src={Icon} alt="" className="add-contract__icon" />
            </div>
        </form>
    </main>
  )
}
