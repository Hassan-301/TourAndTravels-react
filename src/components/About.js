import React from 'react';
import './styles/About.css';

const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/assets/img_1_long.webp" alt="About Us" />
        </div>
        <div className="about-content">
          <h2 className="about-title">Welcome To Our Website</h2>
          <p className="about-description">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <p className="about-description">
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <div className="about-button">
            <button className="play-button">
              <span className="play-icon">&#9658;</span>
            </button>
            <span className="watch-text">WATCH THE VIDEO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
