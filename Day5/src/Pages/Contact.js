import React from 'react'
import '../Assets/Styles/Contact.css';
import NavBar from '../Components/NavBar';
const Contact = () => {
  return (
    <div>
        <NavBar/>
        <header className="Academic-header">
        <h1>Academic Institution</h1>
        <p>Welcome to our academic institution. Here's some information about us:</p>
        <div className="info-card">
          <h2>About Us</h2>
          <p>We are a leading academic institution dedicated to providing high-quality education.</p>
        </div>
        <div className="info-card">
          <h2>Programs</h2>
          <ul>
            <li>Bachelor's Degree</li>
            <li>Master's Degree</li>
            <li>Ph.D. Programs</li>
          </ul>
        </div>
        <div className="info-card">
          <h2>Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </header>
   
    </div>
  )
}

export default Contact
