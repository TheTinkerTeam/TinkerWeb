import React from "react";
import { Menu, Button, Icon } from "semantic-ui-react";
import "./SignedOutMenu.css";

const SignedOutMenu = ({ signIn }) => {
  return (
    <Menu.Item position='right'>
      <Button
        onClick={signIn}
        content='Sign in'
        basic
        style={{ marginLeft: "0.5em" }}
        className='custom'
		id='signInButton'
      />
      <Button
        onClick={signIn}
        basic
        className='custom'
		icon labelPosition='right'
		id='getStartedButton'
      >
	  Get Started
	  <Icon name='angle right' />
	  </Button>
    </Menu.Item>
  );
};

export default SignedOutMenu;

{
  /* <Menu.Item
	name='Join Supertinker'
	active={activeItem === "Join Supertinker"}
	onClick={this.handleItemClick}
/>
<Menu.Item
	name='Sign in'
	active={activeItem === "Sign in"}
	onClick={this.handleItemClick}
/> */
}
