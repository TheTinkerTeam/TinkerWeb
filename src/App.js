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

import StudentUserPage from './components/User-Student/StudentUser'
import StudentInfoPage from './components/User-Student/StudentInfo'

import AdminUserPage from './components/User-Admin/AdminUser'
import AdminInfoPage from './components/User-Admin/AdminInfo'

import TeacherUserPage from './components/User-Teacher/TeacherUser'
import TeacherInfoPage from './components/User-Teacher/TeacherInfo'

import { callUser } from './redux/requests/userRequests';

import './styles/main.css';

const mapStateToProps = state => ({
  user: state.user,
});

class App extends React.Component {
  async componentDidMount() {
    try {
      const user = await callUser();
      console.log(user);
      
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
    console.log(this.props.user);
    
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

    if (this.props.user.userType === 1) {
      content = (
        <div>
          <Header title="Tinker Web" />
          <Router>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route
                path="/user"
                component={StudentUserPage}
              />
              <Route
                path="/info"
                component={StudentInfoPage}
              />
              {/* OTHERWISE (no path!) */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </Router>
        </div>
      )
    }
    else if (this.props.user.userType === 2) {
      content = (
        <div>
          <Header title="Tinker Web" />
          <Router>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route
                path="/user"
                component={TeacherUserPage}
              />
              <Route
<<<<<<< HEAD
=======
                path="/info"
                component={TeacherInfoPage}
              />
              {/* OTHERWISE (no path!) */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </Router>
        </div>
      )
    }
    else if (this.props.user.userType === 3) {
      content = (
        <div>
          <Header title="Tinker Web" />
          <Router>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route
>>>>>>> f69965eca92a49129dc6a81fbfbc0ce3faf152f7
                path="/user"
                component={AdminUserPage}
              />
              <Route
                path="/info"
                component={AdminInfoPage}
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
