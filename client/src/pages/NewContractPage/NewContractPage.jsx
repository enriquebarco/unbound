import React, { Component } from 'react';
import axios from "axios";
import Landing from '../../components/Landing/Landing';
import PageHeader from '../../components/PageHeader/PageHeader';
import AddContactForm from '../../components/AddContactForm/AddContactForm';

const URL = process.env.REACT_APP_BASE_URL

export class NewContractPage extends Component {

    state = {
        loading: false,
        failedAuth: false
    }

    handleForm = (event) => {
        const token = sessionStorage.getItem("token");
        
        event.preventDefault();

        
        if (!event.target.name.value || !event.target.country.value || !event.target.startDate.value || !event.target.terminationPeriod.value ||!event.target.jobTitle.value || !event.target.milestone.value || !event.target.milestoneDescription.value || !event.target.prefCurrency.value || !event.target.paymentAmount.value ) {
            
            const input = document.getElementsByClassName('contract-form__input')
            for (let i = 0; i < input.length; i++) {
                input[i].style.borderColor = "red";
            };
            
            const span = document.getElementsByTagName('span');
            for (let i = 0; i<span.length; i++) {
                console.log(span[i])
                span[i].classList.remove("form-valid");
                span[i].classList.add("form-error")
            }
            return alert("Please fill in all values."); 
        };
        
        this.setState({
            loading: true,
        });

        let body = {
            name: event.target.name.value,
            country: event.target.country.value,
            startDate: event.target.startDate.value,
            endDate: event.target.endDate.value,
            terminationPeriod: event.target.terminationPeriod.value,
            jobTitle: event.target.jobTitle.value,
            milestone: event.target.milestone.value,
            milestoneDescription: event.target.milestoneDescription.value,
            prefCurrency: event.target.prefCurrency.value,
            paymentAmount: event.target.paymentAmount.value,
        }

        axios.post(URL + "/contracts/data", body, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
            .then(() => {
                return axios.get(URL + "/contracts")
            })
            .then((response) => {
                window.open(response.data, '_blank').focus()
                body.contract = response.data
                console.log(body);
                axios.post(URL + "/teams", body, {
                    headers: {
                        Authorization: "Bearer " + token,
                    }
                })
            })
            .catch((err) => console.log(err))
    }
    
    componentDidMount() {
        const token = sessionStorage.getItem('token');

        if(!token) {
            this.setState({ failedAuth: true });
            return;
        }
    }
        
  render() {
      if (this.state.failedAuth) {
          return (
              <Landing />
          )
      }

    return(
        <>
            <PageHeader />
            <AddContactForm handleForm={this.handleForm}/>
        </>
    );
  }
}

export default NewContractPage;