import React from 'react';
import './styles/Hero.css';

const Hero = ({ title, backgroundImage }) => {
  return (
    <div 
      className="hero-section" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">
          A free template by <span className="highlight">Colorlib</span>. <span className="highlight-link">Download</span> and <span className="highlight-link">share</span>!
        </p>
        <button className="hero-btn">VISIT COLORLIB</button>
        <div className="scroll-down">
          <span>&#9660;</span> SCROLL DOWN
        </div>
      </div>
    </div>
  );
};

export default Hero;
