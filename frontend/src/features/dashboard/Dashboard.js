import React, { Component } from "react";
// import "./Dashboard.css";
import WelcomeComponent from "./WelcomeComponent";
import TinkerNewsComponent from "./TinkerNewsComponent";
import ProjectsList from "./ProjectsList";
import tinkercart from "./img/tinkercart.png";
import { connect } from "react-redux";
import ProjectForm from "../projects/projectForm/ProjectForm";
import {createProject} from './projectsActions';

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = {
	createProject
}

class Dashboard extends Component {

  render() {
    const { projects, createProject } = this.props;

    return (
      <div className='dashboardcontainer'>
        <div className='welcome-item card'>
          <img
            src={tinkercart}
            className='tinkercart-img-position'
            alt='Tinker Cart model'
            height='100em'
            width='100em'
          />
          <WelcomeComponent />
        </div>
        <div className='tinker-news-item card'>
          <TinkerNewsComponent />
        </div>
        <ProjectsList
          category='Featured'
          projects={projects.filter(project => {
            return project.tags.indexOf("Featured") !== -1;
          })}
        />
        <ProjectsList
          category='Science'
          projects={projects.filter(project => {
            return project.tags.indexOf("Science") !== -1;
          })}
        />
        <ProjectsList
          category='Wood-working'
          projects={projects.filter(project => {
            return project.tags.indexOf("Wood-working") !== -1;
          })}
        />
        <ProjectsList
          category='Coding'
          projects={projects.filter(project => {
            return project.tags.indexOf("Coding") !== -1;
          })}
        />
        <ProjectsList
          category='Cooking'
          projects={projects.filter(project => {
            return project.tags.indexOf("Cooking") !== -1;
          })}
        />
        <ProjectForm createProject={createProject} />

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);