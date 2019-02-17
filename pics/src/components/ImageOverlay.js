import React from 'react';
import './ImageOverlay.css';

class ImageOverlay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="image-overlay">
        <p>
          {this.props.height}px x {this.props.width}px
        </p>
      </div>
    );
  }
}

export default ImageOverlay;
