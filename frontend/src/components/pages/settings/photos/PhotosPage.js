import React, { useState, useEffect, Fragment } from "react";
import {
  Image,
  Segment,
  Header,
  Divider,
  Grid,
  Button,
  Card,
} from "semantic-ui-react";
import DropzoneInput from "./DropzoneInput";
import CropperInput from "./CropperInput";
import { uploadImageEdith } from "../../../../actions/userActionsEdith";

import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import UserPhotos from "./UserPhotos";

const UPDATE_USER = gql`
  mutation UpdateUser($uid: String!, $imagesURL: String) {
    updateUser(uid: $uid, imagesURL: $imagesURL) {
      uid
      imagesURL
    }
  }
`;

const GET_CURRENT_USER = gql`
  query GetCurrentUser($uid: String!) {
    user(uid: $uid) {
      uid
      avatar
      imagesURL
    }
  }
`;

const PhotosPage = ({ currentUser, userInfo }) => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState([null]);
  const [isLoading, setLoading] = useState(false);

  const [updateUser] = useMutation(UPDATE_USER);

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const handleUploadImage = async () => {
    try {
      setLoading(true);
      console.log(image);
      console.log(files[0].name);
      // await uploadProfileImage(image, files[0].name);

      //upload image to firebase storage and return the url
      const url = await uploadImageEdith(image, files[0].name);
      console.log("url = ", url);
      updateUser({
        variables: {
          uid: userInfo.uid,
          imagesURL: url
        },
        refetchQueries: [
          {
            query: GET_CURRENT_USER,
            variables: { uid: `${currentUser.uid}` },
          },
        ],
      });

      //save this imageURL to mongodb

      handleCancelCrop();
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelCrop = () => {
    setFiles([]);
    setImage(null);
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
      <UserPhotos currentUser={currentUser} photos={userInfo && userInfo.imagesURL ? userInfo.imagesURL : ''}/>
    </Segment>
  );
};

export default PhotosPage;
// export default PhotosPage;
