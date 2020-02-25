import React, { Component } from "react";

import TutoDisplayedItem from "../items/TutoDisplayedItem";

class ProjectsDisplayedList extends Component {
  render() {
    const { tutorials } = this.props;

    return (
      <div className="projects-display-flex-container">
        {tutorials &&
          tutorials.map(tuto => (
            <TutoDisplayedItem key={tuto.id} tutorial={tuto} />
          ))}
      </div>
    );
  }
}

export default ProjectsDisplayedList;
