import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import avatar from 'src/img/avatar.png';

const SignedInMenu = ({signOut}) => {
	return (
		    <Menu.Item position="right">
			  <Image avatar spaced="right" src={avatar} />
			  <Dropdown pointing="top right" text="Username">
				<Dropdown.Menu>
				  <Dropdown.Item text="Create a Project" icon="plus" />
				  <Dropdown.Item text="My Classes" icon="calendar" />
				  <Dropdown.Item text="My Teams" icon="users" />
				  <Dropdown.Item text="My Profile" icon="user" />
				  <Dropdown.Item as={Link} to='/settings' text="Settings" icon="settings" />
				  <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
				</Dropdown.Menu>
			  </Dropdown>
			</Menu.Item>
	)
}

export default SignedInMenu;
