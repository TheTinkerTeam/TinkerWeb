import React, { useState, useEffect, Fragment } from "react";
import { Segment, Header, Divider, Grid, Button } from "semantic-ui-react";
import DropzoneInput from "./DropzoneInput";
import CropperInput from "./CropperInput";
import {
  uploadImageEdith,
  deletePhoto,
} from "../../../../actions/userActionsFirebaseStorage";
import { v4 as uuidv4 } from "uuid";

import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import UserPhotos from "./UserPhotos";

const UPDATE_USER_IMAGES = gql`
  mutation updateImagesURLUser($uid: String!, $newImageURL: UserImageInput!) {
    updateImagesURLUser(uid: $uid, newImageURL: $newImageURL) {
      uid
      avatar
      userImages {
        url
        name
      }
    }
  }
`;

const UPDATE_AVATAR = gql`
  mutation updateAvatar($uid: String!, $newAvatarURL: UserImageInput!) {
    updateAvatar(uid: $uid, newAvatarURL: $newAvatarURL) {
      uid
      avatar
    }
  }
`;

const DELETE_USER_IMAGE = gql`
  mutation deleteUserPhoto($uid: String!, $photoToDelete: UserImageInput!) {
    deleteUserPhoto(uid: $uid, photoToDelete: $photoToDelete) {
      uid
      userImages {
        url
        name
      }
    }
  }
`;

const GET_CURRENT_USER = gql`
  query GetCurrentUser($uid: String!) {
    user(uid: $uid) {
      uid
      avatar
      userImages {
        url
        name
      }
    }
  }
`;

const PhotosPage = ({ currentUser, userInfo }) => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState([null]);
  const [isLoading, setLoading] = useState(false);

  const [updateImagesURLUser] = useMutation(UPDATE_USER_IMAGES);
  const [deleteUserPhoto] = useMutation(DELETE_USER_IMAGE);
  const [updateAvatar] = useMutation(UPDATE_AVATAR);

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const handleUploadImage = async () => {
    try {
      setLoading(true);

      const randomUuid = uuidv4();
      const filename = `${randomUuid}_${files[0].name}`;

      //upload image to firebase storage and return the url
      const url = await uploadImageEdith(image, filename, currentUser.uid);

      //save this image URL to mongodb
      updateImagesURLUser({
        variables: {
          uid: currentUser.uid,
          newImageURL: {
            name: filename,
            url: url,
          },
        },
        refetchQueries: [
          {
            query: GET_CURRENT_USER,
            variables: { uid: `${currentUser.uid}` },
          },
        ],
      });
      handleCancelCrop();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelCrop = () => {
    setFiles([]);
    setImage(null);
  };

  const handleDeletePhoto = async (photo) => {
    try {
      await deletePhoto(photo);
      deleteUserPhoto({
        variables: {
          uid: userInfo.uid,
          photoToDelete: {
            name: photo.name,
            url: photo.url,
          },
        },
        refetchQueries: [
          {
            query: GET_CURRENT_USER,
            variables: { uid: `${currentUser.uid}` },
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetMainPhoto = (photo) => {
    updateAvatar({
      variables: {
        uid: currentUser.uid,
        newAvatarURL: {
          name: photo.name,
          url: photo.url,
        },
      },
      refetchQueries: [
        {
          query: GET_CURRENT_USER,
          variables: { uid: `${currentUser.uid}` },
        },
      ],
    });
  };

  return (
    <Segment>
      <Header dividing size='large' content='Your Photos' />
      <Grid>
        <Grid.Row />
        <Grid.Column width={4}>
          <Header color='teal' sub content='Step 1 - Add Photo' />
          <DropzoneInput setFiles={setFiles} />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color='teal' content='Step 2 - Resize image' />
          {files.length > 0 && (
            <CropperInput setImage={setImage} imagePreview={files[0].preview} />
          )}
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color='teal' content='Step 3 - Preview & Upload' />
          {files.length > 0 && (
            <Fragment>
              <div
                className='img-preview'
                style={{
                  minHeight: "200px",
                  minWidth: "200px",
                  overflow: "hidden",
                }}
              />
              <Button.Group>
                <Button
                  onClick={handleUploadImage}
                  style={{ width: "100px" }}
                  positive
                  icon='check'
                  loading={isLoading}
                />
                <Button
                  onClick={handleCancelCrop}
                  style={{ width: "100px" }}
                  icon='close'
                />
              </Button.Group>
            </Fragment>
          )}
        </Grid.Column>
      </Grid>
      <Divider />
      <UserPhotos
        deletePhoto={handleDeletePhoto}
        userInfo={userInfo}
        currentUser={currentUser}
        setMainPhoto={handleSetMainPhoto}
        photos={userInfo && userInfo.userImages ? userInfo.userImages : ""}
      />
    </Segment>
  );
};

export default PhotosPage;
