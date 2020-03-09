import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/navbar/Navbar";
import Dashboard from "./components/pages/dashboard/Dashboard";
// import TinkerCartPage from "./components/pages/TinkerCartPage";
import MembershipPage from "./components/pages/membership/MembershipPage";
import TutorialsPage from "./components/pages/activities/TutorialsPage";
import TutorialDetailsPage from "./components/pages/activities/TutorialDetailsPage";
import ProjectsPage from "./components/pages/activities/ProjectsPage";
import ProjectDetailsPage from "./components/pages/activities/ProjectDetailsPage";
import ProfilePage from "./components/pages/profile/ProfilePage";
import SettingsDashboard from "./components/pages//settings";

import { loadUser } from "./actions/authActions";
import setAuthToken from "./utils/setAuthToken";

import { connect } from "react-redux";

import store from "./store";
import { Sidebar, Segment, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { toggleVisibility } from "./actions/sidebarActions";

import logo from "./img/SHlogo.png";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            vertical
            onHide={() => {
              if (this.props.sidebar.visible === true) {
                this.props.toggleVisibility();
              }
            }}
            visible={this.props.sidebar.visible}
            width='thin'
          >
            <img src={logo} alt='SHlogo' id='navlogo' />
            <Menu.Item
              as={NavLink}
              exact
              to='/'
              name='Home'
              onClick={this.props.toggleVisibility}
            >
              <Icon name='user' />
              Home
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to='/projects'
              name='Projects'
              onClick={this.props.toggleVisibility}
            >
              <Icon name='file' />
              Projects
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to='/tutorials'
              name='Tutorials'
              onClick={this.props.toggleVisibility}
            >
              <Icon name='cut' />
              Tutorials
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to='/tinkercart'
              name='Tinker Cart'
              onClick={this.props.toggleVisibility}
            >
              <Icon name='star' />
              Tinker Cart
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to='/membership'
              name='Membership'
              onClick={this.props.toggleVisibility}
            >
              <Icon name='heart' />
              Membership
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher style={{minHeight: "100vh"}} dimmed={this.props.sidebar.visible}>
            <NavBar />
            <div className='container'>
              <Route exact path='/' component={Dashboard} />
              <Route
                path='/(.+)'
                render={() => (
                  <div>
                    <Route path='/membership' component={MembershipPage} />
                    <Route exact path='/tutorials' component={TutorialsPage} />
                    <Route exact path='/projects' component={ProjectsPage} />
                    <Route
                      path='/projects/:id'
                      component={ProjectDetailsPage}
                    />
                    <Route
                      path='/tutorials/:id'
                      component={TutorialDetailsPage}
                    />
                    <Route exact path='/me' component={ProfilePage} />
                    <Route path='/settings' component={SettingsDashboard} />
                  </div>
                )}
              />
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sidebar: state.sidebar
});

const mapDispatchToProps = { toggleVisibility };

export default connect(mapStateToProps, mapDispatchToProps)(App);

// class App extends React.Component {
//   render() {
//     return (
//       <div >
//         <NavBar />
// 				<div className='container'>
// 					<Route exact path='/' component={Dashboard} />
// 					<Route path='/tinkercart' component={TinkerCartPage} />
// 					<Route path='/membership' component={MembershipPage} />
// 					<Route exact path='/tutorials' component={TutorialsPage} />
// 					<Route exact path='/projects' component={ProjectsPage} />
// 					<Route path='/projects/:id' component={ProjectDetailsPage} />
// 					<Route path='/tutorials/:id' component={TutorialDetailsPage} />
// 				</div>
//       </div>
//     );
//   }
// }

// export default App;
