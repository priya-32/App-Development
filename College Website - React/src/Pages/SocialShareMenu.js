// SocialShareMenu.js

import React from 'react';
import { IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';
import { logoFacebook, logoWhatsapp, logoTwitter, logoReddit, logoLinkedin, logoInstagram, logoGithub, logoYoutube } from 'ionicons/icons';
import '../Assets/Styles/SocialShareMenu.css';

const SocialShareMenu = () => {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
  };

  return (
    
    <div className="menu">
      
      <ul>
        <li style={{ '--i': 0, '--clr': '#1877f2' }}>
          <Link to="/facebook" target="_blank"><IonIcon icon={logoFacebook}></IonIcon></Link>
        </li>
        {/* <li style={{ '--i': 1, '--clr': '#25d366' }}>
          <Link to="/whatsapp" target="_blank"><IonIcon icon={logoWhatsapp}></IonIcon></Link>
        </li> */}
        <li style={{ '--i': 2, '--clr': '#1da1f2' }}>
          <Link to="/twitter" target="_blank"><IonIcon icon={logoTwitter}></IonIcon></Link>
        </li>
        {/* <li style={{ '--i': 3, '--clr': '#FF5733' }}>
          <Link to="/reddit" target="_blank"><IonIcon icon={logoReddit}></IonIcon></Link>
        </li> */}
        <li style={{ '--i': 4, '--clr': '#0a66c2' }}>
          <Link to="/linkedin" target="_blank"><IonIcon icon={logoLinkedin}></IonIcon></Link>
        </li>
        <li style={{ '--i': 5, '--clr': '#c32aa3' }}>
          <Link to="/instagram" target="_blank"><IonIcon icon={logoInstagram}></IonIcon></Link>
        </li>
        <li style={{ '--i': 6, '--clr': '#1b1e21' }}>
          <Link to="/github" target="_blank"><IonIcon icon={logoGithub}></IonIcon></Link>
        </li>
        <li style={{ '--i': 7, '--clr': '#ff0000' }}>
          <Link to="/youtube" target="_blank"><IonIcon icon={logoYoutube}></IonIcon></Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialShareMenu;
