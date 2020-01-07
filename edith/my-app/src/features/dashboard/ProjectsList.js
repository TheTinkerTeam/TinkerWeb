import React, { Component } from "react";

class ProjectsList extends Component {

  render() {
	  const {category} = this.props;

	return (
      <div className='projects-list'>
        <div className='red-title'>{category} projects</div>
		<div>Here goes the carousel component</div>
      </div>
    );
  }
}

export default ProjectsList;
