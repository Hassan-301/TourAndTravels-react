import React from 'react';
import './styles/Testimonials.css';


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Clare Gupta',
      text: `“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
             there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
             a large language ocean.”`,
      image: '/assets/person_1.WEBP'
    },
    {
      id: 2,
      name: 'Rogie Slater',
      text: `“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
             there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
             a large language ocean.”`,
      image: '/assets/person_2.WEBP'
    },
    {
      id: 3,
      name: 'John Doe',
      text: `“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
             there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
             a large language ocean.”`,
      image: '/assets/person_3.WEBP',
    }
  ];

  return (
    <div className="testimonials-section">
      <h2 className="section-title">Happy Customers</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-name">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
