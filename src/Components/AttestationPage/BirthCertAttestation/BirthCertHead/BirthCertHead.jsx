import React from "react";
import "./BirthCertHead.css";
import BirthCert from "./../../../../vid&img/birthCert.jpg";

const BirthCertHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <h2>
          Birth Certificate <span>Attestation</span> in Bangalore
        </h2>
      </div>
      <img src={BirthCert} alt="BirthCert" />
    </div>
  );
};

export default BirthCertHead;
