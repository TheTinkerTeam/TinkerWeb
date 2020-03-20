import React, { Component } from "react";
import "../../../css/Classrooms.css";
import { Segment, Button, Form, List, Icon } from "semantic-ui-react";

class ClassroomDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStudentsActive: true,
      currentStudentName: "",
      classList: []
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    if (this.state.currentStudentName.length !== 0) {
      this.setState(prevState => ({
        classList: [...prevState.classList, prevState.currentStudentName],
        currentStudentName: ""
      }));
    }
  };

  toggleButton = () => {
    this.setState(prevState => ({
      isStudentsActive: !prevState.isStudentsActive
    }));
  };

  render() {
    const { isStudentsActive, currentStudentName, classList } = this.state;

    // const toggleButton = () => {
    //   this.setState(({ isStudentsActive }) => ({
    //     isStudentsActive: !isStudentsActive
    //   }));
    // };

    console.log(this.state);

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
                  onClick={this.toggleButton}
                />
              ) : (
                <Button
                  className='arrow-down-button-classroom'
                  circular
                  icon='angle down'
                  onClick={this.toggleButton}
                />
              )}
            </div>
            {/* {isStudentsActive && <div>Blabla</div>} */}
          </Segment>
          {isStudentsActive && (
            <Segment>
              {/* <div>Blabla</div> */}
              <Form autoComplete="off" onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Input
                    placeholder='Student Name'
                    name='currentStudentName'
                    value={currentStudentName}
                    onChange={this.handleChange}
                  />
                  <Form.Button content='Add' />
                </Form.Group>
              </Form>
              {classList.length === 0 ? (
                <div>Yay, add students to your class <Icon name='heart outline'/></div>
              ) : (
                classList.map((student, index) => (
                  <List bulleted key={index}>
                    <List.Item>{`${student}`.capitalize()}</List.Item>
                  </List>
                ))
              )}
            </Segment>
          )}
        </Segment.Group>
      </div>
    );
  }
}

export default ClassroomDetailsPage;
