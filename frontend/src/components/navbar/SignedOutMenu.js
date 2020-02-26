import React from "react";
import { useState } from "react";
import {
  Menu,
  Button,
  Icon,
  Modal,
  Header,
  Segment,
  Form,
  Transition
} from "semantic-ui-react";
import { connect } from "react-redux";

import "../../css/SignedOutMenu.css";
import { login } from "../../actions/authActions";
import AuthForm from "../forms/AuthForm";
import Alert from "../services/Alert";

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
        <Modal.Content>
          <AuthForm />
        </Modal.Content>
        <Alert />
      </Modal>
    </Menu.Item>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedOutMenu);
