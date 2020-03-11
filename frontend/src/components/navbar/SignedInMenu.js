import React from "react";
import { Modal, Dropdown, Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { useFirebase } from "react-redux-firebase";

import avatar from "../../img/avatar.png";

import ProjectForm from "../forms/ProjectForm";

import { logout } from "../../actions/authActions";

const SignedInMenu = () => {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const auth = firebase.auth;

  return (
    <Menu.Item position="right">
      <Image
        avatar
        spaced="right"
        src={(auth.isAuth && auth.imageUrl) || avatar}
      />
      <Dropdown pointing="top right" text={auth.displayName}>
        <Dropdown.Menu>
          <Modal
            //loggedIn={loggedIn}
            //closeOnEscape={closeOnEscape}
            //closeOnDimmerClick={closeOnDimmerClick}
            //onClose={this.close}
            trigger={<Dropdown.Item text="Create a Project" icon="plus" />}
          >
            <ProjectForm />
          </Modal>
          <Dropdown.Item text="My Classes" icon="calendar" />
          <Dropdown.Item text="My Teams" icon="users" />
          <Dropdown.Item as={Link} to="/me" text="My Profile" icon="user" />
          <Dropdown.Item
            as={Link}
            to="/settings"
            text="Settings"
            icon="settings"
          />
          <Dropdown.Item
            onClick={() => dispatch(logout())}
            text="Log Out"
            icon="power"
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
