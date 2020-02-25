import React from "react";
import { useState } from "react";
import {
  Menu,
  Button,
  Icon,
  Modal,
  Header,
  Segment,
  Form
} from "semantic-ui-react";
import { connect } from "react-redux";

import "../../css/SignedOutMenu.css";
import { login } from "../../actions/authActions";

const SignedOutMenu = ({ login }) => {
  /*
  state = {
    loggedIn: false
  };
*/
  // closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
  //   this.setState({ closeOnEscape, closeOnDimmerClick, loggedIn: true });
  // };

  //  const close = () => this.setState({ loggedIn: true });

  // const { loggedIn, closeOnEscape, closeOnDimmerClick } = this.state;

  //    const { signIn, handleFormSubmit, handleInputChange } = this.props;

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const { username, password } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    login(formData);
  };

  return (
    <Menu.Item position="right">
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
            className="custom"
            icon
            labelPosition="right"
            id="getStartedButton"
          >
            Get Started
            <Icon name="angle right" />
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
              <Form
                onSubmit={e => {
                  // signIn();
                  // close();
                  handleFormSubmit(e);
                }}
                autoComplete="off"
              >
                <Form.Field>
                  <label>Username</label>
                  <input
                    name="username"
                    onChange={e => onChange(e)}
                    value={username}
                    placeholder="Username or Email"
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    name="password"
                    onChange={e => onChange(e)}
                    value={password}
                    placeholder="Password"
                    required
                  />
                </Form.Field>
                <Button positive type="submit">
                  Sign In
                </Button>
              </Form>
            </Segment>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Menu.Item>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedOutMenu);
