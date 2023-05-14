import React from 'react';

const Approach = () => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    color: 'blue',
    fontSize: '20px',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    color: 'black',
    fontSize: '16px',
    lineHeight: '1.5',
  };

  return (
    <div className="approach-container">
      <h2 className="approach-heading" style={{ color: 'blue', textAlign: 'center', fontWeight: 'bold' }}>Our Approach</h2>

      {/* First row */}
      <div className="row">
        <div className="col-md-6">
          <div style={cardStyle}>
            <h3 style={headerStyle}>Urban Management</h3>
            <p style={paragraphStyle}>Policy formulation and training<br/>Real Estate Economics<br/>Urban Economics<br/>Master plan auditing<br/>Marketing strategies<br/>Implementation strategies<br/>Capital Investment plans</p>
          </div>
        </div>
        <div className="col-md-6">
          <div style={cardStyle}>
            <h3 style={headerStyle}>Environmental Planning</h3>
            <p style={paragraphStyle}>Landscape planning<br/>Sustainability Design<br/>G.I.S<br/>Environmental Impact Assessments (E.I.A)<br/>Biodiversity impact Assessment (B.I.A)</p>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="row">
        <div className="col-md-6">
          <div style={cardStyle}>
            <h3 style={headerStyle}>Socio-Economic Management & Urban Trends</h3>
            <p style={paragraphStyle}>Social-cultural studies<br/>Demographic analysis<br/>Tourism planning<br/>Recreational planning<br/>Public spaces planning<br/>Settlement action plans<br/>Livelihoods restoration plans</p>
          </div>
        </div>
        <div className="col-md-6">
          <div style={cardStyle}>
            <h3 style={headerStyle}>Urban Design</h3>
            <p style={paragraphStyle}>Urban Studies<br/>Urban form & space<br/>Urban renewal & revitalization<br/>Placemaking & Branding<br/>Vehicular & Pedestrian systems</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approach;
