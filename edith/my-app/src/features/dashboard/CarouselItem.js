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
    const { project, category } = this.props;
    console.log(project);
    return (
      <div>
        {project.tags.map((tag, index) =>
          project.tags[index] === category ? (
            <div>
              <div>{project.title}</div>
			  <a>
    			<img
     				src={project.imageURL}
     				className=''
     				alt={project.title}
     				height='100em'
     				width='100em'
     			/>
     			</a>
            </div>
          ) : null
        )}
      </div>
    );
  }
}

export default CarouselItem;
