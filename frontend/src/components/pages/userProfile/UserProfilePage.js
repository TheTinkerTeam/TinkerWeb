import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import {
  Button,
  Card,
  Grid,
  Header,
  Image,
  Item,
  Menu,
  Segment,
} from "semantic-ui-react";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import GeneralList from "../../lists/GeneralList";
import ImageList from "../../lists/ImageList";

// import avatar from "../../../../img/avatar.png";
import avatar from "../../../img/avatar.png";

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
    variables: { uid: studentUID },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error :( ...</div>;
  }
  const student = data.user;
  console.log(student);

  return (
    <div className='dashboardcontainer'>
      <Grid>
        <Grid.Column width={16}>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image
                  avatar
                  size='small'
                  //src={
                  //student.avatar
                  //? student.avatar
                  //: (student.avatar == "defaultImgUrl" ? avatar : "https://randomuser.me/api/portraits/men/20.jpg")
                  //}
                  src={
                    student.avatar
                      ?
                      (student.avatar === "defaultImgUrl") ? avatar : student.avatar
                      : "https://randomuser.me/api/portraits/men/20.jpg"
                  }
                />
                <Item.Content verticalAlign='bottom'>
                  <Header as='h1'>
                    {student.firstName} {student.lastName}
                  </Header>
                  <br />
                  <Header as='h3'>{student.role}</Header>
                  <br />
                  <Header as='h3'>
                    {student.country ? student.country : "no country yet"}
                  </Header>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment>
            <Grid columns={2}>
              <Grid.Column width={10}>
                <Header icon='bug' content={`About ${student.firstName}`} />
                <p>
                  I am a: <strong>{student.role}</strong>
                </p>
                <p>
                  Originally from{" "}
                  <strong>
                    {student.country ? student.country : "no country yet"}
                  </strong>
                </p>
                <p>
                  Description:{" "}
                  {student.description
                    ? student.description
                    : "no description yet"}
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header content='Interests' />
                <GeneralList array={student.interests} />
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment>
            <Button color='teal' fluid basic content='Edit Profile' />
          </Segment>
        </Grid.Column>

        <Grid.Column width={12}>
          <Segment attached>
            <Header icon='image' content='Photos' />
            <ImageList images={student.userImages} />
          </Segment>
        </Grid.Column>

        <Grid.Column width={12}>
          <Segment attached>
            <Header icon='graduation' content='Academics' />
            <Menu secondary pointing>
              <Menu.Item name='Achievements' active />
              <Menu.Item name='Current Project' />
              <Menu.Item name='Past Projects' />
            </Menu>

            <Card.Group itemsPerRow={5}>
              <Card>
                <Image src='https://firebasestorage.googleapis.com/v0/b/supertinker.appspot.com/o/aaa_images%2Fachievements%2Fteam_player.png?alt=media&token=355e059e-84eb-43a3-800b-02681032d583' />
                <Card.Content>
                  <Card.Header textAlign='center'>Team Player</Card.Header>
                  <Card.Meta textAlign='center'>
                    May 06, 2020 at 3:00 PM
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Card>
                <Image src='https://firebasestorage.googleapis.com/v0/b/supertinker.appspot.com/o/aaa_images%2Fachievements%2Fmath_gourou.png?alt=media&token=b19a56fb-ced2-4823-97ce-5b8d17d8a70c' />
                <Card.Content>
                  <Card.Header textAlign='center'>Math Gourou</Card.Header>
                  <Card.Meta textAlign='center'>
                    April 30, 2020 at 12:00 PM
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Card>
                <Image src='https://firebasestorage.googleapis.com/v0/b/supertinker.appspot.com/o/aaa_images%2Fachievements%2Fbest_idea.png?alt=media&token=cb1a3b2a-53e5-4ba6-8db8-af0c783c27eb' />
                <Card.Content>
                  <Card.Header textAlign='center'>Best idea</Card.Header>
                  <Card.Meta textAlign='center'>
                    March 28, 2020 at 10:00 AM
                  </Card.Meta>
                </Card.Content>
              </Card>
            </Card.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default withRouter(UserProfilePage);
