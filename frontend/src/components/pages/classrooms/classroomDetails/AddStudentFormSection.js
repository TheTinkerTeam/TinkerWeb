import React from "react";
import { Form, Label } from "semantic-ui-react";

const AddStudentFormSection = ({
  handleNewStudentSubmit,
  currentStudentEmail,
  handleChange,
  studentAlreadyIn,
  classroom,
  isLoading,
  classroomID
}) => {
  return (
    <Form
      className='newStudentInput'
      autoComplete='off'
      onSubmit={() => handleNewStudentSubmit(classroomID)}
    >
      <Form.Group>
        <Form.Input
          placeholder='Student Email'
          name='currentStudentEmail'
          value={currentStudentEmail}
          onChange={handleChange}
        />
        <Form.Button
          disabled={studentAlreadyIn(
            classroom.students,
            currentStudentEmail
          )}
          loading={isLoading}
          content='Add'
        />
        {studentAlreadyIn(classroom.students, currentStudentEmail) && (
          <Label basic color='red'>
            This student has already joined your class.
          </Label>
        )}
      </Form.Group>
    </Form>
  );
};

export default AddStudentFormSection;
