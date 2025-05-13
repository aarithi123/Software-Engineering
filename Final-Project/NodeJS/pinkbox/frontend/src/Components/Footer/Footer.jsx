import React, { useState } from 'react';
import './Footer.css';

import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintrest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  const [popupContent, setPopupContent] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleLinkClick = (content) => {
    let popupText = '';
    if (content === 'About') {
      popupText = 'An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, services to interact with customers, and conduct transactions without the need for a physical presence.\n\nE-commerce websites typically display products or services along with detailed descriptions, images, prices, and any other available variations. Each product usually has its own dedicated page with relevant information.';
    } else if (content === 'Contact') {
      popupText = 'Aarithi\nErriana\nIsabelle\nLara';
    }
    setPopupContent(popupText);
    setShowPopup(true);
  };
  

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>pinkBOX</p>
      </div>
      <ul className="footer-links">
        <li onClick={() => handleLinkClick('About')}>About</li>
        <li onClick={() => handleLinkClick('Contact')}>Contact</li>
      </ul>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>X</button>
            <p style={{ whiteSpace: 'pre-wrap' }}>{popupContent}</p>
          </div>
        </div>
      )}
      {/* Uncomment if you want to add social icons
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      */}
      <div className="footer-copyright">
        <hr />
        <p>Software Engineering - Spring 2025</p>
      </div>
    </div>
  );
};

export default Footer;
