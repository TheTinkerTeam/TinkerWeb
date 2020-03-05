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
import {toggleVisibility} from '../../actions/sidebarActions'

const NavBar = ({ auth, toggleVisibility }) => {
  // const initialSideBar = {
  //   animation: "overlay",
  //   direction: "left",
  //   dimmed: false,
  //   visible: false
  // };

  // const [sideBar, setVisible] = useState(initialSideBar);

  // const handlePusher = () => {
  //   if (sideBar.visible) {
  //     setVisible({ visible: false });
  //   }
  // };

  // const handleToggle = () => {
  //   setVisible({ visible: !sideBar.visible });
  // };

  // const handleSideBarClick = () => {
  //   setVisible({ visible: !sideBar.visible });
  // };

  return (
    <div>
      <Menu pointing secondary fixed='top'>
        <Menu.Item >
          {/* <Responsive
            {...Responsive.onlyMobile}
            as={Image}
            src={logo}
            id='navlogo'
            labelPosition='left'
            size='small'
            onClick={handleSideBarClick}
          /> */}
          <Responsive
            {...Responsive.onlyMobile}
            as={Button}
            content='menu(mobile)'
            icon='bars'
            labelPosition='left'
            onClick={toggleVisibility}
          />

          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Image style={{'width':'7em'}} as={NavLink} exact to='/' src={logo} alt='SHlogo' id='navlogo' />
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
  auth: state.auth,
  visible: state.sidebar.visible
});

const mapDispatchToProps = {toggleVisibility};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
