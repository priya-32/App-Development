import React from 'react'
import '../Assets/Styles/Mainpage.css';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
const useTypingAnimation = (text, interval) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let intervalId;

    const animateText = () => {
      setDisplayText(text.substring(0, currentIndex));
      currentIndex += 1;

      if (currentIndex > text.length) {
        currentIndex = 0; // Reset index when it reaches the end
      }
    };

    intervalId = setInterval(animateText, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, interval]);

  return displayText;
};

const TypingText = ({ text, interval }) => {
  const displayText = useTypingAnimation(text, interval);

  return <span className="typing-text">{displayText}</span>;
};

const Mainpage = () => {
  
  return (
    <div className='main-page-wrapper'>
        <div className='main-page-container'>
        <Navbar/>
        {/* <div className='right-half'>
        <div className='right-title'>
            <h3>Welcome To Unica</h3>
        </div>
       
        <div className='text-quote'>
            <h4>An investment in knowledge pays the best interest.
            </h4>
        </div>
        
        <div className='main-para'>
            <p>Education is the foundation of personal growth and the catalyst for societal progress, enabling individuals to unlock their potential and contribute to a better world.</p>
        </div>
        <div className= 'neon-btn glitter'>
     <Link to = "/"> Get Started </Link>
    </div>
        </div>
        <div className='left-half'>
          <div className='left-image'>
            <img src = "https://t3.ftcdn.net/jpg/01/10/53/04/360_F_110530499_pjM3zKDTmbwdsUbduglVzAsl4HGVUzDA.jpg" alt = "text" />
          </div>
</div> */}
<div className="blurry-background"></div>
{/* <div className='img-con1'>
  <img src = "https://media.istockphoto.com/id/1440040207/photo/stylish-students-walking-in-city.webp?b=1&s=170667a&w=0&k=20&c=C8nCGLVUGyATVpE0ftdLqxFlQ03vOeQIUPBkPipi5HU=" alt="text"/>
</div> */}

<div className="text-overlay">
{/* <h2 className='wel'><TypingText text="WELCOME TO" interval={1300} /></h2> */}
<h2 className='wel'>WELCOME TO</h2>
          <h1 className='uni09'><TypingText text="UNICA&nbsp;UNIVERSITY" interval={700} /></h1>
  <div className='main-para'>
            <p>Education is the foundation of personal growth and the catalyst for societal progress, enabling individuals to unlock their potential and contribute to a better world.</p>
        </div>
</div>
        </div>
      
    </div>
  )
}

export default Mainpage
