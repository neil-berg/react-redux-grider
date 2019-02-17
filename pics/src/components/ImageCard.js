import React from 'react';
import ImageOverlay from './ImageOverlay';
import './ImageCard.css';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0, height: null, width: null };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = e => {
    const height = this.imageRef.current.clientHeight;
    const width = this.imageRef.current.clientWidth;
    const spans = Math.ceil(height / 10) + 1;
    this.setState({ spans, height, width });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div
        className="image-card"
        style={{ gridRowEnd: `span ${this.state.spans}`, position: 'relative' }}
      >
        <img ref={this.imageRef} src={urls.regular} alt={description} />
        <ImageOverlay height={this.state.height} width={this.state.width} />
      </div>
    );
  }
}

export default ImageCard;
