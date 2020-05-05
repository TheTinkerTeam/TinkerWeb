import React from "react";
import { Icon, Button, Divider } from "semantic-ui-react";
import FlexClassroomList from "../../lists/FlexClassroomList";
import "../../../css/Classrooms.css";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_CLASSROOMS = gql`
  query {
    classrooms {
      id
      className
      grade
      assignments {
        date
        task
      }
    }
  }
`;

const ClassroomsPage = () => {
  const { loading, error, data } = useQuery(GET_CLASSROOMS);
  // console.log(GET_CLASSROOMS);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const addClassroom = () => {
    console.log("add classroom clicked");
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
          onClick={addClassroom}
          className='transparent-button'
          icon
          labelPosition='left'
        >
          <Icon name='plus' />
          Add a new class
        </Button>
      </div>
    </div>
  );
};

export default ClassroomsPage;
