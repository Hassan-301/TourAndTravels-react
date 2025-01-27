import React from 'react';
import './styles/Experience.css';

const experiences = [
  {
    id: 1,
    title: 'Good Foods',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: '/assets/001-breakfast.svg'
  },
  {
    id: 2,
    title: 'Travel Anywhere',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: '/assets/002-planet-earth.svg'
  },
  {
    id: 3,
    title: 'Airplane',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: '/assets/003-airplane.svg'
  },
  {
    id: 4,
    title: 'Beach Resort',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: '/assets/004-beach.svg'
  },
  {
    id: 5,
    title: 'Mountain Climbing',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: '/assets/005-mountains.svg'
  },
  {
    id: 6,
    title: 'Hot Air Balloon',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: '/assets/006-hot-air-balloon.svg'
  }
];

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="experience-title">Experience Once In Your Life Time</h2>
      <p className="experience-description">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean.
      </p>
      <div className="experience-grid">
        {experiences.map((item) => (
          <div key={item.id} className="experience-item">
            <img src={item.icon} alt={item.title} className="experience-icon" />
            <h3 className="experience-item-title">{item.title}</h3>
            <p className="experience-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
