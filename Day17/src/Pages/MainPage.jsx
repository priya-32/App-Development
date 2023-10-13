import React from 'react';

import '../Assets/Styles/MainPage.css';
import Navbar from '../Components/Navbar';

const MainPage = () => {
   
  
  return (
    <div className='mainpage-wrapper' >

        
        <div className='mainpage-container'>
        <Navbar/>
        </div>
       
        <div className='right-half'>
        <div className='right-title'>
            <h3>Welcome To Unica</h3>
        </div>
        <div className='quote'>
            <h1>You can never be overdressed<br/>
                or overeducated.</h1>
        </div>
        <div className='main-para'>
            <p>Education is the foundation of personal growth and the catalyst for societal progress, enabling individuals to unlock their potential and contribute to a better world.</p>
        </div>
        </div>
        <div className='left-half'>
        </div>
      
    
    </div>
  )
}

export default MainPage
