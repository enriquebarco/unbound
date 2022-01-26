import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NewContractPage from './pages/NewContractPage/NewContractPage';
import PaymentsPage from './pages/PaymentsPage/PaymentsPage';
import SignupPage from './pages/SignupPage/SignupPage';

export default class App extends Component {
  render() {
    return (
      <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={DashboardPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/signup" component={SignupPage} />
                        <Route path="/contract" component={NewContractPage} />
                        <Route path="/payments/:id" component={PaymentsPage} />
                    </Switch>
                </BrowserRouter>
            </div>
    )
  }
}

