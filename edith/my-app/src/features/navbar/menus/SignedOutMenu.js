import React from "react";
import { Menu, Button } from "semantic-ui-react";
import './SignedOutMenu.css';

const SignedOutMenu = ({ signIn }) => {
  return (
    <Menu.Item position='right'>
      <Button
        onClick={signIn}
        content='Join SuperTinker'
        basic
        id='joinSuperTinkerButton'
		className='custom'
      />
      <Button
        onClick={signIn}
        content='Sign in'
        basic
        style={{ marginLeft: "0.5em" }}
        id='signInButton'
		className='custom'
      />
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
