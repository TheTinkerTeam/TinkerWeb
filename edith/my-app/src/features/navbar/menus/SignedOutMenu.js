import React from "react";
import {
  Menu,
  Button,
  Icon,
  Modal,
  Header,
  Segment,
  Form
} from "semantic-ui-react";
import "./SignedOutMenu.css";
import { Component } from "react";
import cuid from "cuid";

class SignedOutMenu extends Component {
  state = {
    loggedIn: false,
    user: {
      id: "",
      username: "",
      password: "",
      email: ""
    }
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    window.scrollTo(0, 0);
    console.log(this.state);
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        id: cuid()
      }
    }));
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
    console.log(this.state);
  };

  // closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
  //   this.setState({ closeOnEscape, closeOnDimmerClick, loggedIn: true });
  // };

  close = () => this.setState({ loggedIn: false });

  render() {
    // const { loggedIn, closeOnEscape, closeOnDimmerClick } = this.state;
    const { user } = this.state;
    const { signIn } = this.props;

    return (
      <Menu.Item position='right'>
        {/* <Button
        onClick={signIn}
        content='Sign in'
        basic
        style={{ marginLeft: "0.5em" }}
        className='custom'
        id='signInButton'
      /> */}
        <Modal
          //loggedIn={loggedIn}
          //closeOnEscape={closeOnEscape}
          //closeOnDimmerClick={closeOnDimmerClick}
          //onClose={this.close}
          trigger={
            <Button
              //onClick={this.closeConfigShow(true, false)}
              basic
              className='custom'
              icon
              labelPosition='right'
              id='getStartedButton'
            >
              Get Started
              <Icon name='angle right' />
            </Button>
          }
        >
          <Modal.Header>Super Humanics</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Hello!</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <Segment>
                <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
                  <Form.Field>
                    <label>Username</label>
                    <input
                      name='username'
                      onChange={this.handleInputChange}
                      value={user.username}
                      placeholder='Username'
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input
                      name='password'
                      onChange={this.handleInputChange}
                      value={user.password}
                      placeholder='Password'
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>email</label>
                    <input
                      name='email'
                      onChange={this.handleInputChange}
                      value={user.email}
                      placeholder='email'
                    />
                  </Form.Field>
                  <Button
                    positive
                    type='submit'
                    onClick={() => {
                      signIn();
                      this.close();
                    }}
                  >
                    Sign In
                  </Button>
                </Form>
              </Segment>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Menu.Item>
    );
  }
}

export default SignedOutMenu;
