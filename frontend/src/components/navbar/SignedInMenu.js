import React from "react";
import { Modal, Dropdown, Menu } from "semantic-ui-react";
import { Link, withRouter} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import ProjectForm from "../forms/ProjectForm";

import { logout } from "../../actions/authActions";
import AvatarImage from "./AvatarImage";

const SignedInMenu = (props) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.auth.profile);

  const handleLogout = () => {
    dispatch(logout());
    props.history.push('/');
  }

  return (
    <Menu.Item position='right'>
      {profile && <AvatarImage profile={profile}/>}
      <Dropdown pointing='top right' text={profile && profile.username}>
        <Dropdown.Menu>
          <Modal
            //loggedIn={loggedIn}
            //closeOnEscape={closeOnEscape}
            //closeOnDimmerClick={closeOnDimmerClick}
            //onClose={this.close}
            trigger={<Dropdown.Item text='Create a Project' icon='plus' />}
          >
            <ProjectForm />
          </Modal>
          <Dropdown.Item
            as={Link}
            to='/classes'
            text='My Classes'
            icon='calendar'
          />
          <Dropdown.Item text='My Teams' icon='users' />
          <Dropdown.Item as={Link} to='/me' text='My Profile' icon='user' />
          <Dropdown.Item
            as={Link}
            to='/settings'
            text='Settings'
            icon='settings'
          />
          <Dropdown.Item
            //onClick={() => dispatch(logout())}
            onClick={handleLogout}
            text='Log Out'
            icon='power'
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default withRouter(SignedInMenu);
