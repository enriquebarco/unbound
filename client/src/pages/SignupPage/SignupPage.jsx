import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Input from '../../components/Input/Input';

export default class SignupPage extends Component {
    state = {

    }
  render() {
    return(
        <main className="signup-page">
            <form className="signup">
                <h1 className="signup__title">Sign up</h1>

                <Input type="text" name="name" label="Full name" />
                <Input type="text" name="business" label="Business Name" />
                <Input type="text" name="country" label="Country" />
                <Input type="text" name="email" label="Email" />
                <Input type="password" name="password" label="Password" />

                <button className="signup__button">Sign up</button>

                {this.state.success && <div className="signup__message">Signed up!</div>}
                {this.state.error && <div className="signup__message">{this.state.error}</div>}
                </form>
                <p>
                {/* Have an account? <Link to="/login">Log in</Link> */}
                </p>
        </main>
    )
  }
}
