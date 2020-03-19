import React, { Component } from "react";
import { Segment, Header, Icon, Button } from "semantic-ui-react";
import FlexClassroomList from '../../lists/FlexClassroomList'

const square = { width: 175, height: 175};

class ClassroomsPage extends Component {
  render() {
    return (
      <div>
        <div className='project-title-style'>Hi Classroom!</div>
        <FlexClassroomList/>
        <Segment circular inverted style={square}>
        <Header inverted as='h2'>
            Add a new class
          </Header>
        <Button circular icon='add' />
        </Segment>
      </div>
    );
  }
}

export default ClassroomsPage;
