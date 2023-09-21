import React from 'react';
import '../Assets/Styles/ContactPage.css';
import NavBar from '../Components/NavBar';
function ContactPage() {
  return (
    <div className=''>
<NavBar/>
   
    <div className="contact-container">
      <div className="content">
        <div className="left-side">
          <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">Surkhet, NP12</div>
            <div className="text-two">Birendranagar 06</div>
          </div>
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+0098 9893 5647</div>
            <div className="text-two">+0096 3434 5678</div>
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">srm@gmail.com</div>
            <div className="text-two">info.srm@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send us a message</div>
          <p>If you have any work for me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.</p>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-box message-box">
            <input type="text" placeholder="Enter your message" />
            </div>
            <div className="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactPage;
