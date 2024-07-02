import React from "react";
import "../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import uaeAttBanner from "./../../../vid&img/UAE Attestation.mp4";
import TypeWriter from "../QatarTypeWriter/TypeWriter";

const QatarHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <TypeWriter />
      <video src={uaeAttBanner} autoPlay loop muted />
    </div>
  );
};

export default QatarHeading;
