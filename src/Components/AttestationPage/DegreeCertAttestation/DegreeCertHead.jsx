import React from "react";
import eduCert from "./../../../vid&img/DegreeCert.jpg";

const DegreeCertHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <h2>
          Degree Certificate <span>Attestation</span> in Bangalore
        </h2>
      </div>
      <img src={eduCert} alt="eduCert" />
    </div>
  );
};

export default DegreeCertHead;
