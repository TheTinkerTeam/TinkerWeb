import React from "react";
import { Image } from "semantic-ui-react";

const ImageList = ({ images }) => {
  return (
    <Image.Group size='small'>
      {images &&
        images.map((image, index) => (
          <Image key={index} src={image.url} />
        ))}
    </Image.Group>
  );
};

export default ImageList;