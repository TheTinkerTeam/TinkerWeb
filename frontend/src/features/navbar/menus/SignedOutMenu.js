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

class SignedOutMenu extends Component {
  state = {
    loggedIn: false,
  };

  // closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
  //   this.setState({ closeOnEscape, closeOnDimmerClick, loggedIn: true });
  // };

  close = () => this.setState({ loggedIn: true });

  render() {
    // const { loggedIn, closeOnEscape, closeOnDimmerClick } = this.state;
    const { signIn, handleFormSubmit, handleInputChange } = this.props;

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
                <Form onSubmit={() => {signIn(); this.close(); handleFormSubmit();}} autoComplete='off'>
                  <Form.Field>
                    <label>Username</label>
                    <input
                      name='username'
                      onChange={handleInputChange}
                      placeholder='Username'
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input
                      name='password'
                      onChange={handleInputChange}
                      placeholder='Password'
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>email</label>
                    <input
                      name='email'
                      onChange={handleInputChange}
                      placeholder='email'
                    />
                  </Form.Field>
                  <Button
                    positive
                    type='submit'
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
