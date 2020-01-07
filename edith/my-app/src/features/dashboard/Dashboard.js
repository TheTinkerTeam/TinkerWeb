import React, { Component } from "react";
import "./Dashboard.css";
import WelcomeComponent from "./WelcomeComponent";
import TinkerNewsComponent from "./TinkerNewsComponent";
import ProjectsList from "./ProjectsList";
import tinkercart from "./img/tinkercart.png";

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboardcontainer'>
        <div className='welcome-item'>
          <img
            src={tinkercart}
            className='tinkercart-img-position'
            alt='Tinker Cart model'
            height='100em'
            width='100em'
          />
          <WelcomeComponent />
        </div>
        <div className='tinker-news-item'>
          <TinkerNewsComponent />
        </div>
        <div className='projects-list'>
          <ProjectsList />
        </div>
      </div>
    );
  }
}

export default Dashboard;
