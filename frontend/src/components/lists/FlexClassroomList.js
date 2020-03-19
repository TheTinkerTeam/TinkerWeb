import React, { Component } from "react";
import FlexClassroomItem from "../items/FlexClassroomItem";
import "../../css/Classrooms.css";

class FlexClassroomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { class: "Grade 5A", nb_students: "12", id: "1" },
        { class: "Grade 5B", nb_students: "15", id: "2" },
        { class: "Grade 6A", nb_students: "14", id: "3" },
        { class: "Grade 6B", nb_students: "11", id: "4" }
      ]
    };
  }

  render() {
    const { list } = this.state;

    return (
      <div className='classroomListContainer'>
        {list &&
          list.map((item, index) => (
            <FlexClassroomItem key={index} item={item} />
          ))}
      </div>
    );
  }
}

export default FlexClassroomList;
