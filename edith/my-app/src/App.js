import React from "react";
import NavBar from "./features/navbar/nav/Navbar";
import Dashboard from "./features/dashboard/Dashboard";
import TinkerCartPage from "./features/tinkercart/TinkerCartPage";
import MembershipPage from "./features/membership/MembershipPage";
import TutorialsPage from "./features/tutorials/TutorialsPage";
import TutorialDetailsPage from "./features/tutorials/TutorialDetailsPage";
import ProjectsPage from "./features/projects/ProjectsPage";
import ProjectDetailsPage from "./features/projects/ProjectDetailsPage";
import SettingsDashboard from "./features/user/SettingsDashboard";
import { Route } from "react-router-dom";
import TestComponent from "./features/testarea/TestComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='container'>
          <Route exact path='/' component={Dashboard} />
          <Route
            path='/(.+)'
            render={() => (
              <div>
                <Route path='/tinkercart' component={TinkerCartPage} />
                <Route path='/membership' component={MembershipPage} />
                <Route exact path='/tutorials' component={TutorialsPage} />
                <Route exact path='/projects' component={ProjectsPage} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path='/projects/:id' component={ProjectDetailsPage} />
                <Route path='/tutorials/:id' component={TutorialDetailsPage} />
                <Route path='/test' component={TestComponent} />
              </div>
            )}
          />
        </div>
      </div>
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