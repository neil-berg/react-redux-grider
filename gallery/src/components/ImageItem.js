import React from 'react';

const ImageItem = ({ image, onImageSelect }) => {
  return (
    <img
      className="image-item"
      src={image.urls.regular}
      alt={image.description}
      onMouseEnter={() => onImageSelect(image)}
    />
  );
};

export default ImageItem;
