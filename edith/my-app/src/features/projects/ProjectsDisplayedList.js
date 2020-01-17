import React, { Component } from "react";
import ProjectsDisplayedItem from "./ProjectsDisplayedItem";

class ProjectsDisplayedList extends Component {
  render() {
    const { projects } = this.props;

    return <div className='projects-display-flex-container'>
        {projects.map((project) => (
          <ProjectsDisplayedItem key={project.id} project={project} />
        ))}
		</div>;
  }
}

export default ProjectsDisplayedList;
