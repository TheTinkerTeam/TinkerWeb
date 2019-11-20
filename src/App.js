import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux'
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import { callUser } from './redux/requests/userRequests';

import './styles/main.css';

const mapStateToProps = state => ({
  user: state.user,
});

class App extends React.Component {
  async componentDidMount() {
    try {
      const user = await callUser();
      if (user.id) {
        this.props.dispatch({
          type: 'SET_USER',
          user
        });
      }
    } catch (error) {
      this.props.dispatch({
        type: 'USER_FETCH_FAILED',
        message: error.data || "FORBIDDEN"
      })
    }

  }

  componentDidUpdate() {
    if (this.props.user.userName === null) {
      window.location.href = '/'
    }
  }

  render() {
    let content = (
      <div>
        <Header title="Tinker Web" />
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              path="/home"
              component={LoginPage}
            />
            <Route
              path="/register"
              component={RegisterPage}
            />
            {/* OTHERWISE (no path!) */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </Router>
      </div>
    ); // this handles not logged in

    if (this.props.user.userName) {
      content = (
        <div>
          <Header title="Tinker Web" />
          <Router>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route
                path="/home"
                component={LoginPage}
              />
              <Route
                path="/register"
                component={RegisterPage}
              />
              <Route
                path="/user"
                component={UserPage}
              />
              <Route
                path="/info"
                component={InfoPage}
              />
              {/* OTHERWISE (no path!) */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </Router>
        </div>
      )
    }

    return (
      <div>{ content }</div>
    )
  }
}

export default connect(mapStateToProps)(App);
