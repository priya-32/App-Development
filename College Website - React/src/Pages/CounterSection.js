import '../Assets/Styles/CounterSection.css';
import React, { useEffect, useState } from 'react';

const CounterSection = () => {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const section = document.querySelector('.counter-section');

    const initAnimate = window.scrollY + window.innerHeight >= section.offsetTop;

    if (initAnimate && !hasEntered) {
      setHasEntered(true);
      counterActivate();
    }

    const handleScroll = () => {
      const shouldAnimate = window.scrollY + window.innerHeight >= section.offsetTop;

      if (shouldAnimate && !hasEntered) {
        setHasEntered(true);
        counterActivate();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasEntered]);

  const counterActivate = () => {
    const counts = document.querySelectorAll('.counter-count .count');

    counts.forEach((count) => {
      const target = parseInt(count.innerText, 10);
      let current = 0;

      const updateCounter = () => {
        const increment = Math.ceil(target / 100);
        current += increment;

        if (current < target) {
          count.innerText = current;
          requestAnimationFrame(updateCounter);
        } else {
          count.innerText = target;
        }
      };

      updateCounter();
    });
  };

  return (
    <section className="counter-section">
      <div className="container">
        <h1 className="main-title">Counter Section</h1>
        <div className="row">
          <div className="col-sm-3">
            <div className="counter-count">
              <span className="count">300</span>
              <h3 className="title">Partners</h3>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="counter-count">
              <span className="count">150</span>
              <h3 className="title">Projects</h3>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="counter-count">
              <span className="count">40</span>
              <h3 className="title">Countries</h3>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="counter-count">
              <span className="count">987</span>
              <h3 className="title">Clients</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
