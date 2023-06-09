import React from 'react';
import { useSpring, animated } from 'react-spring';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './LandingPage.css';

function LandingPage() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="landingpage-container">
      <Navbar />
      <div className="content">
        <animated.h1 style={fadeIn}>COMPANY PROFILE</animated.h1>
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
