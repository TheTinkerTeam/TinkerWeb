import React, { useState, useEffect } from "react";
import "../../../css/Classrooms.css";
import {
  Segment,
  Button,
  Form,
  List,
  Icon,
  Grid,
  Divider
} from "semantic-ui-react";
import { withRouter, Redirect } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import TeamMaker from "./TeamMaker";

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
    isMakeTeamsActive: true,
    currentStudentName: "",
    classList: [
      "Lucas",
      "Edith",
      "Toto",
      "Joseph",
      "Mike",
      "Chat",
      "Chien",
      "Banane",
      "Loup",
      "Lion",
      "Tigre",
      "Grenade"
    ],
    tasksList: [],
    currentTask: "",
    teams: [],
    teamCount: 3
  };

  const [state, setState] = useState(initialState);

  const generateRandomTeams = (teamCount, students) => {
    let teamsCreated = [];
    for (let i = 0; i < teamCount; i++) {
      let children = [];
      if (i === 0) {
        students
          .slice(i, students.length / teamCount)
          .map((student, index) => children.push(`${student}`.capitalize()));
      } else {
        students
          .slice(
            i * (students.length / teamCount),
            (i + 1) * (students.length / teamCount)
          )
          .map((student, index) => children.push(`${student}`.capitalize()));
      }
      //Create the parent and add the children
      teamsCreated.push(children);
    }
    return teamsCreated;
  };

  const [teams, setTeams] = useState(
    generateRandomTeams(state.teamCount, state.classList)
  );

  const moveStudent = (studentId, originTeamId, destinationTeamId, teams) => {
    const newTeams = [...teams];

    newTeams[originTeamId] = newTeams[originTeamId].filter(
      sid => sid !== studentId
    );

    newTeams[destinationTeamId].push(studentId);

    console.log("newTeams", newTeams);
    return newTeams;
  };

  useEffect(() => {
    setTeams(generateRandomTeams(state.teamCount, state.classList));
  }, [state.teamCount]);

  const handleChangeDnd = (studentId, originTeamId, destinationTeamId) => {
    // console.log("studentId =", studentId);
    // console.log("originTeamId =", originTeamId);
    // console.log("destinationTeamId =", destinationTeamId);

    // console.log("Before moving, these are the teams:", teams);
    setTeams(moveStudent(studentId, originTeamId, destinationTeamId, teams));
    // console.log("After moving, these are the teams:", teams);
  };

  const handleChange = (e, { name, value }) =>
    setState(prevState => ({ ...prevState, [name]: value }));

  const handleNewStudentSubmit = (id) => {
    let newTeams = teams;
    newTeams[0] = [...teams[0], state.currentStudentName.capitalize()];

    if (state.currentStudentName.length !== 0) {
      addStudent({
        variables: {
          id,
          name: state.currentStudentName
        }
      });
      setState(prevState => ({
        ...prevState,
        classList: [
          ...prevState.classList,
          prevState.currentStudentName.capitalize()
        ],
        currentStudentName: ""
      }));
      setTeams(newTeams);
    }
  };

  const handleNumberSubmit = () => {
    const { teamCount } = state;

    setState(prevState => ({ ...prevState, teamCount: teamCount }));
  };

  const handleDeleteStudent = name => {
    const oldTeams = teams;
    let newTeams = [];
    newTeams = oldTeams.map(team => {
      return team.filter(student => student !== name);
    });

    setState(prevState => ({
      ...prevState,
      classList: prevState.classList.filter(student => student !== name)
    }));
    setTeams(newTeams);
  };

  const handleStudentProfile = name => {
    console.log("open student profile");
    console.log(name);
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

  const toggleMakeTeamsButton = () => {
    setState(prevState => ({
      ...prevState,
      isMakeTeamsActive: !prevState.isMakeTeamsActive
    }));
  };

  const createTeamsCountOptions = () => {
    let options = [];
    for (let i = 0; i < (state.classList.length / 2); i++) {
      options.push({ key: `${i + 1}`, text: `${i + 1}`, value: `${i + 1}`})
    }
    return options;
  }

  const options = createTeamsCountOptions();

  const {
    isStudentsActive,
    isWorkspaceActive,
    currentStudentName,
    classList,
    tasksList,
    currentTask,
    isMakeTeamsActive,
    teamCount
  } = state;

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
            <Form className="newStudentInput" autoComplete="off" onSubmit={() => handleNewStudentSubmit(routeParam)}>
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
                </Segment>
              ))
            )}

            <div className='flexbox-container in-section-margin'>
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
            </div>

            <Divider />
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
                      <div>
                        Yay, here are the "
                        {currentProject.title}" teams!
                      </div>
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
                    </div> */}

                    <Form className="teamCountForm" autoComplete='off' onSubmit={handleNumberSubmit}>
                      <Form.Select
                        label='How many teams?'
                        name='teamCount'
                        onChange={handleChange}
                        options={options}
                        value={teamCount}
                        placeholder="number"
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
            )}

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
                <Grid.Column width={4}>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Segment className='currentProjectColumn'>
                    <div>Current Project: {currentProject.title}</div>
                    <div>{currentProject.description} (Read from db)</div>
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
