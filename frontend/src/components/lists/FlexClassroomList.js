import React, { Component } from "react";
import FlexClassroomItem from "../items/FlexClassroomItem";
import "../../css/Classrooms.css";

class FlexClassroomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          class: "Grade 5A",
          subject: "Design",
          nb_students: "12",
          id: "1",
          assignement: [
            { date: "03/20/20", task: "Do your homework" },
            { date: "03/24/20", task: "Finish the plan" }
          ]
        },
        {
          class: "Grade 5B",
          subject: "Maths",
          nb_students: "15",
          id: "2",
          assignement: [
            { date: "03/21/20", task: "List the material you need please" }
          ]
        },
        {
          class: "Grade 6A",
          assignement: [],
          subject: "Interdiscplinary",
          nb_students: "14",
          id: "3"
        },
        { class: "Grade 6B", subject: "General", nb_students: "11", id: "4" }
      ]
    };
  }

  render() {
    const list = this.props.classrooms;

    return (
      <div className="classroomListContainer">
        {list &&
          list.map((item, index) => (
            <FlexClassroomItem key={index} item={item} />
          ))}
      </div>
    );
  }
}

export default FlexClassroomList;
