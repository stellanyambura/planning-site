import React from 'react';
import { useTrail, animated } from 'react-spring';

const ServicePage = () => {
  const services = [
    'Preparations of physical and land use plans (e.g., CSP, LPLUDPs, and detailed land use master plans)',
    '> Preparations and submission for approval of development control applications (e.g., change of use, extension, and renewal of leases)',
    '> Planning Advocacy',
    '> Strategic environmental assessment',
    '> Environmental impact assessment studies',
    '> Environmental audits (EA)',
    '> Environmental research',
    '> Integrated watershed management',
    '> Resettlement action plans',
    '> Environmental law and advocacy',
    '> Transport research',
    '> Policy review and formulation',
    '> Development Research',
    '> Training, capacity assessment and development',
    '> Topographical mapping and cartography',
    '> Resource and infrastructure mapping',
    '> Development of spatial decision support systems (SDSS)',
    '> Establishment of land information management (LIMS)',
    '> Establishment of online development application',
  ];

  const trail = useTrail(3, {
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-20px)' },
  });

  const remainingServices = services.slice(3);

  return (
    <div className="service-container" style={{ background: 'skyblue', textAlign: 'center' }}>
      <h2>Our Services</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <div className="tiny-image-container" style={{ marginRight: '10px' }}>
            <img
              src="https://api.time.com/wp-content/uploads/2020/10/luca-locatelli-copenhill-copenhagen-bjarke-ingels.jpg?quality=85&w=200"
              alt="Tiny Image"
              className="tiny-image"
            />
          </div>
          <div className="tiny-image-container" style={{ marginTop: '20px' }}>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/512jxptcDyL._AC_UL300_SR300,300_.jpg"
              alt="Second Tiny Image"
              className="tiny-image"
              style={{ width: '150px', height: '150px' }}
            />
          </div>
        </div>
        <div>
          {trail.map((style, index) => (
            <animated.p key={index} style={style}>
              {services[index]}
            </animated.p>
          ))}
        </div>
      </div>
      <div style={{ marginLeft: '40px' }}>
        {remainingServices.map((service, index) => (
          <p key={index}>{service}</p>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
