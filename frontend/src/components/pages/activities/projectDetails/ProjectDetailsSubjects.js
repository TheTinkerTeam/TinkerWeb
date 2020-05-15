import React from "react";
import { Segment, List } from "semantic-ui-react";

const ProjectDetailsSubjects = ({subjects}) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Segment>
      <div className='paragraph-title-style'>{"Subjects".toUpperCase()}</div>
      <br />
      {/* <div>{project.subjects}</div> */}
      {/* This shouldn't be school subjects in the database but wider topics such as Gravity, Forces and Motion, Classifying Objects, Speed, Velocity, Acceleration, Aerodynamics/Air, Resistance, Surface Area */}
      <div>
        {subjects &&
          subjects.map((subject, index) => (
            <List bulleted key={index}>
              <List.Item>{capitalize(`${subject}`)}</List.Item>
            </List>
          ))}
      </div>
    </Segment>
  );
};
export default ProjectDetailsSubjects;
