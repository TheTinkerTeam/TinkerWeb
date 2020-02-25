import React, { Component } from "react";

import ProjectsDisplayedItem from "../items/ProjectsDisplayedItem";

class ProjectsDisplayedList extends Component {
  render() {
    const { projects } = this.props;

    return (
      <div className="projects-display-flex-container">
        {projects &&
          projects.map(project => (
            <ProjectsDisplayedItem key={project._id} project={project} />
          ))}
      </div>
    );
  }
}

export default ProjectsDisplayedList;
