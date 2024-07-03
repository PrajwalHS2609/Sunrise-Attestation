import React from "react";
import "../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import kuwaitAttBanner from "./../../../../vid&img/UAE Attestation.mp4";
import TypeWriter from './../KuwaitTypeWriter/TypeWriter';
const KuwaitHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <TypeWriter />
      <video src={kuwaitAttBanner} autoPlay loop muted />
    </div>
  );
};

export default KuwaitHeading;
