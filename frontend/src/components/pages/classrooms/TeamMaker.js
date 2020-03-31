import React, { useState, useEffect } from "react";
import DragAndDropComponent from "../../sections/DragAndDropComponent";
import DragAndDropCard from "../../sections/DragAndDropCard";
import { Segment } from "semantic-ui-react";
import "../../../css/Classrooms.css";

const TeamMaker = props => {
  const { teamCount, teams, students, handleChange } = props;

  //   const generateTeams = (teamCount, students) => {
  //     const teams = [];

  //     for (let i = 0; i < teamCount; i++) {
  //       teams.push([`Lucas #${i}`, `Didi #${i}`, `Toto #${i}`]);
  //     }

  //     return teams;
  //   };

//   const generateRandomTeams = (teamCount, students) => {
//     let teamsCreated = [];
//     for (let i = 0; i < teamCount; i++) {
//       let children = [];
//       if (i === 0) {
//         students
//           .slice(i, students.length / teamCount)
//           .map((student, index) => children.push(`${student}`.capitalize()));
//       } else {
//         students
//           .slice(
//             i * (students.length / teamCount),
//             (i + 1) * (students.length / teamCount)
//           )
//           .map((student, index) => children.push(`${student}`.capitalize()));
//       }
//       //Create the parent and add the children
//       teamsCreated.push(children);
//     }
//     return teamsCreated;
//   };

//   const [teams, setTeams] = useState(generateRandomTeams(teamCount, students));

//   const moveStudent = (studentId, originTeamId, destinationTeamId, teams) => {
//     const newTeams = [...teams];

//     newTeams[originTeamId] = newTeams[originTeamId].filter(
//       sid => sid !== studentId
//     );

//     newTeams[destinationTeamId].push(studentId);

//     console.log("newTeams", newTeams);
//     return newTeams;
//   };

//   useEffect(() => {
//     setTeams(generateRandomTeams(teamCount, students));
//   }, [teamCount]);

//   const handleChange = (studentId, originTeamId, destinationTeamId) => {
//     console.log("studentId =", studentId);
//     console.log("originTeamId =", originTeamId);
//     console.log("destinationTeamId =", destinationTeamId);

//     console.log("Before moving, these are the teams:", teams);
//     setTeams(moveStudent(studentId, originTeamId, destinationTeamId, teams));
//     // console.log("After moving, these are the teams:", teams);
//   };

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
                    <div>{`${student}`.capitalize()}</div>
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
