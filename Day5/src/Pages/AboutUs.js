import React from 'react';
import '../Assets/Styles/About.css';
import NavBar from '../Components/NavBar';
function AboutUs() {
  return (
    <div className='about-us'>
        <NavBar/>
   
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container">
        <div className="responsive-container-block leftSide">
          <p className="text-blk heading">
          Mission Statement:
          </p>
          <p className="text-blk subHeading">
          "Our mission is to empower educational institutions with advanced Student Result Management solutions that enhance the efficiency, transparency, and quality of academic administration. We are committed to providing innovative tools that simplify the complexities of managing student records and results, enabling educators to focus on delivering exceptional education and nurturing student success."
          </p>
        </div>
        <div className="responsive-container-block rightSide">
          <img className="number1img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET32.jpg" alt="Team Member 1" />
          <img className="number2img" src="https://wallpaperaccess.com/full/2137313.jpg" alt="Team Member 2" />
          <img className="number3img" src="https://cdn.wallpapersafari.com/8/2/LeIyxs.jpg" alt="Team Member 3" />
          <img className="number5img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png" alt="Team Member 5" />
          <iframe
            allowFullScreen
            className="number4vid"
            title="Team Member 4 Video"
            src="https://www.youtube.com/embed/svg%3E?"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          ></iframe>
          <img className="number7img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d51.png" alt="Team Member 7" />
          <img className="number6img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d12.png" alt="Team Member 6" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
