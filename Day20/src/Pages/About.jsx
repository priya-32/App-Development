import React from 'react';
import '../Asset/Styles/About.css';

const About = () => {
  return (
    <section class="about-section">
    	<div class="container">
        	<div class="row clearfix">
            	
               
                <div class="content-column col-md-6 col-sm-12 col-xs-12">
                	<div class="inner-column">
                    	<div class="sec-title">
                    		<div class="title">About Us</div>
                        	<h2>Unica University</h2>
                        </div>
                        <div class="text">At Unica, our mission is clear: <br/>
                        to provide an exceptional educational experience that equips students<br/>
                        with the knowledge, skills, and values to excel in their chosen fields<br/>
                        and contribute to a better world.We strive to foster intellectual<br/>
                        curiosity, critical thinking, and a passion for lifelong learning.
                       </div> 
                        <div class="email">Request Quote: <span class="theme_color">unica@gmail.com</span></div>
                        <a href="about.html" class="theme-btn btn-style-three">Read More</a>
                    </div>
                </div>
                <div class="image-column col-md-6 col-sm-12 col-xs-12">
                	<div class="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                    	<div class="image">
                        	<img src="https://univerlist.com/media/images/blog/2804951.jpg" alt=""/>
                            <div class="overlay-box">
                            	<div class="year-box"><span class="number">5</span>Years <br/> Experience <br/> Working</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
