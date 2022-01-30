import React, { Component } from 'react';
import Landing from '../../components/Landing/Landing';
import axios from "axios";
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PageHeader from "../../components/PageHeader/PageHeader";

const URL = process.env.REACT_APP_BASE_URL;


export class ProfilePage extends Component {

    state = {
        currentUser: null,
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
        axios.get(`${URL}/users/current`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then((response) => {
            this.setState({
                currentUser: response.data
            })
        })
        .catch(() => {
            this.setState({ failedAuth: true })
        });
    }

    handleLogout = () => {
        sessionStorage.removeItem("token");
        this.setState({
            currentUser: null,
            failedAuth: true
        })
    };


  render() {

    if (this.state.failedAuth) {
        return (
            <Landing />
        )
    }

  if (!this.state.currentUser) {
      return (
          <div>loading...</div>
      )
  }

    return (
        <main className="profile-page">
            <PageHeader />
            <ProfileCard 
                businessName={this.state.currentUser.businessName}
                country={this.state.currentUser.country}
                email={this.state.currentUser.email}
                handleLogout={this.handleLogout}
            />
      </main>
    )
  }
}

export default ProfilePage;
