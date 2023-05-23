import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <span>My Logo</span>
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
