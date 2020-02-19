import React from "react";
import { Menu, Button, Icon, Modal, Image, Header } from "semantic-ui-react";
import "./SignedOutMenu.css";
import { Link } from "react-router-dom";
import { Component } from "react";

class SignedOutMenu extends Component {
  state = { open: false };

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };

  close = () => this.setState({ open: false });

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;
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
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
          trigger={
            <Button
              onClick={this.closeConfigShow(true, false)}
              as={Link}
              to='/signin'
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
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size='medium'
              src='https://www.antgibbz.com/wp-content/uploads/2016/05/person-placeholder-200x200.jpg'
            />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
            <Modal.Actions>
              <Button onClick={this.close} as={Link} to='/' negative>
                No
              </Button>
              <Button
                onClick={() => {
                  this.close();
                  signIn();
                }}
                as={Link}
                to='/'
                positive
                labelPosition='right'
                icon='checkmark'
                content='Yes'
              />
            </Modal.Actions>
          </Modal.Content>
        </Modal>
      </Menu.Item>
    );
  }
}

export default SignedOutMenu;
