import React from 'react';
import './styles/MoreHotelFeatures.css';

const features = [
  {
    id: 1,
    image: '/assets/img_1.webp',
    title: 'Five Reasons to Stay at Villa Resort'
  },
  {
    id: 2,
    image: '/assets/img_2.webp',
    title: 'Five Reasons to Stay at Villa Resort'
  },
  {
    id: 3,
    image: '/assets/img_3.webp',
    title: 'Five Reasons to Stay at Villa Resort'
  }
];

const MoreHotelFeatures = () => {
  return (
    <section className="hotel-features-section">
      <h2 className="features-title">More Hotel Features</h2>
      <p className="features-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo
        odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores
        quis, blanditiis laboriosam alias. Sed.
      </p>

      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <div className="feature-info">
              <h3 className="feature-title">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreHotelFeatures;
