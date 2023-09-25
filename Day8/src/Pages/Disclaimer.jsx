import React from 'react';
import '../Asset/Styles/Disclaimer.css';
import { Link } from 'react-router-dom';
function Disclaimer() {
  return (
    <div className="disclaimer-container">
          <button className='btn1'> <Link to = "/">Home</Link></button>
      <h2>Disclaimer</h2>

      <h3>Accuracy of Information</h3>
      <p>
        <strong>Personal Information:</strong> We may collect personal information such as your name, student ID, email address, and contact details when you register for the System or update your user profile. This information is necessary for identification and communication purposes.
      </p>
      
      {/* Add the rest of the content sections similarly */}

      <h3>Governing Law</h3>
      <p>
        This disclaimer is governed by the laws of [Your Jurisdiction], and any disputes arising from the use of the Student Result Management System shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
      </p>

      <p>
        By using the Student Result Management System, you accept these disclaimers and agree to abide by the policies and terms set forth by [Your Institution Name]. If you do not agree with these disclaimers or the terms and conditions, please refrain from using the system.
      </p>

      <p>
        For inquiries or concerns regarding this disclaimer or the Student Result Management System, please contact <a href="mailto:your@email.com">[Contact Email]</a>.
      </p>
    </div>
  );
}

export default Disclaimer;