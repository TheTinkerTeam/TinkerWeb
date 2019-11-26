import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { callLogin } from '../../redux/requests/loginRequests'
import { callUser } from '../../redux/requests/userRequests'

const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }


  login = async (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch({
        type: 'INPUT_ERROR',
        payload: 'Enter your username and password!'
      });
    } else {
      await this.props.dispatch({ type: 'CLEAR_LOGIN_ERROR' })
      await this.props.dispatch({ type: 'REQUEST_START' })
      let res = await callLogin({
        username: this.state.username,
        password: this.state.password
      })
      await this.props.dispatch({ type: 'REQUEST_DONE' })
      if (res = 200) {
        const user = await callUser()
        await this.props.dispatch({ type: 'SET_USER', user })
        this.props.history.push('/home');
      }
      else {
        this.props.dispatch({
          type: 'INPUT_ERROR',
          payload: 'Failed to find user.'
        });
      }
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.props.login.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div>
        {this.renderAlert()}
        <form onSubmit={this.login}>
          <h1>Login</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <input
              type="submit"
              name="submit"
              value="Log In"
            />
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginPage);
