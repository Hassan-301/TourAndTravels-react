import React from 'react';
import './styles/ImageGallery.css';

const ImageGallery = () => {
  const images = [
    '/assets/img_1.WEBP',
    '/assets/img_2.WEBP',
    '/assets/img_3.WEBP',
    '/assets/img_1.WEBP',
    '/assets/img_4.WEBP',
    '/assets/img_5.WEBP',
    '/assets/img_3.WEBP',
    '/assets/img_2.WEBP',
    '/assets/img_5.WEBP',
    '/assets/img_1.WEBP',
    '/assets/img_2.WEBP',
    '/assets/img_3.WEBP',
  ];

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className={`gallery-item item-${index + 1}`}>
          <img src={image} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
