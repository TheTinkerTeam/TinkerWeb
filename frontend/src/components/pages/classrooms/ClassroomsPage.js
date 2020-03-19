import React, { Component } from "react";
import { Icon, Button, Divider } from "semantic-ui-react";
import FlexClassroomList from "../../lists/FlexClassroomList";
import "../../../css/Classrooms.css";

class ClassroomsPage extends Component {
  render() {
    return (
      <div>
        <div className='classrooms-title-container'>
          <div className='classroom-title-style'>Hi Classroom!</div>
        </div>
        <FlexClassroomList />
        <Divider style={{marginTop: "3em"}}/>
        <div>
          <Button className='transparent-button' icon labelPosition='left'>
            <Icon name='plus' />
            Add a new class
          </Button>
        </div>
      </div>
    );
  }
}

export default ClassroomsPage;
