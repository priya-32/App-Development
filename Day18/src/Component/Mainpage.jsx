import React, { useState, useEffect } from 'react';
import Home from '../Pages/Home';
import Events from '../Pages/Events';
import '../Asset/Styles/Mainpage.css';
import { FaArrowUp } from 'react-icons/fa';
import Footer from './Footer';
import Company from '../Pages/Company';
import { Team } from '../Pages/Teamm';

const Mainpage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='mainpage-container'>
     
      <Home />
      <Events />
      <Company/>
      <Team/>
      <Footer/>
      <button
        className={`scroll-button ${showScrollButton ? 'visible' : ''}`}
        onClick={scrollToTop}><FaArrowUp />
      </button>
    </div>
  );
};

export default Mainpage;
