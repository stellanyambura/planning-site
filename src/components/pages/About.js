import React from 'react';

function About() {
  return (
    <div style={{ 
      backgroundColor: 'skyblue',
      color: '#333',
      padding: '50px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        color: '#333',
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textTransform: 'uppercase'
      }}>About Us</h1>
      <p style={{
        fontSize: '18px',
        lineHeight: '1.5',
        marginBottom: '30px'
      }}>We are a reputable firm registered in the Republic of Kenya. We provide consultancy services in the build environment and development research at multidisciplinary fields i.e. Urban and Regional Planning (Physical Planning), Environmental Impact Assessment/Environmental Audit and Urban Design and Mapping. The lead consultant is registered by the National Environment Management Authority (NEMA) as an Expert Reg No. 9060 and by the Physical Planning Registration Board (PPRB) Reg No. 0270. We boast of diverse and dynamic expertise and wide experience in all our undertakings with the view to deliver quality services not only as required by law but also to the satisfaction of our clients across the republic.</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Coat_of_arms_of_Kenya_%28Official%29.svg/800px-Coat_of_arms_of_Kenya_%28Official%29.svg.png" alt="Coat of arms of Kenya" style={{width: '200px', height: '200px'}}/>
      <p style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginTop: '20px',
        color: 'white'
      }}>Ripple Planning Associates LTD</p>
    </div>
  );
}

export default About;
