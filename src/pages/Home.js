import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import Blog from '../components/RecentBlogPost';
import Destinations from '../components/Destinations';
import TourCarousel from '../components/TourCarousel';
import Footer from '../components/Footer';

<About />
const Home = () => {
  return (
    <div>
      <Header />
      <Hero
       title="Travel & Tours"
       backgroundImage='./assets/hero_1.webp'
      />
      <About />
      <Experience />
      <TourCarousel title="International Tour Management" />
      <Blog />
      <Testimonials />
      <Destinations />
      <Footer />
    </div>
  );
};

export default Home;
