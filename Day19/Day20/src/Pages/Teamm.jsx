import React from "react";
import '../Asset/Styles/Team.css';
const teamData = [
  {
    img: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/05/05/Photos/Processed/wiprologo-kXmF--621x414@LiveMint.jpg"
  },
   {
     img: "https://cdn.logojoy.com/wp-content/uploads/20230629132442/Amazon-logo.jpg"
   },
   {
     img: "https://1000logos.net/wp-content/uploads/2016/10/Colors-Accenture-logo.jpg"
   },
   {
     img: "https://entrackr.com/storage/2022/06/kaar-technologies.jpg"
   },
   {
     img: "https://zohowebstatic.com/sites/default/files/ogimage/zoho-logo.png"
   },
   {
     img: "data:image/png;base64,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"
   },
   {
     img: "https://professionallyspeaking.net/wp-content/uploads/2017/04/infosys-logo-1.jpg"
   },
   {
     img: "https://photos.prnewswire.com/prnfull/20140109/662862"
   },
  // {
  //   img: "https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg"
  // },
  // {
  //   img: "https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg"
  // },
  // {
  //   img: "https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg"
  // },
  // {
  //   img: "https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg"
  // },
  // {
  //   img: "https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg"
  // },
  // {
  //   img: "https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg"
  // },
  // {
  //   img: "https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg"
  // },
  // {
  //   img: "https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg"
  // },
  // {
  //   img: "https://www.seekpng.com/png/detail/14-141492_google-logos-vector-symbol-google.png"
  // },
  // {
  //   img: "https://www.seekpng.com/png/detail/14-141492_google-logos-vector-symbol-google.png"
  // },
  // {
  //   img: "https://www.seekpng.com/png/detail/14-141492_google-logos-vector-symbol-google.png"
  // },
  // {
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFnrltowDJ2CK_vgtI7AjoiKE8oAgkT1XAZDYuJejSpB3xsru_vJZG27Ar1EqjNXc-Mg&usqp=CAU"
  // },
  // Add names and job titles for the remaining team members
];

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="team-container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2 className="recruiter-list">Recruiters</h2>
          <p></p>
        </div>
        {teamData ? (
          <div className="marquee-container">
            <div className="marquee">
              <ul className="marquee-content">
                {/* Map your team members here */}
                {teamData.map((d, i) => (
                  
                        <img src={d.img} alt="..." className="team-img" />
                       
                     
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
