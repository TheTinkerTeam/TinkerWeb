import React from "react";
import { Route } from "react-router-dom";

import NavBar from "src/components/layout/Navbar";
import Dashboard from "src/components/pages/Dashboard";
import TinkerCartPage from "src/components/pages/TinkerCartPage";
import MembershipPage from "src/components/pages/MembershipPage";
import TutorialsPage from "src/components/pages/TutorialsPage";
import TutorialDetailsPage from "src/components/pages/TutorialDetailsPage";
import ProjectsPage from "src/components/pages/ProjectsPage";
import ProjectDetailsPage from "src/components/pages/ProjectDetailsPage";
import SettingsDashboard from "src/components/pages/SettingsDashboard";

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