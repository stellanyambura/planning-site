import React from 'react';
import EmailIcon from './email-icon.png';
import PhoneIcon from './phone-icon.png';
import AddressIcon from './address-icon.png';
import './Footer.css';

const Footer = () => (
  <footer className="main-footer">
    <ul>
      <li>
        <a href="mailto:rippleassociatesltd@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={EmailIcon} alt="Email" title="Email" />
          rippleassociatesltd@gmail.com
        </a>
      </li>
      <li>
        <a href="tel:+254714398806" target="_blank" rel="noopener noreferrer">
          <img src={PhoneIcon} alt="Phone" title="Phone" />
          +254 714 398 806
        </a>
      </li>
      <li>
        <a href="https://goo.gl/maps/gxJBJcnX9FJ2" target="_blank" rel="noopener noreferrer">
          <img src={AddressIcon} alt="Address" title="Address" />
          Postal address 1232-00100, Nairobi, Kenya.
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
