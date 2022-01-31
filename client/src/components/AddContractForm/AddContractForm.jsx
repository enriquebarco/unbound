import React from 'react';
import Input from "../../components/Input/Input";
import Icon from "../../assets/Icons/contract.png"
import "./AddContractForm.scss";
import 'animate.css';
import uniqid from "uniqid";
import countriesData from "../../data/countries.json";

export default function AddContactForm( { handleForm } ) {
  return(
    <main className="add-contract__container">
        <form className="add-contract__form animate__animated animate__fadeIn" onSubmit={handleForm}>
            <h1 className="add-contract__title">Create a new contract</h1>

            <div className="add-contract__column add-contract__column--primary ">
              <Input type="text" name="name" label="Full name" />
              <div className="input">
                <label htmlFor="country" className="input__label">
                  Country
                </label>
                <select name="country" id="country" className="input__text" >
                          {countriesData.map((country) => {
                              return(
                                  <option key={uniqid()} value={JSON.stringify(country)} >
                                      {country.country}
                                  </option>
                              )
                          })}
                </select>

              </div>
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
