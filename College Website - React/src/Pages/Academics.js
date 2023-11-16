import React from 'react';
import '../Assets/Styles/Academics.css';
import Navbar from '../Components/Navbar';
const Academics = () => {
  return (
    <>
    <Navbar/>
    <section id="Services" className="container">
      <div className="col-md-12 section-title text-center">
        <h2>Departments</h2>
        {/* <p>Est sale assum ut, in sed ludus convenire partiendo.</p> */}
      </div>
<br/>
      <div className="services-inner text-center">
        {/* Web Development Service */}
        <div className="col-sm-4 service">
          <div className="service-content">
            <h3><strong>CIVIL ENGINEERING</strong></h3>
            <p>B.E Civil Engineering</p>
<p>M.E Structural Engineering</p>
          </div>
        </div>

        {/* Web Designing Service */}
        <div className="col-sm-4 service">
          <div className="service-content">
            <h3><strong>COMPUTER SCIENCE & ENGINEERING</strong></h3>
            <p>B.E Computer Science and Engineering</p>
            {/* <p>B.Tech Artificial Intelligence and Data Science</p>
            <p>B.E. Computer Science and Engineering (Cyber Security)</p>
            <p>B.E. Computer Science and Engineering (Internet of Things)</p>
            <p>B.E. Computer Science and Engineering (Artificial Intelligence and Machine Learning)</p> */}
            <p>M.E Computer Science and Engineering</p>
          </div>
        </div>

        {/* SEO Service */}
        <div className="col-sm-4 service">
          <div className="service-content">
            <h3><strong>ELECTRONICS & COMMUNICATION ENGINEERING
</strong></h3>
            <p>B.E Electronics and Communication Engineering</p>
{/* <p>M.E Applied Electronics</p> */}
          </div>
        </div>

        {/* Branding Service */}
        <div className="col-sm-4 service">
          <div className="service-content">
            <h3><strong>INSTRUMENTATION & CONTROL ENGINEERING
</strong></h3>
            <p>B.E Instrumentation and Control Engineering</p>
          </div>
        </div>

        {/* Social Media Service */}
        <div className="col-sm-4 service">
          <div className="service-content">
            <h3><strong>ELECTRICAL & ELECTRONICS ENGINEERING
</strong></h3>
            <p>B.E Electrical and Electronics Engineering</p>
<p>M.E Power System Engineering</p>
          </div>
        </div>

        {/* eCommerce Service */}
        <div className="col-sm-4 service">
          <div className="service-content">
            <h3><strong>MECHANICAL ENGINEERING</strong></h3>
            <p>B.E Mechanical Engineering
M.E Engineering Design Program </p>
          </div>
        </div>

        {/* Branding Service */}
        <div className="col-sm-4 service">
          <div className="service-content">
            <h3><strong>INFORMATION TECHNOLOGY
</strong></h3>
            <p>B.Tech Information Technology</p>
          </div>
        </div>

        {/* Social Media Service */}
        <div className="col-sm-4 service">
          <div className="service-content">
            <h3><strong>SCIENCE & HUMANITIES</strong></h3>
            <p></p>
          </div>
        </div>

        {/* eCommerce Service */}
        <div className="col-sm-4 service">
          <div className="service-content">
            <h3><strong>MASTER OF BUSINESS ADMINISTRATION</strong></h3>
            {/* <p>Regione probatus conclusionemque vel ne, assum congue in eos. Elitr accusata nam ne, est an altera maiorum, purto nostrum verterem pri et. </p> */}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Academics;
