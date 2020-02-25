import React, { Component } from "react";

class ProjectsDisplayedItem extends Component {
  render() {
    const { tutorial } = this.props;
    return (
      <div className='wrapper'>
        <div className='displayed-projects-item'>
          <div className='child'>
            <a href={`/tutorials/${tutorial.id}`}>
              <img
                src={tutorial.imageURL}
                className=''
                alt={tutorial.title}
                height='100em'
                width='100em'
              />
            </a>
          </div>
          <div className='child'>{tutorial.title}</div>
        </div>
      </div>
    );
  }
}
export default ProjectsDisplayedItem;