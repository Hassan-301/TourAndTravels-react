import React, { useState, useEffect } from 'react';
import './styles/TourCarousel.css';

const images = [
  './assets/slider-1.webp',
  './assets/slider-2.webp',
  './assets/slider-3.webp',
  './assets/slider-4.webp',
  './assets/slider-5.webp',
  './assets/slider-6.webp'
];

const TourCarousel = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-section">
      <h2 className="carousel-title">{title}</h2>
      <p className="carousel-description">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean.
      </p>
      <div className="carousel">
        <button className="carousel-btn left" onClick={prevSlide}>&#10094;</button>
        <img src={images[currentIndex]} alt="Tour destination" className="carousel-image" />
        <button className="carousel-btn right" onClick={nextSlide}>&#10095;</button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TourCarousel;
