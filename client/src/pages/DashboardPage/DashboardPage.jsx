import React, { Component } from 'react';
import axios from "axios";
import Landing from '../../components/Landing/Landing';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import PageHero from '../../components/PageHero/PageHero';
import DashboardListContainer from '../../components/DashboardListContainer/DashboardListContainer';

const URL = process.env.REACT_APP_BASE_URL

export class DashboardPage extends Component {

    state = {
        currentUser: null,
        teams: null,
        failedAuth: false,
    }
    
    componentDidMount() {
        document.title = "dashboard - unbound"
        const token = sessionStorage.getItem("token");

        if(!token) {
            this.setState( { failedAuth: true });
            return;
        }

        // get data from database
        axios.get(`${URL}/teams`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then((response) => {
            this.setState({
                teams: response.data
            })
        })
        .catch(() => {
            this.setState({ failedAuth: true })
        });

        axios.get(`${URL}/users/current`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then ((response) => {
            this.setState({
                currentUser: response.data
            })
        })
    }

  render() {
      if (this.state.failedAuth) {
          return (
              <Landing />
          )
      }

    if (!this.state.teams || !this.state.currentUser) {
        return (
            <div>loading...</div>
        )
    }

    return(
        <>
            <PageHeader />
            <PageHero currentUser={this.state.currentUser} />
            <DashboardListContainer 
                data={this.state.teams} 
                token={sessionStorage.getItem('token')} />
            <PageFooter />
        </>
    );
  }
}

export default DashboardPage;
