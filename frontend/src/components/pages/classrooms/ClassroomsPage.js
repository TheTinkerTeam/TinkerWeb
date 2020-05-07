import React, { useState } from "react";
import { Icon, Button, Divider, Modal, Image, Form } from "semantic-ui-react";
import FlexClassroomList from "../../lists/FlexClassroomList";
import "../../../css/Classrooms.css";

import { useForm } from "react-hook-form";

import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_CLASSROOMS = gql`
  query {
    classrooms {
      id
      className
      students{
        id
      }
      grade
      assignments {
        date
        task
      }
    }
  }
`;

const ADD_CLASSROOM = gql`
  mutation addClassroom($className: String!, $grade: String!) {
    addClassroom(className: $className, grade: $grade) {
      id
      className
      grade
      subject
      students_name
      assignments {
        date
        task
      }
      currentProject {
        id
        title
      }
      archivedProjects {
        id
        title
      }
    }
  }
`;

const ClassroomsPage = () => {
  const { loading, error, data } = useQuery(GET_CLASSROOMS);
  const [addClassroom] = useMutation(ADD_CLASSROOM);

  console.log({data})

  // console.log(GET_CLASSROOMS);
  // console.log({data});
  const { register, handleSubmit, errors } = useForm();
  const [isModalOpen, setModalOpen] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onSubmit = (data) => {
    console.log({ data });
    addClassroom({
      variables: {
        className: data.className,
        grade: data.grade,
      },
      refetchQueries: [
        {
          query: GET_CLASSROOMS,
        },
      ],
    });
    setModalOpen(false);
  };

  return (
    <div>
      <div className='classrooms-title-container'>
        <div className='classroom-title-style'>Hi Classroom!</div>
      </div>
      <FlexClassroomList classrooms={data.classrooms} />
      <Divider style={{ marginTop: "3em" }} />
      <div>
        <Button
          onClick={() => setModalOpen(true)}
          className='transparent-button'
          icon
          labelPosition='left'
        >
          <Icon name='plus' />
          Add a new class
        </Button>
      </div>
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header>Add a new classroom</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size='medium'
            src='https://firebasestorage.googleapis.com/v0/b/supertinker.appspot.com/o/aaa_images%2Fundraw_good_team.png?alt=media&token=b67f74c1-3d5d-45ef-a1bb-0ba76f8710e1'
          />
          <Modal.Description>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Field>
                <label>Class name</label>
                <input
                  name='className'
                  defaultValue=''
                  ref={register({ required: true })}
                  placeholder='Enter the class name'
                />
                <div style={{ color: "red" }}>
                  {errors.className && <span>Classname is required</span>}
                </div>
              </Form.Field>
              <Form.Field>
                <label>Grade</label>
                <input
                  name='grade'
                  defaultValue=''
                  ref={register({ required: true })}
                  placeholder='Enter the class grade'
                />
                <div style={{ color: "red" }}>
                  {errors.grade && <span>Grade is required</span>}
                </div>
              </Form.Field>
              <Form.Field>
                <label>Subject</label>
                <input
                  name='subject'
                  defaultValue=''
                  ref={register({ required: true })}
                  placeholder='Enter the class subject'
                />
                <div style={{ color: "red" }}>
                  {errors.subject && <span>Subject is required</span>}
                </div>
              </Form.Field>
              <Button type='submit'>Create</Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ClassroomsPage;
