import React, { Component } from "react";
import "../../css/Classrooms.css";

const FlexClassroomItem = ({ classroom }) => {

  return (
    <a href={`/classrooms/${classroom.id}`} className='classroomListItem'>
      <div className='class-text'>{classroom.className}</div>
      {classroom.subject && (
        <div className='subject-text'>{classroom.subject}</div>
      )}
      {classroom.assignments && classroom.assignments.length !== 0 ? (
        classroom.assignments.slice(0, 3).map((due, index) => (
          <div key={index} className='assignement-text'>
            {due.date} - {`${due.task}`.slice(0, 30)}
            {`${due.task}`.length >= 31 && <span>(.....)</span>}
          </div>
        ))
      ) : (
        <div className='assignement-text'>Nothing due, yay!</div>
      )}
      <div className='students-text'>
        {classroom.students ? classroom.students.length : "no"} students
        {!classroom.student && " yet"}
      </div>
    </a>
  );
};

export default FlexClassroomItem;
