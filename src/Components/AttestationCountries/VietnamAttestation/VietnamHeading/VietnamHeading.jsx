import React from "react";
import saudiAttBanner from "./../../../../vid&img/bannerVids/Saudi Arabia.mp4";
import TypeWriter from "./../VietnamTypeWriter/TypeWriter";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css"

const VietnamHeading = () => {
  return (
      <div className="uaeAttHeadingContainer">
        <TypeWriter />
        <video src={saudiAttBanner} autoPlay loop muted />
      </div>
  );
};

export default VietnamHeading;
