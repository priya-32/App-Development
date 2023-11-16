import React from 'react';
import '../Assets/Styles/Department.css';
import Navbar from '../Components/Navbar';
const Department = () => {
  return (
    <>
    <Navbar/>
    <div className="wrap">
      <h1 className="background"><span>ACADEMICS</span></h1>

      {/* First Service */}
      <a className="linkService" href="#">
        <div className="rowService bluService">
          <div className="overlayService"></div>
          <div className="iconService">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <div className="contentService">
            <h2>COMPUTER SCIENCE AND ENGINEERING</h2>
            <h6>

B.E Computer Science and Engineering
B.Tech Artificial Intelligence and Data Science
B.E. Computer Science and Engineering (Cyber Security)
B.E. Computer Science and Engineering (Internet of Things)
B.E. Computer Science and Engineering (Artificial Intelligence and Machine Learning)
M.E Computer Science and Engineering</h6>
          </div>
          <div className="arrowService">
            <i className="fa fa-angle-right"></i>
          </div>
        </div>
      </a>

      {/* Second Service */}
      <a className="linkService" href="#">
        <div className="rowService asfaltService">
          <div className="overlayService"></div>
          <div className="iconService">
            <i className="fa fa-desktop"></i>
          </div>
          <div className="contentService">
            <h2>WEB</h2>
            <h4>DESIGN</h4>
          </div>
          <div className="arrowService">
            <i className="fa fa-angle-right"></i>
          </div>
        </div>
      </a>

      {/* Third Service */}
      <a className="linkService" href="#">
        <div className="rowService redService">
          <div className="overlayService"></div>
          <div className="iconService">
            <i className="fa fa-eye"></i>
          </div>
          <div className="contentService">
            <h2>USER INTERFACE</h2>
            <h4>DESIGN</h4>
          </div>
          <div className="arrowService">
            <i className="fa fa-angle-right"></i>
          </div>
        </div>
      </a>
    </div>
    </>
  );
};

export default Department;
