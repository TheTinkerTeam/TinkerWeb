import React from "react";
import { Segment } from "semantic-ui-react";

const ProjectDetailsKeyQuestion = ({keyQuestion}) => {
  return (
    <Segment>
      <div className='paragraph-title-style'>
        {"Key Question".toUpperCase()}
      </div>
      <br />
      <div>{keyQuestion}</div>
    </Segment>
  );
};

export default ProjectDetailsKeyQuestion;
