import React from "react";
import {
  Card,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
} from "semantic-ui-react";

const UserProfileAcademics = () => {
  return (
    <Grid.Column width={16}>
      <Segment attached style={{ border: "none" }}>
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
              <Card.Meta textAlign='center'>May 06, 2020 at 3:00 PM</Card.Meta>
            </Card.Content>
          </Card>
          <Card>
            <Image src='https://firebasestorage.googleapis.com/v0/b/supertinker.appspot.com/o/aaa_images%2Fachievements%2Fmath_gourou.png?alt=media&token=b19a56fb-ced2-4823-97ce-5b8d17d8a70c' />
            <Card.Content>
              <Card.Header textAlign='center'>Math Guru</Card.Header>
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
  );
};

export default UserProfileAcademics;
