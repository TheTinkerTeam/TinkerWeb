import React, { Component } from "react";

class CarouselItem extends Component {

  render() {
    const { project } = this.props;
    console.log(project);
    return (
      <a href={`/projects/${project.id}`} className='img__wrap'>
        <div className='img__description'>{project.title}</div>
        <a href={`/projects/${project.id}`}>
          <img
            src={project.imageURL}
            className='img__img'
            alt={project.title}
            height='100em'
            width='100em'
          />
        </a>
      </a>
    );
  }
}

export default CarouselItem;
