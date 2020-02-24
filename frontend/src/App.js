import React from "react";
import { Route } from "react-router-dom";

import ProjectsPage from "src/components/pages/Projects";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <Route
            path="/(.+)"
            render={() => (
              <div>
                <Route exact path="/projects" component={ProjectsPage} />
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
