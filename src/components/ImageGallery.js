import React from 'react';
import './styles/ImageGallery.css';

const ImageGallery = () => {
  const images = [
    '/assets/img_1.webp',
    '/assets/img_2.webp',
    '/assets/img_3.webp',
    '/assets/img_1.webp',
    '/assets/img_4.webp',
    '/assets/img_5.webp',
    '/assets/img_3.webp',
    '/assets/img_2.webp',
    '/assets/img_5.webp',
    '/assets/img_1.webp',
    '/assets/img_2.webp',
    '/assets/img_3.webp',
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
