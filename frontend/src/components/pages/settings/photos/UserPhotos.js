import React, { Fragment } from "react";
import { Header, Card, Image, Button } from "semantic-ui-react";
import avatar from "../../../../img/avatar.png";

const UserPhotos = ({ photos, currentUser, deletePhoto }) => {
  // console.log({ photos });
  // console.log({ currentUser });

  return (
    <Fragment>
      <Header sub color='teal' content='All Photos' />

      <Card.Group itemsPerRow={5}>
        <Card>
          <Image src={currentUser.photoURL || avatar} />
          <Button positive>Main Photo</Button>
        </Card>
        {photos &&
          photos.map((photo, index) => {
            return (
              <Card key={index}>
                <Image src={photo} />
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Main
                  </Button>
                  <Button
                    onClick={() => deletePhoto(photo)}
                    basic
                    icon='trash'
                    color='red'
                  />
                </div>
              </Card>
            );
          })}
        {/* {photos &&
            <Card>
              <Image src={photos} />
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Main
                </Button>
                <Button basic icon='trash' color='red' />
              </div>
            </Card>
          } */}
      </Card.Group>
    </Fragment>
  );
};

export default UserPhotos;
