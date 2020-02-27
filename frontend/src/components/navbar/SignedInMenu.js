import React from "react";
import { Modal, Dropdown, Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../actions/authActions";

import avatar from "../../img/avatar.png";

import ProjectForm from "../forms/ProjectForm";

import { createProject } from "../../actions/projectActions";

const SignedInMenu = ({ logout, createProject }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={avatar} />
      <Dropdown pointing="top right" text="Username">
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
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item
            as={Link}
            to="/settings"
            text="Settings"
            icon="settings"
          />
          <Dropdown.Item onClick={logout} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

const mapDispatchToProps = {
  logout
};

export default connect(null, mapDispatchToProps)(SignedInMenu);
