import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

export default class App extends Component {
  render() {
    return (
      <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                          
                        </Route>
                        <Route path="/login">
                          <LoginPage />
                        </Route>
                        <Route path="/signup">
                          <SignupPage />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
    )
  }
}

