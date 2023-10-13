import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function ScrollAnimationComponent() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Customize this threshold to trigger the animation at the desired scroll position
      if (scrollY > 100) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 100 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      
    </motion.div>
  );
}

export default ScrollAnimationComponent;
