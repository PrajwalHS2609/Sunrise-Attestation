import React from "react";
import eduCert from "./../../../vid&img/DegreeCert.jpg";
import TypeWriter from "../BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const DegreeCertHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <h2>
          <TypeWriter txt="Degree Certificate Attestation in" />
        </h2>
      </div>
      <img src={eduCert} alt="eduCert" />
    </div>
  );
};

export default DegreeCertHead;
