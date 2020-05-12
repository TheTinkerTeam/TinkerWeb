import React, {Fragment} from 'react'
import { Segment, List, Icon } from 'semantic-ui-react';

const ProjectDetailsStandards = ({standards}) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Segment>
          <div className='paragraph-title-style'>
            {"Standards".toUpperCase()}
          </div>
          <br />
          {standards &&
            standards.map((standard, index) => (
              <Fragment key={index}>
                <List bulleted>
                  <List.Header>
                    <strong>{capitalize(`${standard.code}`)}</strong>
                  </List.Header>
                  <List.Header>
                    <strong>{standard.description}</strong>
                  </List.Header>
                  {standard.skills &&
                    standard.skills.map(
                      (skill, index) =>
                        skill !== "" && (
                          <List.Content key={`${standard.id}_${index}`}>
                            <Icon name='right triangle' />
                            {skill}
                          </List.Content>
                        )
                    )}
                </List>
                <br />
              </Fragment>
            ))}
        </Segment>
  )
}

export default ProjectDetailsStandards;
