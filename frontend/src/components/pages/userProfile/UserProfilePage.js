import React from "react";
import { withRouter } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useSelector } from "react-redux";

import UserProfilePhotos from "./UserProfilePhotos";
import UserProfileHeader from "./UserProfileHeader";
import UserProfileDescription from "./UserProfileDescription";
import UserProfileAcademics from "./UserProfileAcademics";

const GET_STUDENT = gql`
  query user($uid: String!) {
    user(uid: $uid) {
      id
      uid
      firstName
      lastName
      role
      username
      avatar
      interests
      country
      description
      classrooms {
        className
        grade
      }
      userImages {
        name
        url
      }
    }
  }
`;

const UserProfilePage = (props) => {
  const studentUID = props.match.params.id;

  const { loading, error, data } = useQuery(GET_STUDENT, {
    variables: { uid: studentUID }
  });

  const auth = useSelector((state) => state.firebase.auth);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error :( ...</div>;
  }
  const student = data.user;
  // console.log(student);

  return (
    <div className='dashboardcontainer'>
      <Grid>
        <UserProfileHeader auth={auth} student={student} />
        <UserProfileDescription student={student} />
        <UserProfilePhotos photos={student.userImages} />
        <UserProfileAcademics />
      </Grid>
    </div>
  );
};

export default withRouter(UserProfilePage);
