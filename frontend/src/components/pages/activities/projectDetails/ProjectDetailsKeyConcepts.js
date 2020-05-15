import React from "react";
import { Segment, List } from "semantic-ui-react";

const ProjectDetailsKeyConcepts = ({keyConcepts}) => {
  return (
    <Segment>
      <div className='paragraph-title-style'>
        {"Key Concepts".toUpperCase()}
      </div>
      {keyConcepts &&
        keyConcepts.map((concept, index) => (
          <List bulleted key={index}>
            <List.Item>{concept}</List.Item>
          </List>
        ))}
    </Segment>
  );
};
export default ProjectDetailsKeyConcepts;
