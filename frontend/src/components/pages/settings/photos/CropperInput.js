import React, { Component } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css"; // see installation section above for versions of NPM older than 3.0.0
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default

const cropper = React.createRef(null);

class CropperInput extends Component {
  _crop() {
    // image in dataUrl
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  }

  cropImage = () => {
    const {setImage} = this.props;
    if (typeof cropper.current.getCroppedCanvas() === undefined) {
      return;
    }
    cropper.current.getCroppedCanvas().toBlob(blob => {
      setImage(blob)
    }, 'image/jpeg')
  }

  render() {
    const { imagePreview } = this.props;
    return (
      <Cropper
        ref={cropper}
        src={imagePreview}
        style={{ height: 200, width: "100%" }}
        // Cropper.js options
        preview='.img-preview'
        aspectRatio={1}
        viewMode={1}
        dragMode='move'
        guides={false}
        scalable={true}
        cropBoxMovable={true}
        cropBoxResizable={true}
        crop={this.cropImage}
      />
    );
  }
}

export default CropperInput;
