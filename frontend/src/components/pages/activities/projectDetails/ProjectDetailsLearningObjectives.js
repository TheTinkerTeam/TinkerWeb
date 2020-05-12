import React from "react";
import { Segment } from "semantic-ui-react";

const ProjectDetailsLearningObjectives = ({learningObjectives}) => {
  return (
    <Segment>
      <div className='paragraph-title-style'>
        {"Learning Objectives".toUpperCase()}
      </div>
      <br />
      <div>{learningObjectives}</div>
    </Segment>
  );
};

export default ProjectDetailsLearningObjectives;
