import React, { Component } from "react";
import CarouselItem from "./CarouselItem";
import InfiniteCarousel from "react-leaf-carousel";

class CarouselComponent extends Component {
  render() {
    const { projects, category } = this.props;
    console.log(projects);
    console.log(projects);
    console.log(category);
    return (
      //   {/* <div>
      //     {/* <div>{projects[0].title}</div>
      //     <div>{projects[0].tags[0]}</div>
      //     <div>{projects[0].tags[1]}</div>
      //     <div>{projects[0].tags[2]}</div> */}
      // 	{projects.map((project, index) => (
      //       <CarouselItem key={projects[index].id} category={category} project={project} />
      //     ))}
      // 	{/* <CarouselItem projects={projects} category={category} /> */}
      //   </div> */}
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
