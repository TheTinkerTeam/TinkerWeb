import React, { useEffect } from "react";
import { connect } from "react-redux";

import "../../../css/Dashboard.css";

import WelcomeComponent from "../../sections/WelcomeComponent";
import TinkerNewsComponent from "../../sections/TinkerNewsComponent";
import ProjectsList from "../../lists/ProjectsList";

import tinkercartPlus from "../../../img/tinkercart.png";

import { getProjects, createProject } from "../../../actions/projectActions";

const Dashboard = ({ projects, getProjects, createProject }) => {
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div className="dashboardcontainer">
      <div className="welcome-item card">
        <img
          src={tinkercartPlus}
          className="tinkercart-img-position"
          alt="Tinker Cart model"
          height="100em"
          width="100em"
        />
        <WelcomeComponent items={[]} />
      </div>
      <div className="tinker-news-item card">
        <TinkerNewsComponent />
      </div>
      <ProjectsList
        category="Featured"
        projects={projects.filter(project => {
          return project.tags.indexOf("Featured") !== -1;
        })}
      />
      <ProjectsList
        category="Science"
        projects={projects.filter(project => {
          return project.tags.indexOf("Science") !== -1;
        })}
      />
      <ProjectsList
        category="Wood-working"
        projects={projects.filter(project => {
          return project.tags.indexOf("Wood-working") !== -1;
        })}
      />
      <ProjectsList
        category="Coding"
        projects={projects.filter(project => {
          return project.tags.indexOf("Coding") !== -1;
        })}
      />
      <ProjectsList
        category="Cooking"
        projects={projects.filter(project => {
          return project.tags.indexOf("Cooking") !== -1;
        })}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = {
  getProjects,
  createProject
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
