import React from 'react';
import '../Asset/Styles/Contact.css';
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
        </div>

        <div className="row">
          <div className="column">
            <img
              src="https://www.mapsofindia.com/india/maps/jamshedpur-location-map.jpg"
              style={{ width: '100%' }}
              alt="Location Map"
            />

            <div className="icon">
              <FaHome />
              <FaPhone />
              <FaEnvelope />
            </div>
          </div>

          <div className="column">
            <form action="">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Enter Your First Name.."
                required
              />
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Enter Your Last Name.."
                required
              />
              <label htmlFor="email1">Email</label>
              <input
                type="email1"
                id="email1"
                name="email1"
                placeholder="Enter Your Mail.."
                required
              />
              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option value="select">Select Country</option>
                <option value="india">India</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="japan">Japan</option>
                <option value="korea">South Korea</option>
              </select>

              <label htmlFor="sub">Subject</label>
              <textarea
                id="sub"
                name="sub"
                placeholder="Write Something..."
                style={{ height: '150px' }}
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
