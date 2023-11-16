import React from 'react';
import '../Assets/Styles/Aboutus.css';
import Navbar from '../Components/Navbar';
const Aboutus = () => {
  return (
    <div className='about-container'>
        <Navbar/>
    <section className="about-us">
      <div className="about">
        {/* Uncomment the line below if you have an image */}
        <img src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D" className="pic" alt="Girl" />
        <div className="text">
          <h2 className='abt'>About Us</h2>
          <h5 className='college'>Vision</h5>
          <p className='para'>
          Sri Krishna College of Technology aspires to be recognized as one of the pioneers in imparting world class technical education through technology enabled innovative teaching learning processes with a focus on research activities to cater, to the societal needs.
          </p>
          <h5 className='college'>Mission</h5>
          <p className='para'>
          To be recognized as centre of excellence in science, engineering and technology through effective teaching and learning processes by providing a conducive learning environment.

To foster research and development with creative and entrepreneurial skills by means of innovative applications of technology.

Accomplish expectations of the society and industry by nurturing the students to be competent professionals with integrity.          </p>
          <div className="data">
            <a href="#" className="hire">
              ReadMore
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Aboutus;
