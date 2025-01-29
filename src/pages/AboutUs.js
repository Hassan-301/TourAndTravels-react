import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import WelcomeSection from '../components/WelcomeSection';
import TourCarousel from '../components/TourCarousel';
import Team from '../components/Team';
const About= () => {
  return (
    <div>
      <Header />
      <Hero
       title="About Us"
       backgroundImage='./assets/img_1_long.webp'
      />
      <WelcomeSection />
      <TourCarousel title="Hotel Gallery" />
      <Team />
      <Footer />
    </div>
  );
};

export default About;
