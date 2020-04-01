import React, { Component } from "react";
import "../../css/Classrooms.css";

class FlexClassroomItem extends Component {
  render() {
    const { item } = this.props;
    console.log(item);
    return (
      <a href={`/classrooms/${item.id}`} className="classroomListItem">
        <div className="class-text">{item.class}</div>
        {item.subject && <div className="subject-text">{item.subject}</div>}
        {item.assignments && item.assignments.length !== 0 ? (
          item.assignments.slice(0, 3).map((due, index) => (
            <div key={index} className="assignement-text">
              {due.date} - {`${due.task}`.slice(0, 30)}
              {`${due.task}`.length >= 31 && <span>(.....)</span>}
            </div>
          ))
        ) : (
          <div className="assignement-text">Nothing due, yay!</div>
        )}
        <div className="students-text">
          {item.students && item.students.length} students
        </div>
      </a>
    );
  }
}
export default FlexClassroomItem;
