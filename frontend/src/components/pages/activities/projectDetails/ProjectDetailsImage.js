import React, { Fragment, useState } from "react";
import { Segment, Image, Button, Modal, Icon } from "semantic-ui-react";
import "../../../../css/SignedOutMenu.css";

import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { useSelector } from "react-redux";

import { StyledButtonClasses } from './styledComponents/StyledButtonClasses';

const ADD_CURRENT_PROJECT = gql`
  mutation addCurrentProject($classroomId: ID!, $projectId: ID!) {
    addCurrentProject(classroomId: $classroomId, projectId: $projectId) {
      id
    }
  }
`;

const ProjectDetailsImage = ({
  props,
  image,
  title,
  classrooms,
  projectId,
}) => {
  const auth = useSelector((state) => state.firebase.auth);

  const [addCurrentProject] = useMutation(ADD_CURRENT_PROJECT);

  const [hover, setHover] = useState(false);

  const handleOnClick = async (
    classroomId,
    projectId,
    classname,
    currentProject
  ) => {
    console.log("ASSIGN");
    console.log("projectId = ", projectId);
    console.log("classroomId = ", classroomId);
    if (!currentProject) {
      console.log("ASSIGN PROJECT");
      await addCurrentProject({
        variables: {
          classroomId: classroomId,
          projectId: projectId,
        },
      });
      props.history.push(`/classrooms/${classroomId}`);
    } else {
      if (
        window.confirm(
          `Are you sure you want to assign "${title}" to ${classname}? This will overwrite its current project: "${currentProject.title}"`
        )
      ) {
        console.log("YES");
        await addCurrentProject({
          variables: {
            classroomId: classroomId,
            projectId: projectId,
          },
        });
        props.history.push(`/classrooms/${classroomId}`);
      } else {
        console.log("NO");
      }
    }

    // await addCurrentProject(classroomId, projectId);
  };

  const styles = {
    hover: {
      backgroundColor: 'white',
    },
  };

  return (
    <Segment style={{ display: "flex", justifyContent: "space-between" }}>
      <Image src={image} size='small' />
      {auth.uid && (
        <div>
          <Modal
            trigger={
              <Button
                basic
                className='custom'
                icon
                labelPosition='right'
                //id='getStartedButton'
              >
                {`Assign ${title} to your class`}
                <Icon name='angle right' />
              </Button>
            }
          >
            <Modal.Header>{`Assign ${title} to a class`}</Modal.Header>
            <Modal.Content>
              {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
              <div style={{ textAlign: "center" }}>
                {/* </div><Button.Group color='blue' widths='5'> */}
                <Button.Group
                  color='red'
                  vertical
                  //style={{ fontFamily: "Roboto Mono" }}
                >
                  {classrooms.map((classroom, index) => {
                    return (
                      <Fragment key={classroom.id}>
                        <StyledButtonClasses
                          key={index}
                          //onMouseEnter={() => {
                          //setHover(true);
                          //}}
                          //onMouseLeave={() => {
                          //setHover(false);
                          //}}
                          //color="red"
                          //style={{
                            //fontFamily: "Roboto Mono",
                            //fontSize: "1.2rem",
                            //backgroundColor: "#F5514C",
                          //}}
                          disabled={classroom.currentProject.title === title}
                          onClick={() =>
                            handleOnClick(
                              classroom.id,
                              projectId,
                              classroom.className,
                              classroom.currentProject
                            )
                          }
                        >
                          {classroom.className} <br />
                          {classroom.currentProject.title === title &&
                            "(already assigned)"}
                        </StyledButtonClasses>
                        {/* {index !== classrooms.length - 1 && <Button.Or />} */}
                      </Fragment>
                    );
                  })}
                </Button.Group>
              </div>
            </Modal.Content>
          </Modal>
        </div>
      )}
    </Segment>
  );
};

export default ProjectDetailsImage;
