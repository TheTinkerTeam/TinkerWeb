import React from "react";
import { Segment, Image, Button, Modal, Header } from "semantic-ui-react";

import { useSelector, useDispatch } from "react-redux";

const ProjectDetailsImage = ({ props, image, title }) => {
  const auth = useSelector((state) => state.firebase.auth);

  const handleOnClick = () => {
    console.log("ASSIGN");
    props.history.push("/classrooms/5e794bd652a4dc0ad8928ef1");
  };

  return (
    <Segment style={{ display: "flex", justifyContent: "space-between" }}>
      <Image src={image} size='small' />
      {auth.uid && (
        //<div>
        //<Button onClick={handleOnClick}>{`Assign ${title}`}</Button>
        //</div>
        <div>
          <Modal
            trigger={<Button basic color='grey'>{`Assign ${title}`}</Button>}
          >
            <Modal.Header>{`Assign ${title} to a class`}</Modal.Header>
            <Modal.Content>
              {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
              <div style={{ textAlign: "center" }}>
                <Button.Group color='blue' widths='4'>
                  <Button onClick={handleOnClick}>Grade 5A</Button>
                  <Button.Or />
                  <Button onClick={handleOnClick}>Grade 5B</Button>
                  <Button.Or />
                  <Button onClick={handleOnClick}>Grade 6A</Button>
                  <Button.Or />
                  <Button onClick={handleOnClick}>Grade 6A</Button>
                </Button.Group>
              </div>
            </Modal.Content>
          </Modal>
        </div>
      )}
    </Segment>
  );
};

export default ProjectDetailsImage;
// export default withRouter(ProjectDetailsImage);
