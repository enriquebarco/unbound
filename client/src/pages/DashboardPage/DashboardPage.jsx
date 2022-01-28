import React, { Component } from 'react';
import axios from "axios";
import Landing from '../../components/Landing/Landing';
import DashboardList from '../../components/DashboardList/DashboardList';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import PageHero from '../../components/PageHero/PageHero';

const URL = process.env.REACT_APP_BASE_URL

export class DashboardPage extends Component {

    state = {
        teams: null,
        failedAuth: false,
    }
    
    componentDidMount() {
        document.title = "Dashboard"
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
    }

  render() {
      if (this.state.failedAuth) {
          return (
              <Landing />
          )
      }

    if (!this.state.teams) {
        return (
            <div>loading...</div>
        )
    }

    return(
        <>
            <PageHeader />
            <PageHero />
            <DashboardList data={this.state.teams} token={sessionStorage.getItem('token')} />
            <PageFooter />
        </>
    );
  }
}

export default DashboardPage;
