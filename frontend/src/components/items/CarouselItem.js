import React, { Component } from "react";

class CarouselItem extends Component {
  render() {
    const { project } = this.props;
    return (
      <a href={`/projects/${project.id}`} className="img__wrap">
        <div className="img__description">{project.title}</div>
        <img
          src={project.imageURL}
          className="img__img"
          alt={project.title}
          //height="100em"
          height="130em"
          width="130em"
        />
      </a>
    );
  }
}

export default CarouselItem;
