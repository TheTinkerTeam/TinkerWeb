import React, { Component } from "react";

class ProjectsDisplayedItem extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className='wrapper'>
        <div className='displayed-projects-item'>
          <div className='child'>
            <a href={`/projects/${project.id}`}>
              <img
                src={project.imageURL}
                className=''
                alt={project.title}
                height='100em'
                width='100em'
              />
            </a>
          </div>
          <div className='child'>{project.title}</div>
        </div>
      </div>
    );
  }
}
export default ProjectsDisplayedItem;
