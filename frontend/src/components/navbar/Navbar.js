import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Menu,
  Input,
  Responsive,
  Button,
  Sidebar,
  Icon,
  Image,
  Segment,
  Header
} from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import logo from "../../img/SHlogo.png";
import SignedOutMenu from "../navbar/SignedOutMenu";
import SignedInMenu from "../navbar/SignedInMenu";
import { toggleVisibility } from "../../actions/sidebarActions";

const NavBar = ({ auth, toggleVisibility }) => {
  return (
    <div>
      <Menu pointing secondary fixed='top'>
        <Menu.Item>
          <Responsive
            {...Responsive.onlyMobile}
            as={Button}
            icon='bars'
            size='big'
            onClick={toggleVisibility}
          />
          <Responsive
            {...Responsive.onlyTablet}
            as={Button}
            icon='bars'
            size='big'
            onClick={toggleVisibility}
          />
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Image
              style={{ width: "7em" }}
              as={NavLink}
              exact
              to='/'
              src={logo}
              alt='SHlogo'
              id='navlogo'
            />
          </Responsive>
        </Menu.Item>
        <Responsive minWidth={1024}>
          <Menu.Item
            style={{ marginTop: "0.6em" }}
            as={NavLink}
            to='/projects'
            name='Projects'
          />
        </Responsive>
        {/* <Responsive minWidth={1024}>
          <Menu.Item
            style={{ marginTop: "0.6em" }}
            as={NavLink}
            to='/tutorials'
            name='Tutorials'
          />
        </Responsive> */}
        <Responsive minWidth={1024}>
          <Menu.Item
            style={{ marginTop: "0.6em", whiteSpace: "nowrap" }}
            as={NavLink}
            to='/tinkercart'
            name='TinkerCart'
          />
        </Responsive>
        <Responsive minWidth={1024}>
          <Menu.Item
            style={{ marginTop: "0.6em" }}
            as={NavLink}
            to='/membership'
            name='Membership'
          />
        </Responsive>
        <Responsive minWidth={500}>
          <Menu.Item>
            <Input
              style={{ marginTop: "0.4em" }}
              className='icon'
              icon='search'
              placeholder='Search...'
              id='search-menubar'
            />
          </Menu.Item>
        </Responsive>
        {auth.isAuth && auth.profile ? <SignedInMenu /> : <SignedOutMenu />}
      </Menu>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  visible: state.sidebar.visible
});

const mapDispatchToProps = { toggleVisibility };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
