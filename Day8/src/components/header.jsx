import React, { useState, useEffect } from "react";

export const Header = (props) => {
  // Define an array of background image URLs
  const backgrounds = [
    "../img/un.jpg", // Add more image URLs here
    "img/univ/eee1.jpg",
    // "../img/yet-another-image.jpg",
  ];

  // State to manage the current background image index
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  // Function to update the background image index
  const changeBackground = () => {
    setCurrentBackgroundIndex((prevIndex) =>
      (prevIndex + 1) % backgrounds.length
    );
  };

  // Use useEffect to start the interval when the component mounts
  useEffect(() => {
    const intervalId = setInterval(changeBackground, 5000); // Change image every 5 seconds (adjust as needed)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const currentBackground = backgrounds[currentBackgroundIndex];

  return (
    <header id="header">
      <div className="intro" style={{ backgroundImage: `url(${currentBackground})` }}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#features" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
