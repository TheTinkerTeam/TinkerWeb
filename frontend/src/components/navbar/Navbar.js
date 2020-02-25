import React from "react";
import { Menu, Input } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import logo from "../../img/SHlogo.png";
import SignedOutMenu from "../navbar/SignedOutMenu";
import SignedInMenu from "../navbar/SignedInMenu";
import { logout } from "../../actions/authActions";

const NavBar = ({ auth }) => {
  return (
    <div>
      <Menu pointing secondary fixed="top">
        {/* <Menu.Item>
            <a href='/'>
              <img src={logo} alt='SHlogo' id='navlogo' />
            </a>
          </Menu.Item> */}
        <Menu.Item as={NavLink} exact to="/" name="Home">
          <img src={logo} alt="SHlogo" id="navlogo" />
        </Menu.Item>
        <Menu.Item as={NavLink} to="/projects" name="Projects" />
        <Menu.Item as={NavLink} to="/tutorials" name="Tutorials" />
        <Menu.Item as={NavLink} to="/tinkercart" name="TinkerCart" />
        <Menu.Item as={NavLink} to="/membership" name="Membership" />
        <Menu.Item as={NavLink} to="/test" name="Test" />
        <Menu.Item>
          <Input
            className="icon"
            icon="search"
            placeholder="Search..."
            id="search-menubar"
          />
        </Menu.Item>
        {/* <Menu.Menu position='right'>
            <Menu.Item
              name='Join Supertinker'
              active={activeItem === "Join Supertinker"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Sign in'
              active={activeItem === "Sign in"}
              onClick={handleItemClick}
            />
          </Menu.Menu> */}
        {auth.isAuth ? <SignedInMenu /> : <SignedOutMenu />}
      </Menu>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
