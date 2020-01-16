import React, { Component } from "react";
import CarouselItem from "./CarouselItem";
import InfiniteCarousel from "react-leaf-carousel";

class CarouselComponent extends Component {
  render() {
    const { projects, category } = this.props;
    return (
      <div>
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
        >
          {projects.map((project, index) => (
            <CarouselItem
              key={projects[index].id}
              category={category}
              project={project}
            />
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
