import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";
import Landing from '../../components/Landing/Landing';
import PageHeader from '../../components/PageHeader/PageHeader';
import AddContractForm from '../../components/AddContractForm/AddContractForm';
import LoadingJoke from '../../components/LoadingJoke/LoadingJoke';

const URL = process.env.REACT_APP_BASE_URL

export class NewContractPage extends Component {

    state = {
        success: false,
        isContract: true,
        isLoading: false,
        failedAuth: false
    }
    
    componentDidMount() {
        document.title = "contracts - unbound"
        const token = sessionStorage.getItem('token');
    
        if(!token) {
            this.setState({ 

                failedAuth: true,

             });
            return;
        }
    }

    handleForm = (event) => {
        const token = sessionStorage.getItem("token");
        
        //Country Object
        const countryObject = JSON.parse(event.target.country.value);
        const countryName = countryObject.country;
        const latitude = parseFloat(countryObject.latitude);
        const longitude = parseFloat(countryObject.longitude);

        

        //Currency 
        const currency = JSON.parse(event.target.currency.value)

        console.log(countryName, latitude, longitude, currency);
        
        event.preventDefault();

        
        if (!event.target.name.value || !countryObject || !event.target.startDate.value || !event.target.terminationPeriod.value ||!event.target.jobTitle.value || !event.target.milestone.value || !event.target.milestoneDescription.value || !currency || !event.target.paymentAmount.value ) {
            
            const input = document.getElementsByClassName('contract-form__input')
            for (let i = 0; i < input.length; i++) {
                input[i].style.borderColor = "red";
            };

            return alert("Please enter the required fields")

        };
        
        this.setState({
            isLoading: true,
        });



        let body = {
            name: event.target.name.value,
            country: countryName,
            latitude: latitude,
            longitude: longitude,
            startDate: event.target.startDate.value,
            endDate: event.target.endDate.value || null,
            terminationPeriod: event.target.terminationPeriod.value,
            jobTitle: event.target.jobTitle.value,
            milestone: event.target.milestone.value,
            milestoneDescription: event.target.milestoneDescription.value,
            prefCurrency: currency,
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
                window.open(response.data, '_blank').focus();
                body.contract = response.data
                axios.post(URL + "/teams", body, {
                    headers: {
                        Authorization: "Bearer " + token,
                    }
                })
            })
            .then(() => {
                this.setState({success:true})
            })
            .catch((err) => console.log(err))
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
            <AddContractForm handleForm={this.handleForm}/>
            {this.state.isLoading && <LoadingJoke />}
            {this.state.success && <Redirect to="/" />}
        </>
    );
  }
}

export default NewContractPage;