import React from "react";
import "./BirthCertHead.css";
import BirthCert from "./../../../../vid&img/birthCert.jpg";
import TypeWriter from "./TypeWriter/TypeWriter";

const BirthCertHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <h2>
          <TypeWriter txt="Birth Certificate Apostille in "/>
        </h2>
      </div>
      <img src={BirthCert} alt="BirthCert" />
    </div>
  );
};

export default BirthCertHead;
