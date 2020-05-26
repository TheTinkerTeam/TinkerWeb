import React from "react";
import { Button, Form, Divider, Icon } from "semantic-ui-react";
import TeamMaker from "../TeamMaker";

const MakeTeamSection = ({
  isMakeTeamsActive,
  toggleMakeTeamsButton,
  classList,
  teams,
  currentProject,
  makeTeams,
  teamCount,
  options,
  handleChange,
  handleChangeDnd,
  moveStudent,
  generateRandomTeams,
  handleNumberSubmit,
  props
}) => {
  return (
    <div>
      <div className='flexbox-container in-section-margin'>
        <div className='section-classroom-title'>TEAMS</div>

        {isMakeTeamsActive ? (
          <Button
            className='arrow-down-button-classroom'
            circular
            icon='angle up'
            onClick={toggleMakeTeamsButton}
          />
        ) : (
          <Button
            className='arrow-down-button-classroom'
            circular
            icon='angle down'
            onClick={toggleMakeTeamsButton}
          />
        )}
      </div>
      <Divider />
      {classList && classList.length === 0 ? (
        <div>
          Add students to your class <Icon name='heart outline' />
        </div>
      ) : (
        <div>
          {teams.length === 0 ? (
            <div>
              <div className='flexbox'>
                <div>You haven't assigned students a team yet.</div>
              </div>
            </div>
          ) : (
            <div>
              <div className='flexbox'>
                {currentProject && (
                  <div>Yay, here are the "{currentProject.title}" teams!</div>
                )}
              </div>

              <div className='flexbox'>
                {teams.map((team, index) => (
                  <div key={index} style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: "bolder" }}>Team {index + 1}</div>
                    {team.map((student, index) => (
                      <div key={index}>{student}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {isMakeTeamsActive && (
            <div>
              <div className='flexbox'>
                <Button
                  style={{ width: "95%" }}
                  content={
                    teams.length === 0
                      ? `Make Teams for the current project: ${currentProject.title}`
                      : `Make New Teams for the current project: ${currentProject.title}`
                  }
                  onClick={makeTeams}
                />
              </div>

              <Form
                className='teamCountForm'
                autoComplete='off'
                onSubmit={handleNumberSubmit}
              >
                <Form.Select
                  label='How many teams?'
                  name='teamCount'
                  onChange={handleChange}
                  options={options}
                  value={teamCount}
                  placeholder='number'
                  id='teamCountInput'
                />
              </Form>

              <TeamMaker
                teams={teams}
                handleChange={handleChangeDnd}
                moveStudent={moveStudent}
                generateRandomTeams={generateRandomTeams}
                students={classList}
                teamCount={teamCount}
                props={props}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MakeTeamSection;
