import React from "react";
import MarriageCert from "./../../../../vid&img/MarriageCert.jpg";
import TypeWriter from "../../BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const MarriageCertHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <h2>
        <TypeWriter txt="Marriage Certificate Attestation in" />
        </h2>
      </div>
      <img src={MarriageCert} alt="MarriageCert" />
    </div>
  );
};

export default MarriageCertHead;
