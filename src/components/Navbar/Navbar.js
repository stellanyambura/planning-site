import React from 'react';
import { Link } from 'react-router-dom'; // import Link from react-router-dom
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">MyLogo</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/aproach">Aproach</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
