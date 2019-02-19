import React from 'react';
import './ImageDetail.css';

const ImageDetail = ({ selectedImage }) => {
  if (!selectedImage) {
    return <div />;
  }
  return (
    <img
      className="image-detail"
      src={selectedImage.urls.regular}
      alt={selectedImage.description}
    />
  );
};

export default ImageDetail;
