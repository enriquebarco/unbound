import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from "axios"
import Input from '../../components/Input/Input';
import Logo from "../../assets/Logo/Logo Files/For Web/svg/Color logo - no background.svg"
import "./SignupPage.scss";
import 'animate.css';


const URL = process.env.REACT_APP_BASE_URL;

export default class SignupPage extends Component {
    state = {
        error: "",
        success: false,
    };

    componentDidMount() {
        document.title = "Signup - unbound"
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(!event.target.email.value || !event.target.password.value || !event.target.business.value || !event.target.country.value) {
            const input = document.getElementsByTagName('input');
            for (let i = 0; i < input.length; i++) {
            input[i].style.borderColor = "red";
            }
            
            if (!event.target.email.value.match(validRegexEmail)) {
                return alert("Please enter valid email: example@email.com");
            } 
        }


        axios
            .post(`${URL}/users/register`, {
                email: event.target.email.value,
                password: event.target.password.value,
                businessName: event.target.business.value,
                country: event.target.country.value,
            })
            .then(() => {
                this.setState({ success: true, error: "" });
                event.target.reset();
            })
            .catch((error) => {
                this.setState({ success: false, error: error.response.data });
            });
    };


  render() {
    return(
        <main className="signup-page ">
            <img src={Logo} alt="" className="signup-page__logo animate__animated animate__fadeIn" />
            <form className="signup animate__animated animate__fadeIn" onSubmit={this.handleSubmit}>
                <h1 className="signup__title">Sign up</h1>

                <Input type="text" name="business" label="Business Name" />
                <Input type="text" name="country" label="Country" />
                <Input type="text" name="email" label="Email" />
                <Input type="password" name="password" label="Password" />

                <button className="signup__button">Sign up</button>

                {this.state.success && <div className="signup__message">Signed up!</div>}
                {this.state.success && <Redirect to="/login" />}
                {this.state.error && <div className="signup__message">{this.state.error}</div>}
                </form>
                <p className="signup-page__text animate__animated animate__fadeIn">
                Have an account? <Link to="/login" className="signup-page__link">Log in</Link>
                </p>
        </main>
    )
  }
}
