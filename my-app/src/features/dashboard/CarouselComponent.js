import React, { Component } from "react";
import CarouselItem from "./CarouselItem";
import InfiniteCarousel from "react-leaf-carousel";

class CarouselComponent extends Component {
  constructor(props) {
    super(props);
  }

//   shouldComponentUpdate(nextProps) {
//     const projectAdded = this.props.projects.length !== nextProps.projects.length;
//     return projectAdded;
// }


  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.projects != nextProps.projects) {
  //     return (true)
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.projects !== prevProps.projects) {
  //     this.forceUpdate();
  //   }
  // }

  render() {
    const { projects, category } = this.props;

    console.log('in carousel')
    console.log(projects)
    return (
      <div>
        <div>{projects.length}</div>
        {projects.map((project, index) => (
            <div key={index}>
              {project.title}
            </div>
          ))}
        {console.log("test" + projects)}

        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]}
          dots={false}
          showSides={false}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={1}
          slidesToShow={9}
          scrollOnDevice={true}
          projects={projects.length}
        >
          {/* {projects.map((project, index) => (
            <div key={index}>
              <div>{projects.length}</div>
              <CarouselItem key={index} category={category} project={project} />
            </div>
          ))} */}
          {projects.map((project, index) => (
            <div key={index}>
              <div>{projects.length}</div>
              <CarouselItem key={index} category={category} project={project} />
            </div>
          ))}
        </InfiniteCarousel>
      </div>
    );
  }
}

export default CarouselComponent;

// ==================================================================================================== //
//                                                                                                      //
// More info about <InfiniteCarousel />                                                                 //
// https://reactjsexample.com/react-simple-infinite-carousel-with-lazy-loading-and-responsive-support/  //
//                                                                                                      //
// ==================================================================================================== //
