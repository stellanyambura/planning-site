import React from 'react';
import EmailIcon from './email-icon.png';
import PhoneIcon from './phone-icon.png';
import AddressIcon from './address-icon.png';
import './Footer.css';

const Footer = () => (
  <footer className="main-footer">
    <ul>
      <li>
        <img src={EmailIcon} alt="Email" title="Email" />
        rippleassociatesltd@gmail.com
      </li>
      <li>
        <img src={PhoneIcon} alt="Phone" title="Phone" />
        +254 714 398 806
      </li>
      <li>
        <img src={AddressIcon} alt="Address" title="Address" />
        Postal address 1232-00100, Nairobi, Kenya.
      </li>
    </ul>
  </footer>
);

export default Footer;
