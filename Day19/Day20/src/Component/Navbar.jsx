import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">Unica University</div>
      </div>
      <div className="nav-links">
        <Link to="/" >Home</Link>
        <Link to="/academic" >Courses</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/service" >Service</Link>
        {/* <Link to="/campus" >Campus</Link>
        <Link to="/service" >Service</Link> */}
      </div>
    </div>
  );
}

export default Navbar;
