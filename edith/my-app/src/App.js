import React from 'react';
import NavBar from './features/navbar/nav/Navbar';
import Dashboard from './features/dashboard/Dashboard';

class App extends React.Component {
	render(){
		return (
			<div>
				<NavBar />
				<div className="main">
					<Dashboard />
				</div>

			</div>
		);
	}
}

export default App;
