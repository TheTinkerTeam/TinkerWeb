import React, { Fragment, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import NavBar from "./components/navbar/Navbar";
import Dashboard from "./components/pages/dashboard/Dashboard";
// import TinkerCartPage from "./components/pages/TinkerCartPage";
import MembershipPage from "./components/pages/membership/MembershipPage";
import TutorialsPage from "./components/pages/activities/TutorialsPage";
import TutorialDetailsPage from "./components/pages/activities/TutorialDetailsPage";
import ProjectsPage from "./components/pages/activities/ProjectsPage";
import ProjectDetailsPage from "./components/pages/activities/ProjectDetailsPage";
import SettingsDashboard from "./components/pages//settings";

import { loadUser } from "./actions/authActions";
import setAuthToken from "./utils/setAuthToken";

import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/membership" component={MembershipPage} />
              <Route exact path="/tutorials" component={TutorialsPage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route path="/settings" component={SettingsDashboard} />
              <Route path="/projects/:id" component={ProjectDetailsPage} />
              <Route path="/tutorials/:id" component={TutorialDetailsPage} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;

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
