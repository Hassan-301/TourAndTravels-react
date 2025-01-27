import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
const News = () => {
  return (
    <div>
      <Header />
      <Hero
       title="Blog"
       backgroundImage='./assets/blog3.JPG'
      />
      <Blog/>
      <Footer />
    </div>
  );
};

export default News;
