import React from 'react';
import '../Assets/Styles/BlogList.css';
import Navbar from '../Components/Navbar';
const BlogItem = ({ title, date, imageSrc }) => (

  <div className="blog-item">
    <a href="#">
      <div className="icon">
        <img src={imageSrc} alt="" />
      </div>
      <div className="content">
        <div className="title">
          {title} <span className="blog-date">{date}</span>
        </div>
        <div className="rounded"></div>

        <p>
          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı
          bilinmeyen bir matbaacının bir hurufat numune kitabı...
        </p>
      </div>

      <div className="item-arrow">
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </div>
    </a>
  </div>
  
);

const BlogList = () => {
  const blogs = [
    {
      title: 'Lorem Ipsum, dizgi ve baskı',
      date: '27.12.2017',
      imageSrc: 'https://img.myloview.com/posters/ai-artificial-intelligence-machine-learning-wireframed-female-cyborg-hand-touching-digital-graph-interface-big-data-analysis-and-automation-technology-touch-the-future-vector-illustration-400-166412857.jpg',
    },
    {
        title: 'Lorem Ipsum, dizgi ve baskı',
        date: '27.12.2017',
        imageSrc: 'https://www.innovery.net/wp-content/uploads/2022/05/20220519_183849_30867D57.jpg',
      },
      {
        title: 'Lorem Ipsum, dizgi ve baskı',
        date: '27.12.2017',
        imageSrc: 'https://us.123rf.com/450wm/ra2studio/ra2studio2108/ra2studio210805194/173126834-businessman-thinking-about-modern-technology.jpg?ver=6',
      },
      {
        title: 'Lorem Ipsum, dizgi ve baskı',
        date: '27.12.2017',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEn_CE4DUjEoqKmfpi3AfEWL9mLzHdbpQ71BAKDfcJKDC4sL3rP6apU3mm72c77Ff5Qcc&usqp=CAU',
      },
      {
        title: 'Lorem Ipsum, dizgi ve baskı',
        date: '27.12.2017',
        imageSrc: 'https://www.securitymagazine.com/ext/resources/secenews/2017/iot-9001.jpg?1504027108',
      },
    // Add more blog items as needed
  ];

  return (
    <div>
        <div className='blog-container'>
    <Navbar/>
      {blogs.map((blog, index) => (
        <BlogItem key={index} {...blog} />
      ))}
    </div>
    </div>
  );
};

export default BlogList;
