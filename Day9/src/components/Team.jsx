import React from "react";
import "./Team.css"; // Import your CSS file

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Recruiters</h2>
          <p>
            
          </p>
        </div>
        {props.data ? (
          <div className="marquee-container">
            <div className="marquee">
              <ul className="marquee-content">
                {/* Map your team members here */}
                {props.data.map((d, i) => (
                  <li key={`${d.name}-${i}`}>
                    <div className="team">
                      <div className="thumbnail">
                        <img src={d.img} alt="..." className="team-img" />
                        <div className="caption">
                          <h4>{d.name}</h4>
                          <p>{d.job}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
};
