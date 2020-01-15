import React, { Component } from "react";
import CarouselComponent from "./CarouselComponent";

class ProjectsList extends Component {
  render() {
    const { category, projects } = this.props;

    return (
      <div className='projects-list card'>
        <div className='red-title'>{category} projects</div>
        <CarouselComponent projects={projects} category={category} />
      </div>
    );
  }
}

export default ProjectsList;
