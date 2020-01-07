import React from 'react';
import NavBar from './features/navbar/nav/Navbar';
import Dashboard from './features/dashboard/Dashboard';
import { Container } from 'semantic-ui-react';

class App extends React.Component {
	render(){
		return (
			<div>
				<NavBar />
				<Container className="main">
					<Dashboard />
				</Container>

			</div>
		);
	}
}

export default App;
