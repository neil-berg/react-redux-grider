import React from 'react';
import ImageItem from './ImageItem';
import './ImageList.css';

const ImageList = ({ images, onImageSelect }) => {
  const imageArr = images.map(image => {
    return (
      <ImageItem image={image} onImageSelect={onImageSelect} key={image.id} />
    );
  });
  return <div className="image-list">{imageArr}</div>;
};

export default ImageList;
