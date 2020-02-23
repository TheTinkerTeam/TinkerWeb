import React, { Component } from "react";
import { Menu, Input } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import cuid from "cuid";

import logo from "src/img/SHlogo.png";
import SignedOutMenu from "src/components/layout/SignedOutMenu";
import SignedInMenu from "src/components/layout/SignedInMenu";

class NavBar extends Component {
  // We put the constructor so it will rerender the component if the props are updated
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "",
      authenticated: false,
      user: {
        id: "",
        username: "",
        password: "",
        email: ""
      }
    };
  }

  handleFormSubmit = () => {
    //evt.preventDefault();
    window.scrollTo(0, 0);
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        id: cuid()
      },
    }),
    () => {
      console.log('test')
      console.log(this.state);
    });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
    console.log(this.state);
  };

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
          <Menu.Item
            as={NavLink}
            to='/test'
            name='Test'
            active={activeItem === "Test"}
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
            <SignedOutMenu
              signIn={this.handleSignIn}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          )}
        </Menu>
      </div>
    );
  }
}

export default withRouter(NavBar);
