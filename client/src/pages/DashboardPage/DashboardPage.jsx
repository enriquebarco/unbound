import React, { Component } from 'react';
import axios from "axios";
import Landing from '../../components/Landing/Landing';
import DashboardList from '../../components/DashboardList/DashboardList';
import PageHeader from '../../components/PageHeader/PageHeader';

const URL = process.env.REACT_APP_BASE_URL

export class DashboardPage extends Component {

    state = {
        teams: null,
        failedAuth: false,
    }
    
    componentDidMount() {
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
            <DashboardList data={this.state.teams} token={sessionStorage.getItem('token')} />
        </>
    );
  }
}

export default DashboardPage;
