import '../Assets/Styles/ServiceCard.css';
import React from 'react';

const ServiceCard = ({ iconClass, title, description }) => (
  <div className="col-lg-12 d-flex align-items-stretch services-wrap">
    <div className="services d-flex">
      <div className="icon">
        <span className={iconClass}></span>
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  </div>
);

const YourComponent = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb">
      <div className="container-xl">
        <div className="row g-xl-5">
          <div
            className="col-md-6 d-flex align-items-stretch aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="img w-100" style={{ backgroundImage: "url(images/about.jpg)" }}></div>
          </div>
          <div
            className="col-md-6 heading-section d-flex align-items-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="mt-0 my-lg-5 py-5">
              <span className="subheading">Learn Anything</span>
              <h2 className="mb-2">Benefits About Online Learning Expertise</h2>
              <div className="row mt-4 g-lg-2">
                <ServiceCard
                  iconClass="flaticon-online-learning"
                  title="Online Courses"
                  description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                />
                <ServiceCard
                  iconClass="flaticon-certificate"
                  title="Earn A Certificates"
                  description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                />
                <ServiceCard
                  iconClass="flaticon-scientist"
                  title="Learn with Expert"
                  description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourComponent;
