import React from 'react';
import '../Asset/Styles/Events.css';

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="card">
      <div className="face front">
        <img src={imgSrc} alt="city" />
        <h1 className="text-h1">{title}</h1>
      </div>
      <div className="face back">
        <h2 className="text-h2">{title}</h2>
        <p className="text-p">{description}</p>
        <div className="links">
          <a className="link-a" href="#">Details</a>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const cardData = [
    {
      imgSrc: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Ai',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat maiores aperiam nemo officia, praesentium suscipit? Eum voluptate fuga eius accusamus harum cum unde natus.',
    },
    {
      imgSrc: 'https://e1.pxfuel.com/desktop-wallpaper/181/417/desktop-wallpaper-cyber-security-it-security.jpg',
      title: 'Cyber Security',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat maiores aperiam nemo officia, praesentium suscipit? Eum voluptate fuga eius accusamus harum cum unde natus.',
    },
    {
      imgSrc: 'https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?height=456&width=711&fit=bounds',
      title: 'Machine Learning',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat maiores aperiam nemo officia, praesentium suscipit? Eum voluptate fuga eius accusamus harum cum unde natus.',
    },
    {
      imgSrc: 'https://www.ntu.edu.sg/images/default-source/hub-programmes/scse/msc_datasc2_web775x465.jpg?sfvrsn=4dba8fec_5',
      title: 'Data Science',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat maiores aperiam nemo officia, praesentium suscipit? Eum voluptate fuga eius accusamus harum cum unde natus.',
    },
  ];

  return (
    <div className="wrapper">
      <div className='event-title'>
        <h1>Events</h1>
      </div>
      {cardData.map((card, index) => (
        <Card
          key={index}
          imgSrc={card.imgSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default Events;
