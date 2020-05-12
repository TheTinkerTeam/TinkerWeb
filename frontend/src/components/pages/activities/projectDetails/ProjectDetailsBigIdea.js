import React from "react";
import { Segment } from "semantic-ui-react";

const ProjectDetailsBigIdea = ({bigIdea}) => {
  return (
    <Segment>
      <div className='paragraph-title-style'>
        {"About this project".toUpperCase()}
      </div>
      <br />
      <div>{bigIdea}</div>
    </Segment>
  );
};

export default ProjectDetailsBigIdea;
