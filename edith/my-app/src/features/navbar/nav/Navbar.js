import React, { Component } from "react";
import { Menu, Input } from "semantic-ui-react";
import logo from "../img/SHlogo.png";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary fixed='top'>
          <Menu.Item>
            <a href='/'>
              <img src={logo} alt='SHlogo' id='navlogo' />
            </a>
          </Menu.Item>
          {/* <Menu.Item
            name='Home'
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          /> */}
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
          <Menu.Menu position='right'>
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
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
