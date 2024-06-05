import React from "react";
import "./Heading.css";
import bannerVid from "./../../../vid&img/Attestationvid.mp4";
const Heading = () => {
  return (
    <div className="headingContainer">
      <video src={bannerVid} autoPlay loop muted />
    </div>
  );
};

export default Heading;
