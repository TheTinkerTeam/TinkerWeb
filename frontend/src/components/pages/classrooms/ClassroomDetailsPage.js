import React, { Component, useState } from "react";
import "../../../css/Classrooms.css";
import {
  Segment,
  Button,
  Form,
  List,
  Icon,
  Grid,
  Image,
  Divider,
  Dropdown
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import DragAndDropComponent from "../../sections/DragAndDropComponent";
import DragAndDropCard from "../../sections/DragAndDropCard";

// const GET_PROJECT = gql`
//   query getProject($id: ID!) {
//     project(id: $id) {
//       id
//       title
//       description
//       imageURL
//       learning_objectives
//       subjects
//       tags
//       grades
//     }
//   }
// `;

const GET_PROJECTS = gql`
  {
    projects {
      id
      title
      description
      imageURL
      learning_objectives
      subjects
      tags
      grades
    }
  }
`;

const ClassroomDetailsPage = props => {
  const initialState = {
    isStudentsActive: true,
    isWorkspaceActive: true,
    currentStudentName: "",
    classList: [],
    tasksList: [],
    currentTask: ""
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e, { name, value }) =>
    setState(prevState => ({ ...prevState, [name]: value }));

  const handleSubmit = () => {
    if (state.currentStudentName.length !== 0) {
      setState(prevState => ({
        ...prevState,
        classList: [...prevState.classList, prevState.currentStudentName],
        currentStudentName: ""
      }));
    }
  };

  const handleDeleteStudent = name => {
    console.log("delete student");
    console.log(name);
    setState(prevState => ({
      ...prevState,
      classList: prevState.classList.filter(student => student !== name)
    }));
  };

  const handleStudentProfile = name => {
    console.log("open student profile");
    console.log(name);
    // setState(prevState => ({
    //   ...prevState,
    //   classList: prevState.classList.filter(student => student !== name)
    // }));
  };

  const handleSubmitTask = () => {
    if (state.currentTask.length !== 0) {
      setState(prevState => ({
        ...prevState,
        tasksList: [...prevState.tasksList, prevState.currentTask],
        currentTask: ""
      }));
    }
  };

  const toggleButton = () => {
    setState(prevState => ({
      ...prevState,
      isStudentsActive: !prevState.isStudentsActive
    }));
  };

  const toggleWorkspaceButton = () => {
    setState(prevState => ({
      ...prevState,
      isWorkspaceActive: !prevState.isWorkspaceActive
    }));
  };

  const {
    isStudentsActive,
    isWorkspaceActive,
    currentStudentName,
    classList,
    tasksList,
    currentTask
  } = state;

  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const projects = data.projects;

  console.log(state);
  console.log(projects);

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
        </Segment>
        {isStudentsActive && (
          <Segment>
            <Form autoComplete='off' onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Input
                  placeholder='Student Name'
                  name='currentStudentName'
                  value={currentStudentName}
                  onChange={handleChange}
                />
                <Form.Button content='Add' />
              </Form.Group>
            </Form>
            {classList && classList.length === 0 ? (
              <div>
                Add students to your class <Icon name='heart outline' />
              </div>
            ) : (
              classList.map((student, index) => (
                <Segment className='student-name-container' key={index}>
                  <div>{`${student}`.capitalize()}</div>
                  <div>
                    <Button
                      className='student-button-classroom'
                      circular
                      icon='user'
                      onClick={() => {
                        handleStudentProfile(`${student}`);
                      }}
                    />
                    <Button
                      className='student-button-classroom'
                      circular
                      icon='delete'
                      onClick={() => {
                        handleDeleteStudent(`${student}`);
                      }}
                    />
                  </div>
                  {/* <Button className='student-button-classroom'>
                    <Dropdown
                      floating
                      className='button icon'
                      trigger={<React.Fragment />}
                      text='File'
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item
                          icon='user'
                          text='Display Learning Profile'
                        />
                        <Dropdown.Item
                          icon='delete'
                          text='Delete'
                          onClick={() => {
                            handleDeleteStudent(`${student}`);
                          }}
                        />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Button> */}
                </Segment>
              ))
            )}
            <Divider />
            <div className='flexbox'>
              <DragAndDropComponent id='board_1' className='board'>
                <DragAndDropCard id='card_1' className='card' draggable='true'>
                  <p>Card 1</p>
                </DragAndDropCard>
              </DragAndDropComponent>

              <DragAndDropComponent id='board_2' className='board'>
                <DragAndDropCard id='card_2' className='card' draggable='true'>
                  <p>Card 2</p>
                </DragAndDropCard>
              </DragAndDropComponent>
            </div>
            <Divider />
            <List bulleted>
              <div>What's in this section?</div>
              <List.Item>Option to make groups/team</List.Item>
              <List.Item>Percentage of completion</List.Item>
              <List.Item>
                Click to see the learning profile / skills graph of each student
              </List.Item>
              <List.Item>
                Possibility to click on a student to see his digital journal and
                improvements.
              </List.Item>
            </List>
          </Segment>
        )}
      </Segment.Group>

      <Segment.Group className='paragraph-style display-in-box'>
        <Segment className='section-title'>
          <div className='flexbox-container'>
            <div>WORKSPACE</div>
            {isWorkspaceActive ? (
              <Button
                className='arrow-down-button-classroom'
                circular
                icon='angle up'
                onClick={toggleWorkspaceButton}
              />
            ) : (
              <Button
                className='arrow-down-button-classroom'
                circular
                icon='angle down'
                onClick={toggleWorkspaceButton}
              />
            )}
          </div>
        </Segment>

        {isWorkspaceActive && (
          <Segment>
            <List bulleted>
              <div>What's in this section?</div>
              <List.Item>Current project</List.Item>
              <List.Item>
                Possibility to post assignements, homework, messages to the
                class
              </List.Item>
              <List.Item>Archived projects</List.Item>
            </List>
            <Segment className='currentProjectContainer inWorkspaceContainer'>
              <Grid className='currentProjectGrid' stackable columns={2}>
                <Grid.Column width={4}>
                  {/* <Segment className="currentProjectColumn"> */}
                  {/* <Image centered src={projects[0].imageURL} /> */}
                  {/* </Segment> */}
                </Grid.Column>
                <Grid.Column width={12}>
                  <Segment className='currentProjectColumn'>
                    <div>Current Project: {projects[0].title}</div>
                    <div>{projects[0].description} (Read from db)</div>
                    {/* <div>{projects[0].learning_objectives}</div> */}
                    <div>
                      <div className=''>{"Standards".toUpperCase()}</div>
                      Read the standards from the database
                    </div>
                  </Segment>
                </Grid.Column>
              </Grid>

              {/* Current Project
			  {projects[0].title} */}
            </Segment>

            {isWorkspaceActive && (
              <div>
                <Form autoComplete='off' onSubmit={handleSubmitTask}>
                  <Form.Group>
                    <Form.Input
                      placeholder='Share a message with your students'
                      name='currentTask'
                      value={currentTask}
                      onChange={handleChange}
                      style={{ width: "300px" }}
                    />
                    <Form.Button content='Post' />
                  </Form.Group>
                </Form>
                {tasksList && tasksList.length === 0 ? (
                  <div>
                    No task assigned! <Icon name='heart outline' />
                  </div>
                ) : (
                  tasksList.map((task, index) => (
                    <Segment
                      className='feedContainer inWorkspaceContainer'
                      key={index}
                    >
                      <List.Item>{`${task}`.capitalize()}</List.Item>
                    </Segment>
                  ))
                )}
              </div>
            )}
            {/* <Segment className='feedContainer inWorkspaceContainer'>Feed</Segment> */}
          </Segment>
        )}
      </Segment.Group>
    </div>
  );
};

export default withRouter(ClassroomDetailsPage);
