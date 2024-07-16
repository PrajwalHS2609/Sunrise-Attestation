import React from "react";
import SaudiFlag from "./../../../vid&img/Countries_Flag/Saudi Arabia.png";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const SaudiHead = () => {
  return (
    <div className="HeadContainer">
      <div className="HeadCover">
        <h2>
          <TypeWriter txt="Saudi PCC Verification in " />
        </h2>
      </div>
      <img src={SaudiFlag} alt="SaudiFlag" />
    </div>
  );
};

export default SaudiHead;
