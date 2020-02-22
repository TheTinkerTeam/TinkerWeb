import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./CarouselItem";

class ProjectsList extends Component {
  render() {
    const { category, projects } = this.props;

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 9
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 9
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
      <div className='projects-list card'>
        <div className='red-title'>{category} projects</div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition='all .5'
          transitionDuration={500}
          containerClass='carousel-container'
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          {projects.map((project, index) => (
            <CarouselItem key={index} category={category} project={project} />
          ))}
        </Carousel>
        {/* <CarouselComponent projects={projects} category={category} /> */}
      </div>
    );
  }
}

export default ProjectsList;