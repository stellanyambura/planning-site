import React from 'react';
import { useSpring, animated } from 'react-spring';
import MissionIcon from '../../Mission-icon.png';
import VisionIcon from '../../Vision-icon.png';
import ValueIcon from '../../Value-icon.png';

const CompanyInfo = () => {
  const imageSrc = 'https://www.shutterstock.com/image-photo/master-plan-urban-landscape-design-260nw-1031613082.jpg';

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="homepage-container" style={{ background: 'skyblue', textAlign: 'center' }}>
      <h2>OUR STORY</h2>
      <animated.div style={fadeIn}>
        <div className="image-container" style={{ marginBottom: '20px', width: '100%', margin: '0' }}>
          <img src={imageSrc} alt="Service Image" className="service-image" style={{ width: '80%' }} />
        </div>
        <div className="icon-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="icon" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={MissionIcon} alt="Mission Icon" style={{ marginRight: '10px' }} />
            <div className="icon-text" style={{ textAlign: 'center' }}>
              <p>Our Mission</p>
              <p>To provide technically excellent and innovative solutions in urban planning, environment, development research, and geo design.</p>
            </div>
          </div>
          <div className="icon" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={VisionIcon} alt="Vision Icon" style={{ marginRight: '10px' }} />
            <div className="icon-text" style={{ textAlign: 'center' }}>
              <p>Our Vision</p>
              <p>To be a leading hub in urban planning, geo solutions, environment, and development research.</p>
            </div>
          </div>
          <div className="icon" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={ValueIcon} alt="Values Icon" style={{ marginRight: '10px' }} />
            <div className="icon-text" style={{ textAlign: 'center' }}>
              <p>Core Values</p>
              <ul>
                <li>Honesty & Integrity</li>
                <li>Professionalism</li>
                <li>Client Satisfaction</li>
                <li>Prompt service delivery</li>
                <li>Technical Excellence</li>
                <li>Social responsibility</li>
              </ul>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default CompanyInfo;
