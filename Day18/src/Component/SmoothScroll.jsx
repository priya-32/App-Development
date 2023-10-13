import React, { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleSmoothScroll = (e) => {
      e.preventDefault();

      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    };

    // Add event listeners to all anchor links with smooth-scroll class
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

    smoothScrollLinks.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Clean up event listeners on unmount
    return () => {
      smoothScrollLinks.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SmoothScroll;
