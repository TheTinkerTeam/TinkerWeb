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
import { connect } from "react-redux";
import { uploadProfileImage } from "../../../../actions/userActions";
import { sayHi } from "../../../../actions/userActionsEdith";
import { uploadImageEdith } from "../../../../actions/userActionsEdith";

const mapDispatchToProps = {
  uploadProfileImage,
};

const PhotosPage = ({ uploadProfileImage }) => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState([null]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  // const UploadBlobToFirestoreBucket = async () => {

  // }

  const handleUploadImage = async () => {
    try {
      console.log(image);
      console.log(files[0].name);
      // await uploadProfileImage(image, files[0].name);
      const url = await uploadImageEdith(image, files[0].name);

      console.log('url = ', url);

      handleCancelCrop();
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
      <Header sub color='teal' content='All Photos' />

      <Card.Group itemsPerRow={5}>
        <Card>
          <Image src='https://randomuser.me/api/portraits/men/20.jpg' />
          <Button positive>Main Photo</Button>
        </Card>

        <Card>
          <Image src='https://randomuser.me/api/portraits/men/20.jpg' />
          <div className='ui two buttons'>
            <Button basic color='green'>
              Main
            </Button>
            <Button basic icon='trash' color='red' />
          </div>
        </Card>
      </Card.Group>
    </Segment>
  );
};

export default connect(null, mapDispatchToProps)(PhotosPage);
// export default PhotosPage;
