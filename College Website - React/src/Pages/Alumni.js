// TestimonialsCarousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Assets/Styles/Alumni.css'
const Alumni = () => {
    const testimonials = [
        {
          name: 'Ronne Galle',
          role: 'Project Manager',
          image: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
          comment: '“Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.”',
        },
        {
          name: 'Missy Limana',
          role: 'Engineer',
          image: 'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
          comment: '“Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.”',
        },
        {
          name: 'Martha Brown',
          role: 'Project Manager',
          image: 'https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302',
          comment: '“Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.”',
        },
        {
          name: 'Hanna Lisem',
          role: 'Project Manager',
          image: 'https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303',
          comment: '“Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.”',
        },
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust the number of slides to show
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
      };
    
      return (
        <div className='testimonials-container'>
        <div className="gtco-testimonials">
          <h2>Testimonials Carousel - Cards Comments</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="card text-center">
                  <img className="card-img-top" src={testimonial.image} alt={`Testimonial ${index}`} />
                  <div className="card-body">
                    <h5>{testimonial.name} <br />
                      <span>{testimonial.role}</span>
                    </h5>
                    <p className="card-text">{testimonial.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        </div>
      );
    };
export default Alumni;
