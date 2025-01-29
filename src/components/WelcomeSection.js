import React from 'react';
import './styles/WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-image">
        <img src="/assets/hero_1.webp" alt="Welcome Travel" />
      </div>
      <div className="welcome-content">
        <h2 className="welcome-title">Welcome Travel & Tours</h2>
        <p className="welcome-description">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the 
          Semantics, a large language ocean.
        </p>
        <p className="welcome-description">
          A small river named Duden flows by their place and supplies it with the necessary regeliialia.
        </p>
        <button className="welcome-btn">Learn More</button>
      </div>
    </div>
  );
};

export default WelcomeSection;

