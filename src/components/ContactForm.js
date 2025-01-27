import React from 'react';
import './styles/ContactForm.css';


const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <form>
          <div className="form-row">
            <div className="input-field">
              <label>Name</label>
              <input type="text" placeholder="" />
            </div>
            <div className="input-field">
              <label>Phone</label>
              <input type="text" placeholder="" />
            </div>
          </div>

          <div className="input-field">
            <label>Email</label>
            <input type="email" placeholder="" />
          </div>

          <div className="input-field">
            <label>Write Message</label>
            <textarea placeholder=""></textarea>
          </div>

          <button type="submit" className="send-message-btn">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <h4 className="info-title">ADDRESS:</h4>
        <p className="info-content"><strong>98 West 21th Street, Suite</strong></p>
        <p className="info-content"><strong>721 New York NY 10016</strong></p>

        <h4 className="info-title">PHONE:</h4>
        <p className="info-content"><strong>(+1) 435 3533</strong></p>

        <h4 className="info-title">EMAIL:</h4>
        <p className="info-content"><strong>info@yourdomain.com</strong></p>
      </div>
    </div>
  );
};

export default ContactForm;
