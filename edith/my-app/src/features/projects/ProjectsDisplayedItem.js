import React, { Component } from "react";

class ProjectsDisplayedItem extends Component {
  render() {
    const { project } = this.props;
    return <div>Hello {project.title}</div>;
  }
}
export default ProjectsDisplayedItem;
