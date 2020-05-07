import React, { useState, useEffect, useCallback } from "react";
import "../../../css/Classrooms.css";
import {
  Segment,
  Button,
  Form,
  List,
  Icon,
  Grid,
  Divider,
  Label,
} from "semantic-ui-react";
import { withRouter, Redirect } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_CLASSROOM = gql`
  query getClassroom($id: ID!) {
    classroom(id: $id) {
      id
      className
      grade
      students {
        id
        uid
        email
        firstName
        lastName
      }
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
  mutation addStudent($classroomID: ID!, $email: String!) {
    addStudent(classroomID: $classroomID, email: $email) {
      id
    }
  }
`;

const DELETE_STUDENT = gql`
  mutation deleteStudent($classroomID: ID!, $uid: String!, $studentID: ID!) {
    deleteStudent(classroomID: $classroomID, uid: $uid, studentID: $studentID)
  }
`;

const ClassroomDetailsPage = (props) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const initialState = {
    isStudentsActive: true,
    isWorkspaceActive: true,
    currentStudentEmail: "",
    tasksList: [],
    currentTask: "",
  };

  const [state, setState] = useState(initialState);
  const [isLoading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");

  const handleChange = (e, { name, value }) =>
    setState((prevState) => ({ ...prevState, [name]: value }));

  const studentAlreadyIn = (studentsList, email) => {
    return studentsList.map((student) => student.email).includes(email);
  };

  const handleNewStudentSubmit = async (id) => {
    setLoading(true);
    if (studentAlreadyIn(classroom.students, state.currentStudentEmail)) {
      // setMessage("Student has already joined your class.");
      console.log("Student has already joined your class.");
      setLoading(false);
      return;
    }
    if (state.currentStudentEmail.length !== 0) {
      await addStudent({
        variables: {
          classroomID: id,
          email: state.currentStudentEmail,
        },
        refetchQueries: [
          {
            query: GET_CLASSROOM,
            variables: {
              id: id,
            },
          },
        ],
      });
      setState((prevState) => ({
        ...prevState,
        currentStudentEmail: "",
      }));
    }
    setLoading(false);
  };

  const handleDeleteStudent = (uid, id) => {
    // console.log({ uid });
    // console.log({ id });
    // console.log({ classroomID });
    deleteStudent({
      variables: {
        classroomID: classroomID,
        uid: uid,
        studentID: id,
      },
      refetchQueries: [
        {
          query: GET_CLASSROOM,
          variables: {
            id: classroomID,
          },
        },
      ],
    });
  };

  const handleStudentProfile = (email) => {
    console.log("open student profile");
    console.log(email);
  };

  const handleSubmitTask = () => {
    if (state.currentTask.length !== 0) {
      setState((prevState) => ({
        ...prevState,
        tasksList: [...prevState.tasksList, prevState.currentTask],
        currentTask: "",
      }));
    }
  };

  const toggleButton = () => {
    setState((prevState) => ({
      ...prevState,
      isStudentsActive: !prevState.isStudentsActive,
    }));
  };

  const toggleWorkspaceButton = () => {
    setState((prevState) => ({
      ...prevState,
      isWorkspaceActive: !prevState.isWorkspaceActive,
    }));
  };

  const {
    isStudentsActive,
    isWorkspaceActive,
    currentStudentEmail,
    tasksList,
    currentTask,
  } = state;

  const classroomID = props.match.params.id;

  const [addStudent] = useMutation(ADD_STUDENT);
  const [deleteStudent] = useMutation(DELETE_STUDENT);

  const { loading, error, data } = useQuery(GET_CLASSROOM, {
    variables: { id: classroomID },
  });

  let classroom = [];
  if (data && data.classroom) {
    classroom = data.classroom;
  }
  const currentProject = classroom.currentProject;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log({ classroomStudents: classroom.students });

  if (!classroom) {
    return (
      <Redirect
        push
        to={{
          pathname: "/",
          state: { alert: "No Such Classroom" },
        }}
      />
    );
  }

  // if (!state.classList.length) {
  //   setState({
  //     ...state,
  //     classList: classroom.students_name,
  //   });
  // }

  return (
    <div>
      <div className='classroom-title-style'>{classroom.className}</div>
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
            <Form
              className='newStudentInput'
              autoComplete='off'
              onSubmit={() => handleNewStudentSubmit(classroomID)}
            >
              <Form.Group>
                <Form.Input
                  placeholder='Student Email'
                  name='currentStudentEmail'
                  value={currentStudentEmail}
                  onChange={handleChange}
                />
                <Form.Button
                  disabled={studentAlreadyIn(
                    classroom.students,
                    state.currentStudentEmail
                  )}
                  loading={isLoading}
                  content='Add'
                />
                {studentAlreadyIn(
                  classroom.students,
                  state.currentStudentEmail
                ) && (
                  <Label basic color='red' pointing='left'>
                    This student has already joined your class.
                  </Label>
                )}
              </Form.Group>
            </Form>

            {classroom &&
            classroom.students &&
            classroom.students.length === 0 ? (
              <div>
                Add students to your class <Icon name='heart outline' />
              </div>
            ) : (
              classroom.students.map((student, index) => (
                <Segment className='student-name-container' key={index}>
                  <div>
                    {capitalize(`${student.firstName} ${student.lastName}`)}
                  </div>
                  <div>
                    <Button
                      className='student-button-classroom'
                      circular
                      icon='user'
                      onClick={() => {
                        handleStudentProfile(student.email);
                      }}
                    />
                    <Button
                      className='student-button-classroom'
                      circular
                      icon='delete'
                      onClick={() => {
                        handleDeleteStudent(student.uid, student.id);
                      }}
                    />
                  </div>
                </Segment>
              ))
            )}

            {/* <div className='flexbox-container in-section-margin'>
              <div className='section-classroom-title'>TEAMS</div>

              {isMakeTeamsActive ? (
                <Button
                  className='arrow-down-button-classroom'
                  circular
                  icon='angle up'
                  onClick={toggleMakeTeamsButton}
                />
              ) : (
                <Button
                  className='arrow-down-button-classroom'
                  circular
                  icon='angle down'
                  onClick={toggleMakeTeamsButton}
                />
              )}
            </div> */}

            {/* <Divider />
            {classList && classList.length === 0 ? (
              <div>
                Add students to your class <Icon name='heart outline' />
              </div>
            ) : (
              <div>
                {teams.length === 0 ? (
                  <div>
                    <div className='flexbox'>
                      <div>You haven't assigned students a team yet.</div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className='flexbox'>
                      {currentProject && (
                        <div>
                          Yay, here are the "{currentProject.title}" teams!
                        </div>
                      )}
                    </div>

                    <div className='flexbox'>
                      {teams.map((team, index) => (
                        <div key={index} style={{ textAlign: "center" }}>
                          <div style={{ fontWeight: "bolder" }}>
                            Team {index + 1}
                          </div>
                          {team.map((student, index) => (
                            <div key={index}>{student}</div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {isMakeTeamsActive && (
                  <div>
                    {/* <div className='flexbox'>
                      <Button
                        style={{ width: "95%" }}
                        content={
                          teams.length === 0
                            ? `Make Teams for the current project: ${projects[0].title}`
                            : `Make New Teams for the current project: ${projects[0].title}`
                        }
                        onClick={makeTeams}
                      />
                    </div>

                    <Form
                      className='teamCountForm'
                      autoComplete='off'
                      onSubmit={handleNumberSubmit}
                    >
                      <Form.Select
                        label='How many teams?'
                        name='teamCount'
                        onChange={handleChange}
                        options={options}
                        value={teamCount}
                        placeholder='number'
                        id='teamCountInput'
                      />
                    </Form>

                    <TeamMaker
                      teams={teams}
                      handleChange={handleChangeDnd}
                      moveStudent={moveStudent}
                      generateRandomTeams={generateRandomTeams}
                      students={classList}
                      teamCount={teamCount}
                    />
                  </div>
                )}
              </div>
            )} */}

            {/* <Divider />
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
            </List>*/}
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
            {/* <List bulleted>
              <div>What's in this section?</div>
              <List.Item>Current project</List.Item>
              <List.Item>
                Possibility to post assignements, homework, messages to the
                class
              </List.Item>
              <List.Item>Archived projects</List.Item>
            </List> */}

            <Segment className='currentProjectContainer inWorkspaceContainer'>
              <Grid className='currentProjectGrid' stackable columns={2}>
                <Grid.Column width={4}></Grid.Column>
                <Grid.Column width={12}>
                  <Segment className='currentProjectColumn'>
                    {currentProject && (
                      <div>Current Project: {currentProject.title}</div>
                    )}
                    {currentProject && (
                      <div>{currentProject.description} (Read from db)</div>
                    )}
                    {/* <div>{currentProject.learning_objectives}</div> */}
                    <div>
                      <div className=''>{"Standards".toUpperCase()}</div>
                      Read the standards from the database
                    </div>
                  </Segment>
                </Grid.Column>
              </Grid>
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
                      <List.Item>{capitalize(`${task}`)}</List.Item>
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
