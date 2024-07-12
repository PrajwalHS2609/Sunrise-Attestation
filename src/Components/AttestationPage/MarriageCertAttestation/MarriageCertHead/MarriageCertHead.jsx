import React from "react";
import MarriageCert from "./../../../../vid&img/MarriageCert.jpg";

const MarriageCertHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <h2>
          Marriage Certificate <span>Attestation</span> in Bangalore
        </h2>
      </div>
      <img src={MarriageCert} alt="MarriageCert" />
    </div>
  );
};

export default MarriageCertHead;
