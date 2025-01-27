import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Rooms from '../components/Rooms';
import TourCarousel from '../components/TourCarousel';
import MoreHotelFeatures from '../components/MoreHotelFeatures';
import Experience from '../components/Experience';

const Hotels= () => {
  return (
    <div>
      <Header />
      <Hero
       title="Our Hotel"
       backgroundImage='./assets/slider-4.WEBP'
      />
      <Experience/>
      <Rooms/>
      <TourCarousel title="Hotel Gallery" />
      <MoreHotelFeatures/>
      <Footer />
    </div>
  );
};

export default Hotels;
