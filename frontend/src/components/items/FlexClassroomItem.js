import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";
import '../../css/Classrooms.css';

const square = { width: 175, height: 175, margin: "100px" };

class FlexClassroomItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <a href={`/classrooms/${item.id}`} className="classroomListItem">
          <div className="class-text">{item.class}</div>
          <div className="students-text">{item.nb_students} students</div>
      </a>
    );
  }
}
export default FlexClassroomItem;