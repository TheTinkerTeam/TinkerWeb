import React from "react";
import { List, Icon, Segment } from "semantic-ui-react";

const ProjectDetailsContentPart = ({ title, strands }) => {
  return (
    <Segment color='blue'>
      <div className='paragraph-title-style'>{title.toUpperCase()}</div>
      {strands &&
        strands.map(
          (strand, index) =>
            strand !== "" && (
              <List key={index}>
                <List.Item>
                  <Icon name='square outline' />
                  {strand}
                </List.Item>
              </List>
            )
        )}
    </Segment>
  );
};

export default ProjectDetailsContentPart;
