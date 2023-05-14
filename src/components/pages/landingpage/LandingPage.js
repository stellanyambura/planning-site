import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landingpage-container">
      <Navbar />
      <div className="content">
        <h1>COMPANY PROFILE</h1>
        <p>Here is some example content.</p>
      </div>
      <div className="information-container">
        <h2>Ripple Planning Associates Ltd</h2>
        <p>Registered offices: Suite 608, Vedic House, Mama Ngina Street.</p>
        <p>+254 714 398 806 | rippleassociatesltd@gmail.com</p>
        <p>Postal address 1232-00100, Nairobi, Kenya.</p>
        <p>EXPERTS IN URBAN PLANNING, ENVIRONMENTAL ASSESSMENT, MAPPING AND DEVELOPMENT RESEARCH</p>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
