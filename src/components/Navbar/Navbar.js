import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <span className="logo-top">Ripple</span>
          <span className="logo-bottom">PLANNNG ASSOCIATION L.T.D</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/companyinfor">CompanyInfor</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/approach">Approach</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
