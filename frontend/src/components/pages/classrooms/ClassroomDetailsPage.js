import React, { useState } from "react";
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
  Dropdown,
  Select,
  Input
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
    isMakeTeamsActive: false,
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
    teams_number: ""
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e, { name, value }) =>
    setState(prevState => ({ ...prevState, [name]: value }));

  const handleSubmit = () => {
    var boards = document.getElementsByClassName("board");

    if (boards.length != 0) {
      const teams = Array.from(boards).map(board => {
        return Array.from(board.children).map(card => card.innerText);
      });
    }

    if (state.currentStudentName.length !== 0) {
      setState(prevState => ({
        ...prevState,
        classList: [...prevState.classList, prevState.currentStudentName],
        currentStudentName: "",
        teams: teams
      }));
    }
    console.log("the state is", state);
  };

  const handleNumberSubmit = () => {
    const { teams_number } = state;

    setState(prevState => ({ ...prevState, teams_number: teams_number }));
  };

  const handleDeleteStudent = name => {
    console.log("delete student");
    console.log(name);

    const old_teams = state.teams;

    let new_teams = [];
    new_teams = old_teams.map((team) => {
      return team.filter(student => student !== name)
    })

    setState(prevState => ({
      ...prevState,
      classList: prevState.classList.filter(student => student !== name),
      teams: new_teams
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

  const toggleMakeTeamsButton = () => {
    setState(prevState => ({
      ...prevState,
      isMakeTeamsActive: !prevState.isMakeTeamsActive
    }));
  };

  const makeTeams = () => {
    var boards = document.getElementsByClassName("board");

    const teams = Array.from(boards).map(board => {
      return Array.from(board.children).map(card => card.innerText);
    });

    // console.log(teams);
    setState(prevState => ({
      ...prevState,
      teams: teams
    }));
    // console.log("teams state", {state});
  };

  const {
    isStudentsActive,
    isWorkspaceActive,
    currentStudentName,
    classList,
    tasksList,
    currentTask,
    teams,
    isMakeTeamsActive,
    teams_number
  } = state;

  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const projects = data.projects;

  const createDnDteam = number => {
    if (number > state.classList.length / 2) {
      return (
        <div style={{ textAlign: "center" }}>
          <div>Wow, that's a lot of teams!</div>{" "}
          <div>Please, select a smaller team number!</div>
        </div>
      );
    }
    let teams = [];

    // Outer loop to create parent
    for (let i = 0; i < number; i++) {
      let children = [];
      //Inner loop to create children
      if (i === 0) {
        state.classList
          .slice(i, state.classList.length / number)
          .map((student, index) =>
            children.push(
              <DragAndDropCard
                id={"card_" + `${student}`.capitalize()}
                className='card'
                draggable='true'
                key={index}
              >
                <Segment className='student-name-container'>
                  <div>{`${student}`.capitalize()}</div>
                </Segment>
              </DragAndDropCard>
            )
          );
      } else {
        state.classList
          .slice(
            i * (state.classList.length / number),
            (i + 1) * (state.classList.length / number)
          )
          .map((student, index) =>
            children.push(
              <DragAndDropCard
                id={"card_" + `${student}`.capitalize()}
                className='card'
                draggable='true'
                key={index}
              >
                <Segment className='student-name-container'>
                  <div>{`${student}`.capitalize()}</div>
                </Segment>
              </DragAndDropCard>
            )
          );
      }
      //Create the parent and add the children
      teams.push(
        <DragAndDropComponent key={i} id={"team_board_" + `${i}`} className='board'>
          {children}
        </DragAndDropComponent>
      );
    }
    return teams;
  };

  return (
    <div>
      {console.log(state)}
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
                        You have assigned students a team for the "
                        {projects[0].title}" project.
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
                    <div className='flexbox'>

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

                    <Form autoComplete='off' onSubmit={handleNumberSubmit}>
                      <Form.Input
                        placeholder='How many teams?'
                        label='How many teams?'
                        name='teams_number'
                        value={teams_number}
                        onChange={handleChange}
                      />
                    </Form>

                    <div className='flexbox'>
                      {teams_number != "" && createDnDteam(`${teams_number}`)}
                      {/* <DragAndDropComponent id='team_board_1' className='board'>
                        {classList.slice(0, 5).map((student, index) => (
                          <DragAndDropCard
                            id={"card_" + `${student}`.capitalize()}
                            className='card'
                            draggable='true'
                            key={index}
                          >
                            <Segment className='student-name-container'>
                              <div>{`${student}`.capitalize()}</div>
                            </Segment>
                          </DragAndDropCard>
                        ))}
                      </DragAndDropComponent>
                      <DragAndDropComponent id='team_board_2' className='board'>
                        {classList.slice(5, 9).map((student, index) => (
                          <DragAndDropCard
                            id={"card_" + `${student}`.capitalize()}
                            className='card'
                            key={index}
                            draggable='true'
                          >
                            <Segment className='student-name-container'>
                              <div>{`${student}`.capitalize()}</div>
                            </Segment>
                          </DragAndDropCard>
                        ))}
                      </DragAndDropComponent>
                      <DragAndDropComponent id='team_board_3' className='board'>
                        {classList.slice(9, 18).map((student, index) => (
                          <DragAndDropCard
                            id={"card_" + `${student}`.capitalize()}
                            className='card'
                            draggable='true'
                            key={index}
                          >
                            <Segment className='student-name-container'>
                              <div>{`${student}`.capitalize()}</div>
                            </Segment>
                          </DragAndDropCard>
                        ))}
                      </DragAndDropComponent> */}
                    </div>
                  </div>
                )}
              </div>
            )}

            <Divider />
            <Divider />
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
          </Segment>
        )}
      </Segment.Group>
    </div>
  );
};

export default withRouter(ClassroomDetailsPage);
