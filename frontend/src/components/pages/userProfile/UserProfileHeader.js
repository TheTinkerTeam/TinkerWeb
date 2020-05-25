import React from "react";
import avatar from "../../../img/avatar.png";
import { Grid, Header, Item, Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import GeneralList from "../../lists/GeneralList";

const UserProfileHeader = ({ auth, student }) => {
  return (
    <Grid.Column width={16}>
      <Segment attached style={{ border: "none" }}>
        {/* <Segment.Group className='paragraph-style display-in-box'>
        <Segment className='section-title'> */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                {/* <Grid columns={2}>
                  <Grid.Column width={10}>
                    <Header
                      icon='calendar outline'
                      content={`About ${student.firstName}`}
                    />
                    <p>
                      I am a <strong>{student.role}</strong>
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
                    {student.interests.length === 0 ? (
                      <div>No interests</div>
                    ) : (
                      <GeneralList array={student.interests} />
                    )}
                  </Grid.Column>
                </Grid> */}
              </Item.Content>
            </Item>
          </Item.Group>
          <div>
            {student.uid === auth.uid && (
              <Button
                as={Link}
                to='/settings'
                //fluid
                //basic
                circular
                icon='settings'
                //style={{ marginLeft: "87%", padding: "10px" }}
              />
            )}
          </div>
        </div>
      </Segment>
    </Grid.Column>
  );
};

export default UserProfileHeader;
