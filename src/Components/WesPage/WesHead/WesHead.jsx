import React from "react";
import "./WesHead.css";
import WesBanner from "./../../../vid&img/WesBanner.jpg";

const WesHead = () => {
  return (
    <div className="wesHeadContainer">
      <div className="wesHeadCover">
        <h2>
          WES <span>Attestation</span> and <span>Verification</span>in Bangalore
        </h2>
      </div>
      <img src={WesBanner} alt="WesBanner" />
    </div>
  );
};

export default WesHead;
