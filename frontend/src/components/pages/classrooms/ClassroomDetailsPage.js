import React, { Component } from "react";
import "../../../css/Classrooms.css";
import { Segment, Button } from "semantic-ui-react";

class ClassroomDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isStudentsActive: true };
  }

  render() {
    const { isStudentsActive } = this.state;

    const toggleButton = () => {
      this.setState(({ isStudentsActive }) => ({
        isStudentsActive: !isStudentsActive
      }));
    };

    return (
      <div>
        <div className='classroom-title-style'>
          Hi, I am the "GRADE" ClassroomDetailsPage!
        </div>
        <Segment.Group className='paragraph-style display-in-box'>
          <Segment className='section-title'>
            <div className='flexbox-container'>
              <div>STUDENTS</div>
              {isStudentsActive ? (
                <Button
                  className='arrow-down-button-classroom'
                  circular
                  icon='angle up'
                  onClick={toggleButton}
                />
              ) : (
                <Button
                  className='arrow-down-button-classroom'
                  circular
                  icon='angle down'
                  onClick={toggleButton}
                />
              )}
            </div>
            {isStudentsActive && <div>Blabla</div>}
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default ClassroomDetailsPage;
