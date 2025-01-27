import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Rooms</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Our Location</a></li>
            <li><a href="#">The Hosts</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Restaurant</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>
          <p><em>Address:</em><br /> 98 West 21th Street, Suite 721<br /> New York NY 10016</p>
          <p><em>Phone:</em><br /> (+1) 435 3533</p>
          <p><em>Email:</em><br /><a href="mailto:info@yourdomain.com">info@yourdomain.com</a></p>
        </div>

        <div className="footer-column">
          <h3>Subscribe</h3>
          <p>Sign up for our newsletter</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your email..." />
            <button type="submit">➤</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 All rights reserved | This template is made with <span className="heart">❤</span> by Hassan</p>
        <div className="footer-social">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
