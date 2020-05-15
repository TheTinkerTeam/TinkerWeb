import React from 'react'
import { Segment, List } from 'semantic-ui-react';

const ProjectDetailsSafety = ({safety}) => {
  return (
    <Segment>
      <div className='paragraph-title-style'>{"Safety".toUpperCase()}</div>
      <br />
      {/* <div>{project.subjects}</div> */}
      {/* This shouldn't be school subjects in the database but wider topics such as Gravity, Forces and Motion, Classifying Objects, Speed, Velocity, Acceleration, Aerodynamics/Air, Resistance, Surface Area */}
      <div>
        {safety &&
          safety.map((tip, index) => (
            <List bulleted key={index}>
              <List.Item>{`${tip}`}</List.Item>
            </List>
          ))}
      </div>
    </Segment>
  )
}
export default ProjectDetailsSafety;