import React from 'react';
import '../Asset/Styles/PrivacyPolicy.css';
import { Link } from 'react-router-dom';
function PrivacyPolicy() {
  return (
      <div className="privacy-policy-container">
       <button className='btn1'> <Link to = "/">Home</Link></button>
      <h2>Privacy Policy</h2>

      <h3>Information Collection</h3>
      <p>
        <strong>Personal Information:</strong> We may collect personal information such as your name, student ID, email address, and contact details when you register for the System or update your user profile. This information is necessary for identification and communication purposes.
      </p>
      <p>
        <strong>Academic Data:</strong> The System collects and stores academic data, including course enrollment, grades, and assessment results. This data is used for educational and administrative purposes.
      </p>

      <h3>Information Usage</h3>
      <p>
        <strong>Academic Purposes:</strong> Your academic data is used to provide you with access to your course results, transcripts, and academic records. Faculty and administrative staff use this data for evaluation and grading.
      </p>
      <p>
        <strong>Communication:</strong> We may use your contact information to send you important notifications related to your academic progress, system updates, and other relevant information.
      </p>
      <p>
        <strong>Security:</strong> Your personal information is used to secure your account and protect against unauthorized access.
      </p>

      <h3>Information Sharing</h3>
      <p>
        <strong>Authorized Access:</strong> Your personal and academic information is accessible to authorized personnel, including faculty, administrators, and technical support staff, for academic and administrative purposes.
      </p>
      <p>
        <strong>Third-Party Services:</strong> We may use third-party services to store and process data securely. These third parties are contractually obligated to maintain the confidentiality and security of your information.
      </p>

      <h3>Data Security</h3>
      <p>
        We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. Your data is stored on secure servers with restricted access.
      </p>

      <h3>Data Retention</h3>
      <p>
        We retain your personal and academic data as long as it is necessary for educational and administrative purposes. When your data is no longer required, it will be securely deleted.
      </p>

      <h3>Your Rights</h3>
      <p>
        You have the right to access, update, correct, or delete your personal information. You can do this through your user profile or by contacting our support team.
      </p>

      <h3>Policy Updates</h3>
      <p>
        We may update this Privacy Policy to reflect changes in our practices or for legal compliance. Users will be notified of significant changes.
      </p>

      <h3>Contact Information</h3>
      <p>
        For inquiries or concerns regarding this Privacy Policy, please contact our Data Protection Officer at <Link to ="mailto:your@email.com">[Contact Email]</Link>.
      </p>
    </div>
  );
}

export default PrivacyPolicy;