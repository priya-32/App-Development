import React from 'react';
import '../Asset/Styles/PrivacyPolicy.css';
import { Link } from 'react-router-dom';
function TermsAndConditions() {
  return (
    <div className='privacy-policy-container'>
          <button className='btn1'> <Link to = "/">Home</Link></button>
      <h2>Terms and Conditions for Student Result Management System</h2>

      <h3>1. Acceptance of Terms</h3>
      <p>
        By accessing or using the Student Result Management System (the
        "System"), you agree to comply with and be bound by these Terms and
        Conditions. If you do not agree to these Terms and Conditions, please do
        not use the System.
      </p>

      <h3>2. User Accounts</h3>
      <ul>
        <li>
          Access to the System is provided to registered users, including
          students, faculty, and administrative staff.
        </li>
        <li>Users are responsible for maintaining the confidentiality of their login credentials.</li>
        <li>Users must not share their login credentials with others.</li>
        <li>Unauthorized use of another user's account is strictly prohibited.</li>
      </ul>

      <h3>3. Use of the System</h3>
      <ul>
        <li>The System is intended for educational purposes only.</li>
        <li>Users must not use the System for any unlawful or malicious activities.</li>
        <li>Users must not attempt to compromise the security of the System.</li>
        <li>Users must not upload, share, or transmit any content that is defamatory, offensive, or violates the rights of others.</li>
      </ul>

      {/* Repeat similar structures for the rest of the content sections */}
      
      <h3>4. Governing Law</h3>
      <p>These Terms and Conditions are governed by the laws of [Your Jurisdiction].</p>

      <h3>5. Contact Information</h3>
      <p>For inquiries or concerns regarding these Terms and Conditions, please contact [Contact Email].</p>
    </div>
  );
}

export default TermsAndConditions;