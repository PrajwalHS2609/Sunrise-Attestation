import React from "react";
import "./AboutUs.css";
import AboutUsMain from "./AboutUsMain";
import AboutUsHead from "./AboutUsHead";
import about from "./../../../vid&img/Attributes Banner/aboutUs.png";
import AboutUsIcons from "./AboutUsIcons";
const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <AboutUsHead />
      <div className="aboutUsWrapper">
        <div className="aboutUsContent">
          <AboutUsMain />
          <AboutUsIcons/>
        </div>
        <div className="aboutUsContent">
          <img src={about} alt="aboutImg" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
