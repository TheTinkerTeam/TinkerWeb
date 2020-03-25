import React, { Component, useState, useEffect } from "react";
import "../../../css/Classrooms.css";
import {
  Segment,
  Button,
  Form,
  List,
  Icon,
  Grid,
  Image
} from "semantic-ui-react";
import { withRouter, Redirect } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_CLASSROOM = gql`
  query getClassroom($id: ID!) {
    classroom(id: $id) {
      id
      class
      students_name
      assignments {
        date
        task
      }
      currentProject {
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
  }
`;

const ADD_STUDENT = gql`
  mutation addStudent($id: ID!, $name: String!) {
    addStudent(id: $id, name: $name)
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

  const handleSubmit = id => {
    if (state.currentStudentName.length !== 0) {
      addStudent({
        variables: {
          id,
          name: state.currentStudentName
        }
      });
      setState(prevState => ({
        ...prevState,
        classList: [...prevState.classList, prevState.currentStudentName],
        currentStudentName: ""
      }));
    }
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

  // const toggleButton = () => {
  //   this.setState(({ isStudentsActive }) => ({
  //     isStudentsActive: !isStudentsActive
  //   }));
  // };

  const routeParam = props.match.params.id;

  const [addStudent] = useMutation(ADD_STUDENT);

  const { loading, error, data } = useQuery(GET_CLASSROOM, {
    variables: { id: routeParam }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const classroom = data.classroom;
  console.log(classroom);
  if (!classroom) {
    return (
      <Redirect
        push
        to={{
          pathname: "/",
          state: { alert: "No Such Classroom" }
        }}
      />
    );
  }
  if (!state.classList.length) {
    setState({
      ...state,
      classList: classroom.students_name
    });
  }
  const currentProject = classroom.currentProject;
  return (
    <div>
      <div className="classroom-title-style">{classroom.class}</div>
      <Segment.Group className="paragraph-style display-in-box">
        <Segment className="section-title">
          <div className="flexbox-container">
            <div>STUDENTS</div>
            {isStudentsActive ? (
              <Button
                className="arrow-down-button-classroom"
                circular
                icon="angle up"
                onClick={toggleButton}
              />
            ) : (
              <Button
                className="arrow-down-button-classroom"
                circular
                icon="angle down"
                onClick={toggleButton}
              />
            )}
          </div>
        </Segment>
        {isStudentsActive && (
          <Segment>
            <Form autoComplete="off" onSubmit={() => handleSubmit(routeParam)}>
              <Form.Group>
                <Form.Input
                  placeholder="Student Name"
                  name="currentStudentName"
                  value={currentStudentName}
                  onChange={handleChange}
                />
                <Form.Button content="Add" />
              </Form.Group>
            </Form>
            {classList && classList.length === 0 ? (
              <div>
                Yay, add students to your class <Icon name="heart outline" />
              </div>
            ) : (
              classList.map((student, index) => (
                <List bulleted key={index}>
                  <List.Item>{`${student}`.capitalize()}</List.Item>
                </List>
              ))
            )}
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

      <Segment.Group className="paragraph-style display-in-box">
        <Segment className="section-title">
          <div className="flexbox-container">
            <div>WORKSPACE</div>
            {isWorkspaceActive ? (
              <Button
                className="arrow-down-button-classroom"
                circular
                icon="angle up"
                onClick={toggleWorkspaceButton}
              />
            ) : (
              <Button
                className="arrow-down-button-classroom"
                circular
                icon="angle down"
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
            <Segment className="currentProjectContainer inWorkspaceContainer">
              <Grid className="currentProjectGrid" stackable columns={2}>
                <Grid.Column width={4}>
                  {/* <Segment className="currentProjectColumn"> */}
                  {/* <Image centered src={projects[0].imageURL} /> */}
                  {/* </Segment> */}
                </Grid.Column>
                <Grid.Column width={12}>
                  <Segment className="currentProjectColumn">
                    <div>Current Project: {currentProject.title}</div>
                    <div>{currentProject.description} (Read from db)</div>
                    {/* <div>{projects[0].learning_objectives}</div> */}
                    <div>
                      <div className="">{"Standards".toUpperCase()}</div>
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
                <Form autoComplete="off" onSubmit={handleSubmitTask}>
                  <Form.Group>
                    <Form.Input
                      placeholder="Share a message with your students"
                      name="currentTask"
                      value={currentTask}
                      onChange={handleChange}
                      style={{ width: "300px" }}
                    />
                    <Form.Button content="Post" />
                  </Form.Group>
                </Form>
                {tasksList && tasksList.length === 0 ? (
                  <div>
                    No task assigned! <Icon name="heart outline" />
                  </div>
                ) : (
                  tasksList.map((task, index) => (
                    <Segment
                      className="feedContainer inWorkspaceContainer"
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
