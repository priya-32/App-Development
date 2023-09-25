import React from 'react';
import '../Asset/Styles/Faqs.css';
import { Link } from 'react-router-dom';
function Faqs() {
  const faqsList = [
    {
      question: '1. How can I access my academic results?',
      answer:
        'You can access your academic results by logging into the Student Result Management System with your credentials. Once logged in, you will find your results in the dashboard or a dedicated results section.'
    },
    {
      question: '2. When are the results typically published?',
      answer:
        'Results are usually published at the end of each academic term or semester. Specific result release dates may vary, so its essential to check the academic calendar or announcements for updates.'
    },
    {
      question: '3. What should I do if I believe there is an error in my result?',
      answer:
        'If you believe there is an error in your result, you should contact the faculty or department responsible for result management. They will guide you through the process of verifying and resolving any discrepancies.'
    },
    {
      question: '4. Can I request a re-evaluation of my exam paper?',
      answer:
        'Yes, you can typically request a re-evaluation or rechecking of your exam paper if you believe there has been a mistake in the evaluation. Contact the relevant authorities for the re-evaluation process and any associated fees.'
    },
    {
      question: '5. How can I view past semester results?',
      answer:
        'You can view your past semester results by accessing the archive or result history section of the Student Result Management System. This section typically allows you to access results from previous semesters or academic years.'
    },
    {
      question: '6. What happens if I forget my login credentials?',
      answer:
        'If you forget your login credentials, you can use the "Forgot Password" or "Reset Password" option on the login page. Follow the provided instructions to reset your password or recover your username.'
    },
    {
      question: '7. Is my personal information secure within the system?',
      answer:
        'Yes, the Student Result Management System prioritizes the security and privacy of your personal information. Your data is protected through encryption and access control measures to ensure confidentiality.'
    },
    {
      question: '8. How can I contact support for technical issues?',
      answer:
        'If you encounter technical issues while using the system, you can reach out to our technical support team through the contact information provided in the "Support" or "Contact Us" section of the system.'
    },
  ];

  return (
    <div className="faqs-container">
          <button className='btn1'> <Link to = "/">Home</Link></button>
      <h2>Frequently Asked Questions (FAQs)</h2>
      <ul className="faqs-list">
        {faqsList.map((faq, index) => (
          <li key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faqs;