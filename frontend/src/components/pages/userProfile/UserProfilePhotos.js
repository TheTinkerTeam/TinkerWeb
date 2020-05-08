import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import ImageList from "../../lists/ImageList";

const UserProfilePhotos = ({ photos }) => {
  return (
    <Grid.Column width={16}>
      <Segment attached>
        <Header icon='image' content='Photos' />
        <ImageList images={photos} />
      </Segment>
    </Grid.Column>
  );
};
export default UserProfilePhotos;
