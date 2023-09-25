import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <div
          title={title}
          data-lightbox-gallery="gallery1"
          className="hover-text"
        >
          <h4>{title}</h4>
        </div>
        <img src={smallImage} className="img-responsive" alt={title} />
      </div>
    </div>
  );
};
