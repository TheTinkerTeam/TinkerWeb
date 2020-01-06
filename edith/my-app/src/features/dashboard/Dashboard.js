import React, { Component } from 'react';
import './Dashboard.css';
import WelcomeComponent from './WelcomeComponent';
import TinkerNews from './TinkerNews';
import ProjectsList from './ProjectsList';

class Dashboard extends Component {
	render() {
		return (
			<div className="dashboardcontainer">
				<div className="welcome-item"><WelcomeComponent/></div>
				<div className="tinker-news-item"><TinkerNews/></div>
				<div className="projects-list"><ProjectsList/></div>
			</div>
		)
	}
}

export default Dashboard;
