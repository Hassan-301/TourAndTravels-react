import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';
const Gallery = () => {
  return (
    <div>
      <Header />
      <Hero
       title="Gallery"
       backgroundImage='./assets/img_1_long.WEBP'
      />
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default Gallery;
