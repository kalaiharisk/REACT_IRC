// ContactUs.js

import React from 'react';
import './ContactUs.css'; // Import the CSS file
import facebook from "../../assets/icons/footer/facebook.svg";
import instagram from "../../assets/icons/footer/instagram.svg";
import twitter from "../../assets/icons/footer/twitter.svg";
import youtube from "../../assets/icons/footer/youtube.svg";
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <Link to="/"><button type='back'>Home</button></Link> 
      <h1 className="main-heading">Contact Haribhavanam Restaurant</h1>
      <p className="sub-text">For reservations or inquiries, please contact us:</p>

      <div className="info-section">
        <h2>Restaurant Information:</h2>
        <p className="info-text1">
          <strong>Address:</strong> 123 Main Street, Peelamedu, Coimbatore, 600 708
        </p>
        <p className="info-text1">
          <strong>Phone:</strong> 9344276714
        </p>
      </div>

      <div className="social-section">
        <h2>Connect with Us:</h2>
        <p className="sub-text">
          Follow us on social media for updates and promotions:
        </p>
        <div className="social-icons">
          <button className="social-button">
            <img src={facebook} alt="facebook" />
          </button>
          <button className="social-button">
            <img src={instagram} alt="instagram" />
          </button>
          <button className="social-button">
            <img src={twitter} alt="twitter" />
          </button>
          <button className="social-button">
            <img src={youtube} alt="youtube" />
          </button>
        </div>
      </div>

      <div className="email-section">
        <h2>Email Us:</h2>
        <p className="info-text">
          For general inquiries, please email us at{' '}
          <a className="email-link" href="mailto:info@haribhvanamrestaurant.com">info@haribhvanamrestaurant.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
