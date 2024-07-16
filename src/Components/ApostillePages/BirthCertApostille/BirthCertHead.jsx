import React from "react";
import BirthCert from "./../../../vid&img/birthCert.jpg";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const BirthCertHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <h2>
        <TypeWriter txt="Birth Apostille Certificate  in" />
        </h2>
      </div>
      <img src={BirthCert} alt="BirthCert" />
    </div>
  );
};

export default BirthCertHead;
