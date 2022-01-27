import React from 'react';
import Input from "../../components/Input/Input";

export default function AddContactForm( { handleForm } ) {
  return(
    <main className="add-contract__container">
        <form className="add-contract__form" onSubmit={handleForm}>
            <h1 className="signup__title">Create a new contract</h1>

            <Input type="text" name="name" label="Full name" />
            <Input type="text" name="country" label="Country" />
            <Input type="date" name="startDate" label="Start Date" />
            <Input type="date" name="endDate" label="End Date" />
            <Input type="number" name="terminationPeriod" label="Termination Period" />
            <Input type="text" name="jobTitle" label="Job Title" />
            <Input type="text" name="milestone" label="Milestone" />
            <Input type="text" name="milestoneDescription" label="Milestone Description" />
            <Input type="text" name="prefCurrency" label="Preferred Currency" />
            <Input type="text" name="paymentAmount" label="Payment Amount" />

            <button className="add-contract__button">Create Contract</button>
        </form>
    </main>
  )
}
