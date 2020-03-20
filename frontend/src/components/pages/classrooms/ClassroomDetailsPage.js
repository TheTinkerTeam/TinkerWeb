import React, { Component, useState } from "react";
import "../../../css/Classrooms.css";
import { Segment, Button, Form, List, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
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
    classList: []
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
    classList
  } = state;

  // const toggleButton = () => {
  //   this.setState(({ isStudentsActive }) => ({
  //     isStudentsActive: !isStudentsActive
  //   }));
  // };

  const routeParam = props.match.params.id;

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id: routeParam }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const project = data.project;

  console.log(state);

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
                Yay, add students to your class <Icon name='heart outline' />
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
            <Segment className='currentProjectContainer'>
              Current Project
            </Segment>
            <Segment className='feedContainer'>Feed</Segment>
          </Segment>
        )}
      </Segment.Group>
    </div>
  );
};

export default withRouter(ClassroomDetailsPage);
