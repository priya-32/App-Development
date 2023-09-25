import React from 'react';
import { Link } from 'react-router-dom';
import '../Asset/Styles/PrivacyPolicy.css';
function CampusFacilities() {
  return (
    <div className='privacy-policy-container'>
          <button className='btn1'> <Link to = "/">Home</Link></button>
      <h2>Campus Facilities and Public Works</h2>

      <h3>Academic Buildings</h3>
      <p>
        The construction and maintenance of academic buildings are essential to provide students with classrooms, laboratories, and libraries for their education.
      </p>

      <h3>Residence Halls</h3>
      <p>
        Student dormitories or residence halls are constructed and maintained to offer housing options to students, ensuring their comfort and convenience.
      </p>

      <h3>Sports Facilities</h3>
      <p>
        Universities have sports complexes, stadiums, gyms, and fields for athletic events and recreational activities, contributing to a vibrant campus life.
      </p>

      <h3>Transportation Services</h3>
      <p>
        Managing transportation services, including parking facilities, shuttles, buses, and bike racks, helps students and staff navigate the campus efficiently.
      </p>

      <h3>Utilities</h3>
      <p>
        Maintenance of utility infrastructure, including electrical systems, plumbing, and heating/cooling systems, ensures the smooth operation of the campus.
      </p>

      <h3>Landscaping and Grounds</h3>
      <p>
        Landscaping and grounds maintenance enhance the campus environment, providing green spaces, lawns, and outdoor areas for relaxation and study.
      </p>

      <h3>Environmental Sustainability</h3>
      <p>
        Initiatives like recycling programs, energy-efficient upgrades, and sustainable construction projects promote environmental sustainability on campus.
      </p>

      <h3>Public Safety</h3>
      <p>
        Projects related to campus security and emergency management systems help ensure the safety of students, faculty, and staff.
      </p>

      <h3>Accessibility</h3>
      <p>
        Ensuring accessibility for people with disabilities, including ramps, elevators, and accessible pathways, is a priority for creating an inclusive campus.
      </p>

      <h3>Renewable Energy</h3>
      <p>
        Investment in renewable energy projects like solar panels and wind turbines demonstrates a commitment to sustainability and reduces the campus's environmental footprint.
      </p>
    </div>
  );
}

export default CampusFacilities;