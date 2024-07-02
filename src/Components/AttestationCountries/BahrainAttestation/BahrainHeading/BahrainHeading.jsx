import React from "react";
import "../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import uaeAttBanner from "./../../../../vid&img/UAE Attestation.mp4";
import TypeWriter from "./../BahrainTypeWriter/TypeWriter";
const BahrainHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <TypeWriter />
      <video src={uaeAttBanner} autoPlay loop muted />
    </div>
  );
};

export default BahrainHeading;
