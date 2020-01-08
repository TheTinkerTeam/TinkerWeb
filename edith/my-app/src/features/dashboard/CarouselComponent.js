import React, { Component } from "react";
import CarouselItem from "./CarouselItem";

class CarouselComponent extends Component {
  render() {
    const { projects, category } = this.props;
	console.log(projects);
	console.log(projects);
    console.log(category);
    return (
      <div>
        {/* <div>{projects[0].title}</div>
        <div>{projects[0].tags[0]}</div>
        <div>{projects[0].tags[1]}</div>
        <div>{projects[0].tags[2]}</div> */}
		{projects.map((project, index) => (
          <CarouselItem key={projects[index].id} category={category} project={project} />
        ))}
		{/* <CarouselItem projects={projects} category={category} /> */}
      </div>
    );
  }
}

export default CarouselComponent;
