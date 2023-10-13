import React from "react";
import "../Asset/Styles/Footer.css";

const Footer = () => {
  return (
    <div>
      
      <div id="footer">
        <div className="container text-center">
          <p>
            <a href="/privacy">Privacy Policy</a>&nbsp;&nbsp;&nbsp;
            <a href="/terms">Terms And Conditions</a>&nbsp;&nbsp;&nbsp;
            <a href="/faq">FAQ</a>&nbsp;&nbsp;&nbsp;
            <a href="/disclaimer">Disclaimer</a>&nbsp;&nbsp;&nbsp;
            <a href="/campus">Campus Facilities</a>&nbsp;&nbsp;&nbsp;
            &copy;All Rights Reserved 2023. UNICA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
