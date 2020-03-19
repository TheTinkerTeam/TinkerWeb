import React, { Component } from "react";
import { Segment, Header, Icon, Button, Divider } from "semantic-ui-react";
import FlexClassroomList from "../../lists/FlexClassroomList";

const square = { width: 175, height: 175 };

class ClassroomsPage extends Component {
  render() {
    return (
      <div>
        <div className='classrooms-title-container'>
          <div className='classroom-title-style'>Hi Classroom!</div>
        </div>
        <FlexClassroomList />
        <Divider style={{marginTop: "3em"}}/>
        {/* <Segment circular inverted style={square}>
          <Header inverted as='h2'>
            Add a new class
          </Header>
          <Button circular icon='add' />
        </Segment> */}
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
