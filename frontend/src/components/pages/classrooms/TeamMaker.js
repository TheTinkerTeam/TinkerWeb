import React, { useState, useEffect } from "react";
import DragAndDropComponent from "../../sections/DragAndDropComponent";
import DragAndDropCard from "../../sections/DragAndDropCard";
import { Segment } from "semantic-ui-react";
import "../../../css/Classrooms.css";

const TeamMaker = props => {
  const { teams, handleChange } = props;

  return (
    <div className='flexbox'>
      {/* Hi Team Maker! This is the teamCount: {teamCount} */}
      {teams.map((team, teamIndex) => {
        return (
          <DragAndDropComponent
            key={teamIndex}
            id={"team_board_" + `${teamIndex}`}
            teamId={teamIndex}
            className='board'
            onChange={handleChange}
          >
            {team.map((student, studentIndex) => {
              return (
                <DragAndDropCard
                  id={"card_" + `${student}`.capitalize()}
                  teamId={teamIndex}
                  studentId={student}
                  className='card'
                  draggable='true'
                  key={studentIndex}
                >
                  <Segment className='student-name-container'>
                    <div style={{textAlign: "center", width: "100%"}}>{`${student}`.capitalize()}</div>
                  </Segment>
                </DragAndDropCard>
              );
            })}
          </DragAndDropComponent>
        );
      })}
    </div>
  );
};

export default TeamMaker;
