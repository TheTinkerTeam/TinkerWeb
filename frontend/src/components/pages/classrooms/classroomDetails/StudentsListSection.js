import React, { Fragment } from "react";
import { Segment, Button, Icon } from "semantic-ui-react";
import {Link} from 'react-router-dom'

const StudentsListSection = ({
  classroom,
  capitalize,
  handleDeleteStudent,
}) => {
  return (
    <Fragment>
      {classroom && classroom.students && classroom.students.length === 0 ? (
        <div>
          Add students to your class <Icon name='heart outline' />
        </div>
      ) : (
        classroom.students.map((student, index) => (
          <Segment className='student-name-container' key={index}>
            <div>{capitalize(`${student.firstName} ${student.lastName}`)}</div>
            <div>
              <Button
                as={Link}
                to={`/profile/${student.uid}`}
                className='student-button-classroom'
                circular
                icon='user'
                //onClick={() => {
                //handleStudentProfile(student.email, student.uid);
                //}}
              />
              <Button
                className='student-button-classroom'
                circular
                icon='delete'
                onClick={() => {
                  handleDeleteStudent(student.uid, student.id);
                }}
              />
            </div>
          </Segment>
        ))
      )}
    </Fragment>
  );
};

export default StudentsListSection;
