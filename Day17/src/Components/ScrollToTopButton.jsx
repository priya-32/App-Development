import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Assuming you're using React Icons

function ScrollToTopButton() {
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
    <button
      className={`scroll-button ${showScrollButton ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;
