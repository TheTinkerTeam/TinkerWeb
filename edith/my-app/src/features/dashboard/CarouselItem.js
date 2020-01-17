import React, { Component } from "react";

class CarouselItem extends Component {
  render() {
    // const {projects, category} = this.props;

    // return (
    //   <div>
    //   {projects[0].tags[0] === category ? (
    //       <div>
    //         <div>{projects[0].tags[0]}</div>
    //         <div>{projects[0].title}</div>
    // 		<a>
    // 			<img
    // 				src={projects[0].imageURL}
    // 				className=''
    // 				alt={projects[0].title}
    // 				height='100em'
    // 				width='100em'
    // 			/>
    // 		</a>
    //       </div>
    //     ) : null}
    //   </div>
    // );
    const { project } = this.props;
    return (
      <div className='img__wrap'>
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
      </div>
    );
  }
}

export default CarouselItem;
