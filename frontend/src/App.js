import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";

import logo from "./img/SHlogo.png";

import NavBar from "./components/navbar/Navbar";
import Dashboard from "./components/pages/dashboard/Dashboard";
// import TinkerCartPage from "./components/pages/TinkerCartPage";
import MembershipPage from "./components/pages/membership/MembershipPage";
import TutorialsPage from "./components/pages/activities/TutorialsPage";
import TutorialDetailsPage from "./components/pages/activities/TutorialDetailsPage";
import ProjectsPage from "./components/pages/activities/ProjectsPage";
import ClassroomsPage from "./components/pages/classrooms/ClassroomsPage";
import ClassroomDetailsPage from "./components/pages/classrooms/ClassroomDetailsPage";
import ProjectDetailsPage from "./components/pages/activities/ProjectDetailsPage";
import ClassesPage from "./components/pages/activities/ClassesPage";
import ClassDetailsPage from "./components/pages/activities/ClassesDetailsPage";
import ProfilePage from "./components/pages/profile/ProfilePage";
import SettingsDashboard from "./components/pages//settings";

import { loadUser } from "./actions/authActions";
// import setAuthToken from "./utils/setAuthToken";

import { useSelector, useDispatch } from "react-redux";

import store from "./store";
import { Sidebar, Segment, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { toggleVisibility } from "./actions/sidebarActions";

// import ApolloClient, { InMemoryCache } from "apollo-boost";
// import { getFirebase, useFirebase } from "react-redux-firebase";
// import { ApolloProvider } from "@apollo/react-hooks";

import Alert from "./components/services/Alert";
import { setAlert } from "./actions/alertActions";

const App = (props) => {
  const auth = useSelector((state) => state.firebase.auth);
  useEffect(() => {
    if (auth && auth.uid) {
      props.client.resetStore();
      store.dispatch(loadUser(auth.uid));
    } else {
      store.dispatch(loadUser(null));
    }
  }, [auth, props.client]);

  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  if (props.location.state && props.location.state.alert) {
    dispatch(setAlert(props.location.state.alert, "error", 2000));
    props.history.replace({
      pathname: props.location.pathname,
      state: {},
    });
  }

  return (
    <div>
      <Alert />
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          vertical
          onHide={() => {
            if (sidebar.visible === true) {
              store.dispatch(toggleVisibility());
            }
          }}
          visible={sidebar.visible}
          width='thin'
        >
          <img src={logo} alt='SHlogo' id='navlogo' />
          <Menu.Item
            as={NavLink}
            exact
            to='/'
            name='Home'
            onClick={() => store.dispatch(toggleVisibility())}
          >
            <Icon name='user' />
            Home
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to='/projects'
            name='Projects'
            onClick={() => store.dispatch(toggleVisibility())}
          >
            <Icon name='file' />
            Projects
          </Menu.Item>
          {/* <Menu.Item
            as={NavLink}
            to='/tutorials'
            name='Tutorials'
            onClick={() => store.dispatch(toggleVisibility())}
          >
            <Icon name='cut' />
            Tutorials
          </Menu.Item> */}
          {!auth.isEmpty && (
            <Menu.Item
              as={NavLink}
              to='/classrooms'
              name='Classrooms'
              onClick={() => store.dispatch(toggleVisibility())}
            >
              <Icon name='thumbtack' />
              Classrooms
            </Menu.Item>
          )}
          <Menu.Item
            as={NavLink}
            to='/tinkercart'
            name='Tinker Cart'
            onClick={() => store.dispatch(toggleVisibility())}
          >
            <Icon name='star' />
            Tinker Cart
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to='/membership'
            name='Membership'
            onClick={() => store.dispatch(toggleVisibility())}
          >
            <Icon name='heart' />
            Membership
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher style={{ minHeight: "100vh" }} dimmed={sidebar.visible}>
          <NavBar />
          <div className='container'>
            <Route exact path='/' component={Dashboard} />
            <Route
              path='/(.+)'
              render={() => (
                <div>
                  <Route path='/membership' component={MembershipPage} />
                  <Route path='/classes' component={ClassesPage} />
                  <Route exact path='/classrooms' component={ClassroomsPage} />
                  <Route
                    path='/classrooms/:id'
                    component={ClassroomDetailsPage}
                  />
                  <Route exact path='/tutorials' component={TutorialsPage} />
                  <Route exact path='/projects' component={ProjectsPage} />
                  <Route path='/projects/:id' component={ProjectDetailsPage} />
                  <Route
                    path='/tutorials/:id'
                    component={TutorialDetailsPage}
                  />
                  <Route exact path='/classes' component={ClassesPage} />
                  <Route path='/classes/:id' component={ClassDetailsPage} />
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
};

export default withRouter(App);

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
