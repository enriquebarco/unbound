import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import axios from "axios";
import Logo from "../../assets/Logo/Logo Files/For Web/svg/Color logo - no background.svg"
import 'animate.css';
import "./LoginPage.scss"

const URL = process.env.REACT_APP_BASE_URL

export class LoginPage extends Component {
    state = {
        error: "",
        success: false,
    }

    componentDidMount() {
        document.title= "login - unbound"
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post(`${URL}/users/login`, {
                email: event.target.email.value,
                password: event.target.password.value
            })
            .then((response) => {
                sessionStorage.setItem("token", response.data.token);
                this.setState({ success: true });
            })
            .catch((error) => {
                this.setState({ error: error.response.data });
            });
    };


  render() {
    return( 
        <main className="login-page">
            <Link to="/" >
                <img src={Logo} alt="" className="login-page__logo animate__animated animate__fadeIn" />
            </Link>
        <form className="login animate__animated animate__fadeIn" onSubmit={this.handleSubmit}>
            <h2 className="login__title">Log in</h2>

            <Input type="text" name="email" label="Email" />
            <Input type="password" name="password" label="Password" />
        
            <button className="login__button">Log in</button>

            {this.state.error && <div className="login__message">{this.state.error}</div>}
            {this.state.success && <Redirect to="/" />}
        </form>
        <p className="login-page__text">
            Need an account? <Link to="/signup" className="login-page__link animate__animated animate__fadeIn">Sign up</Link>
        </p>
    </main>
    );
  }
}

export default LoginPage;
