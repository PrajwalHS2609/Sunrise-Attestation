import React from "react";
import BirthCert from "./../../../vid&img/birthCert.jpg";

const BirthCertHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <h2>
          Birth Certificate <span>Apostille</span> in Bangalore
        </h2>
      </div>
      <img src={BirthCert} alt="BirthCert" />
    </div>
  );
};

export default BirthCertHead;
