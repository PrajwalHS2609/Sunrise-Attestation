import React from "react";
import "./HrdHead.css";
import mofaBanner from "./../../../vid&img/mofaBanner.jpg";

const HrdHead = () => {
  return (
    <div className="hrdHeadContainer">
      <div className="hrdHeadCover">
        <h2>
          <span>State HRD</span> and <span>Home Department Service</span>
        </h2>
      </div>
      <img src={mofaBanner} alt="" />
    </div>
  );
};

export default HrdHead;
