import React from "react";
import { Menu, Button, Icon, Modal } from "semantic-ui-react";

import "../../css/SignedOutMenu.css";
import AuthForm from "../forms/AuthForm";
// import Alert from "../services/Alert";

const SignedOutMenu = () => {
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
        <AuthForm />
      </Modal>
    </Menu.Item>
  );
};

export default SignedOutMenu;
