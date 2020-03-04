import React from "react";
import { Menu, Input, Responsive, Button } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import logo from "../../img/SHlogo.png";
import SignedOutMenu from "../navbar/SignedOutMenu";
import SignedInMenu from "../navbar/SignedInMenu";

const NavBar = ({ auth }) => {
  return (
    <div>
      <Menu pointing secondary fixed='top'>
        <Menu.Item as={NavLink} exact to='/' name='Home'>
          <Responsive
            {...Responsive.onlyMobile}
            as={Button}
            content='dropdown menu(mobile)'
            icon='list'
            labelPosition='left'
          />
          {/* <Responsive
              as={Button}
              content='desktop version'
              minWidth={Responsive.onlyTablet.minWidth}
            /> */}
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <img src={logo} alt='SHlogo' id='navlogo' />
          </Responsive>
        </Menu.Item>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Menu.Item
            style={{ marginTop: "0.6em" }}
            as={NavLink}
            to='/projects'
            name='Projects'
          />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Menu.Item
            style={{ marginTop: "0.6em" }}
            as={NavLink}
            to='/tutorials'
            name='Tutorials'
          />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Menu.Item
            style={{ marginTop: "0.6em", whiteSpace: "nowrap" }}
            as={NavLink}
            to='/tinkercart'
            name='TinkerCart'
          />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Menu.Item
            style={{ marginTop: "0.6em" }}
            as={NavLink}
            to='/membership'
            name='Membership'
          />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Menu.Item
            style={{ marginTop: "0.6em" }}
            as={NavLink}
            to='/test'
            name='Test'
          />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth && 1100}>
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
        {auth.isAuth && auth.profile ? <SignedInMenu /> : <SignedOutMenu />}
      </Menu>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
