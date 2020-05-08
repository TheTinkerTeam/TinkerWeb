import React from "react";
import avatar from "../../../img/avatar.png";
import {
  Grid,
  Header,
  Item,
  Segment,
  Button
} from "semantic-ui-react";
import { Link } from "react-router-dom";


const UserProfileHeader = ({auth,student}) => {
  return (
    <Grid.Column width={16}>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              avatar
              size='small'
              src={
                student.avatar
                  ? student.avatar === "defaultImgUrl"
                    ? avatar
                    : student.avatar
                  : "https://randomuser.me/api/portraits/men/20.jpg"
              }
            />
            <Item.Content verticalAlign='bottom'>
              <Header as='h1'>
                {student.firstName} {student.lastName}
              </Header>
              <br />
              {/* <Header as='h3'>{capitalize(`${student.role}`)}</Header> */}
              {/* <br /> */}
              <Header as='h2'>@{student.username}</Header>
            </Item.Content>
          </Item>
        </Item.Group>
        {student.uid === auth.uid && (
            <Segment>
              <Button
                as={Link}
                to='/settings/basics'
                color='teal'
                fluid
                basic
                content='Edit Profile'
              />
            </Segment>
        )}
      </Segment>
    </Grid.Column>
  );
};

export default UserProfileHeader;
