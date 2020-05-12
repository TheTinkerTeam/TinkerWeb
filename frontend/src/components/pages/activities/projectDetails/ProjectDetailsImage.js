import React from "react";
import { Segment, Image } from "semantic-ui-react";

const ProjectDetailsImage = ({image}) => {
  return (
    <Segment>
      <Image src={image} size='small' />
    </Segment>
  );
};

export default ProjectDetailsImage;
