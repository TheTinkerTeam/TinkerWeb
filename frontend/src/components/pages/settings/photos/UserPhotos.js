import React, { Fragment } from "react";
import { Header, Card, Image, Button } from "semantic-ui-react";
import avatar from "../../../../img/avatar.png";

const UserPhotos = ({
  photos,
  currentUser,
  userInfo,
  deletePhoto,
  setMainPhoto,
}) => {
  console.log({ photos });
  console.log({ currentUser });
  console.log({ userInfo });

  return (
    <Fragment>
      <Header sub color='teal' content='All Photos' />

      <Card.Group itemsPerRow={5}>
        <Card>
          {userInfo && userInfo.avatar ? (
            userInfo.avatar === "defaultImgUrl" ? (
              <Image src={avatar} />
            ) : (
              <Image src={userInfo.avatar || avatar} />
            )
          ) : (
            <Image src={currentUser.photoURL || avatar} />
          )}
          <Button positive>Main Photo</Button>
        </Card>
        {photos &&
          photos.map((photo, index) => {
            return (
              <Card key={index}>
                <Image src={photo.url} />
                <div className='ui two buttons'>
                  <Button
                    onClick={() => setMainPhoto(photo)}
                    basic
                    color='green'
                  >
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
      </Card.Group>
    </Fragment>
  );
};

export default UserPhotos;
