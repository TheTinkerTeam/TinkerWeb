import React, { Fragment } from "react";
import { Segment, Image, Button, Modal, Icon } from "semantic-ui-react";
import "../../../../css/SignedOutMenu.css";

import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { useSelector } from "react-redux";

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

  const handleOnClick = async (classroomId, projectId) => {
    console.log("ASSIGN");
    console.log("projectId = ", projectId);
    console.log("classroomId = ", classroomId);
    // await addCurrentProject(classroomId, projectId);
    await addCurrentProject({
      variables: {
        classroomId: classroomId,
        projectId: projectId,
      },
    });
    props.history.push(`/classrooms/${classroomId}`);
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
                <Button.Group color='blue' widths='4'>
                  {classrooms.map((classroom, index) => {
                    return (
                      <Fragment key={classroom.id}>
                        <Button
                          onClick={() => handleOnClick(classroom.id, projectId)}
                        >
                          {classroom.className}
                        </Button>
                        {index !== classrooms.length - 1 && <Button.Or />}
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
