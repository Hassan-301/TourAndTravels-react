import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
const Contact = () => {
  return (
    <div>
      <Header />
      <Hero
       title="Contact"
       backgroundImage='./assets/slider-3.WEBP'
      />
       <ContactForm/>
       <Testimonials />
      <Footer />
    </div>
  );
};

export default Contact;
