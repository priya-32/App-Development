import { Link } from 'react-router-dom';
import React from 'react';
import {BsClockHistory} from 'react-icons/bs';
import '../Assets/Styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        {/* <div className='nav-top'>
          <div className="navbar-brand align-items-center" >
             <span className='brand-name'>UNICA</span>
            <span className='brand-qty'>UNIVERSITY</span>
          </div>
        </div>
        <div className='nav1-top1'>
            <div className="navbar1-brand1 align-items-center" >
            <span className='time'><BsClockHistory className='time'/></span>
            </div>
       </div> */}
            
    <header>
      <div className="nav-wrapper">
        <div className="logo-container">
          <img className="logo" src="data:image/png;base64,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" alt="Logo" />
        </div>
        <nav>
          <div className="nav-container">
            <ul className="nav-tabs">
              <li className="nav-tab"><Link to="/">Home</Link></li>
              <li className="nav-tab"><Link to="/blog">Events</Link></li>
              <li className="nav-tab"><Link to="/academics">Academics</Link></li>
              <li className="nav-tab"><Link to="/">Careers</Link></li>
              <li className="nav-tab"><Link to="/about">About Us</Link></li>
              <li className="nav-tab"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    </div>
  );
};

export default Navbar;
