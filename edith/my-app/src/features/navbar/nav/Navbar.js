import React, { Component } from "react";
import { Menu, Input } from "semantic-ui-react";
import logo from "../img/SHlogo.png";
import { NavLink, withRouter } from "react-router-dom";
import SignedOutMenu from "../menus/SignedOutMenu";
import SignedInMenu from "../menus/SignedInMenu";

class NavBar extends Component {
  // We put the constructor so it will rerender the component if the props are updated
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "Home",
      authenticated: false
    };
  }

  handleSignIn = () => {
    this.setState({ authenticated: true });
  };

  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push("/");
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem, authenticated } = this.state;

    return (
      <div>
        <Menu pointing secondary fixed='top'>
          {/* <Menu.Item>
            <a href='/'>
              <img src={logo} alt='SHlogo' id='navlogo' />
            </a>
          </Menu.Item> */}
          <Menu.Item
            as={NavLink}
            exact
            to='/'
            name='Home'
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          >
            <img src={logo} alt='SHlogo' id='navlogo' />
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to='/projects'
            name='Projects'
            active={activeItem === "Projects"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to='/tutorials'
            name='Tutorials'
            active={activeItem === "Tutorials"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to='/tinkercart'
            name='TinkerCart'
            active={activeItem === "TinkerCart"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to='/membership'
            name='Membership'
            active={activeItem === "Membership"}
            onClick={this.handleItemClick}
          />
          <Menu.Item>
            <Input
              className='icon'
              icon='search'
              placeholder='Search...'
              id='search-menubar'
            />
          </Menu.Item>
          {/* <Menu.Menu position='right'>
            <Menu.Item
              name='Join Supertinker'
              active={activeItem === "Join Supertinker"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Sign in'
              active={activeItem === "Sign in"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu> */}
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Menu>
      </div>
    );
  }
}

export default withRouter(NavBar);
