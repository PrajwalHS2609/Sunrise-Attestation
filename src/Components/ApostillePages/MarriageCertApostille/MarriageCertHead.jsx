import React from "react";
import MarriageCert from "./../../../vid&img/MarriageCert.jpg";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const MarriageCertHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <h2>
        <TypeWriter txt="Marriage Apostille Certificate in" />
        </h2>
      </div>
      <img src={MarriageCert} alt="MarriageCert" />
    </div>
  );
};

export default MarriageCertHead;
