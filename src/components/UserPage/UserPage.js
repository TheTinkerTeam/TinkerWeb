import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { callLogout } from '../../redux/requests/loginRequests'

const mapStateToProps = state => ({
  user: state.user,
});

class UserPage extends Component {

  logout = async () => {
    try {
      await callLogout()
      this.props.dispatch({type: 'UNSET_USER' });
      this.props.history.push('/home')
    } catch (error) {
      console.log(error);
      
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }!
          </h1>
          <p>Your ID is: {this.props.user.id}</p>
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

