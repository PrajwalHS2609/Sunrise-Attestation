import React from "react";
import "./Heading.css";
import bannerVid from "./../../../vid&img/Attestationvid.mp4";
import WhyBlock from "../../WhyBlock/WhyBlock";
import TypeWriter from "../TypeWriter/TypeWriter";
const Heading = () => {
  return (
    <div className="headingContainer">
      <TypeWriter />
      <video src={bannerVid} autoPlay loop muted />
      <WhyBlock />
    </div>
  );
};

export default Heading;
