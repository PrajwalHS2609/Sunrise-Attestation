import React from "react";
import "./UaeAttestationHeading.css";
import TypeWriter from "../TypeWriter/TypeWriter";
const UaeAttestationHeading = (props) => {
  return (
    <div className="uaeAttHeadingContainer">
      <TypeWriter />
      <video src={props.uaeAttBanner} autoPlay loop muted />
    </div>
  );
};

export default UaeAttestationHeading;
