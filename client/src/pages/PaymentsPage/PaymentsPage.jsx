import React, { Component } from 'react';
import axios from "axios";
import Landing from '../../components/Landing/Landing';
import PageHeader from '../../components/PageHeader/PageHeader';
import PaymentListContainer from '../../components/PaymentListContainer/PaymentListContainer';
import "./PaymentsPage.scss";

const URL = process.env.REACT_APP_BASE_URL

export class PaymentsPage extends Component {

    state = {
        team: null,
        failedAuth: false,
    }
    
    componentDidMount() {
        const token = sessionStorage.getItem('token');

        if(!token) {
            this.setState( { failedAuth: true });
            return;
        }

        // get data from database
        axios.get(`${URL}/teams/${this.props.match.params.id}`, {
            headers: {
                Authorization: "Bearer " + token,
                teams_id: this.props.match.params.id,
            }
        })
        .then((response) => {
            this.setState({
                team: response.data
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

    if (!this.state.team) {
        return (
            <div>loading...</div>
        )
    }

    return(
        <main className="payments-page">
            <PageHeader />
            <PaymentListContainer data={this.state.team}/>
        </main>
    );
  }
}

export default PaymentsPage;
