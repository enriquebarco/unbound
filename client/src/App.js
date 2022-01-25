import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

export default class App extends Component {
  render() {
    return (
      <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={DashboardPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/signup" component={SignupPage} />
                        <Route path="/payment" component={CheckoutPage} />
                    </Switch>
                </BrowserRouter>
            </div>
    )
  }
}

