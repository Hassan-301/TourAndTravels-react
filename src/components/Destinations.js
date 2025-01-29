import React from 'react';
import './styles/Destinations.css';


const Destinations = () => {
  const destinations = [
    {
      id: 1,
      title: 'Food & Wines',
      image: './assets/img_1.webp',
      rating: 4,
      reviews: '3,239 reviews'
    },
    {
      id: 2,
      title: 'Resort & Spa',
      image: './assets/img_2.webp',
      rating: 4,
      reviews: '4,921 reviews'
    },
    {
      id: 3,
      title: 'Hotel Rooms',
      image: './assets/img_3.webp',
      rating: 4,
      reviews: '2,112 reviews'
    },
    {
      id: 4,
      title: 'Mountain Climbing',
      image: './assets/img_4.webp',
      rating: 4,
      reviews: '6,421 reviews'
    }
  ];

  return (
    <div className="destinations-section">
      <h2 className="section-title">Top Destination</h2>
      <p className="section-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? 
        Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.
      </p>
      <div className="destinations-grid">
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img src={destination.image} alt={destination.title} className="destination-image" />
            <h3 className="destination-title">{destination.title}</h3>
            <div className="destination-rating">
              {'★'.repeat(destination.rating)}{'☆'.repeat(5 - destination.rating)}
            </div>
            <p className="destination-reviews">{destination.reviews}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
