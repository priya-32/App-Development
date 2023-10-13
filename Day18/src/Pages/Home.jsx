import React from 'react'
import { Link } from 'react-router-dom';
import '../Asset/Styles/Home.css';
// import homeimage from '../Asset/Images/img.jpg'
const Home = () => {
  return (
    <div id="home" className='home-wrapper'>
    <div className='home-container'> 
    <div className='home-image'>
      <img src ="https://static.vecteezy.com/system/resources/previews/006/740/096/original/woman-wearing-graduation-gown-robe-and-academic-cap-smiling-and-waving-hand-premium-women-celebrating-university-graduation-flat-cartoon-illustration-vector.jpg" alt = "text"/>
    </div>
    <div className='title-con'>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;WELCOME&nbsp;TO UNICA&nbsp;UNIVERSITY</h1>
    </div>
    <div className='quote'>
      <h3>"Elevating Education, Inspiring Achievement, and<br/>
Transforming Results into Pathways to Success.<br/>
Your Journey Begins Here."<br/></h3>
    </div>
    <div className= 'neon-btn'>
     <Link to = "/login"> Get Started </Link>
    </div>
    
    </div>
  </div>
  // <div class="content">
  //         <div class="container">
  //           <div class="info">
  //             <h1>Looking For Inspiration</h1>
  //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
  //             <button>Button name</button>
  //           </div>
  //           <div class="image">
  //             <img src="https://i.postimg.cc/65QxYYzh/001234.png"/>
  //           </div>
  //         </div>
  //       </div>
  );
}

export default Home
