import React from "react";
import { Segment, Button } from "semantic-ui-react";
import AddStudentFormSection from "./AddStudentFormSection";
import StudentsListSection from "./StudentsListSection";

const StudentsSection = ({
  handleNewStudentSubmit,
  currentStudentEmail,
  handleChange,
  studentAlreadyIn,
  classroom,
  isLoading,
  classroomID,
  capitalize,
  handleDeleteStudent,
  isStudentsActive,
  toggleButton,
}) => {
  return (
    <Segment.Group className='paragraph-style display-in-box'>
      <Segment className='section-title'>
        <div className='flexbox-container'>
          <div>STUDENTS</div>
          {isStudentsActive ? (
            <Button
              className='arrow-down-button-classroom'
              circular
              icon='angle up'
              onClick={toggleButton}
            />
          ) : (
            <Button
              className='arrow-down-button-classroom'
              circular
              icon='angle down'
              onClick={toggleButton}
            />
          )}
        </div>
      </Segment>

      {isStudentsActive && (
        <Segment>
          <AddStudentFormSection
            handleNewStudentSubmit={handleNewStudentSubmit}
            currentStudentEmail={currentStudentEmail}
            handleChange={handleChange}
            studentAlreadyIn={studentAlreadyIn}
            classroom={classroom}
            isLoading={isLoading}
            classroomID={classroomID}
          />
          <StudentsListSection
            classroom={classroom}
            capitalize={capitalize}
            handleDeleteStudent={handleDeleteStudent}
          />
          {/* <MakeTeamSection
              isMakeTeamsActive={isMakeTeamsActive}
              toggleMakeTeamsButton={toggleMakeTeamsButton}
              classList={classList}
              teams={teams}
              currentProject={currentProject}
              makeTeams={makeTeams}
              teamCount={teamCount}
              options={options}
              handleChange={handleChange}
              handleChangeDnd={handleChangeDnd}
              moveStudent={moveStudent}
              generateRandomTeams={generateRandomTeams}
              handleNumberSubmit={handleNumberSubmit}
              props={props}
            /> */}
        </Segment>
      )}
    </Segment.Group>
  );
};

export default StudentsSection;
