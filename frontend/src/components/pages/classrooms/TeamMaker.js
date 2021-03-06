import React from "react";
import DragAndDropComponent from "../../sections/DragAndDropComponent";
import DragAndDropCard from "../../sections/DragAndDropCard";
import { Segment } from "semantic-ui-react";
import "../../../css/Classrooms.css";

const TeamMaker = props => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const { teams, handleChange } = props;

  return (
    <div className='flexbox'>
      {teams.map((team, teamIndex) => {
        return (
          <DragAndDropComponent
            key={teamIndex}
            id={`team_board_${teamIndex}`}
            teamId={teamIndex}
            className='board'
            onChange={handleChange}
          >
            {team.map((student, studentIndex) => {
              return (
                <DragAndDropCard
                  id={"card_" + capitalize(`${student}`)}
                  teamId={teamIndex}
                  studentId={student}
                  className='card'
                  draggable='true'
                  key={studentIndex}
                >
                  <Segment className='student-name-container'>
                    <div style={{textAlign: "center", width: "100%"}}>{capitalize(`${student}`)}</div>
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
