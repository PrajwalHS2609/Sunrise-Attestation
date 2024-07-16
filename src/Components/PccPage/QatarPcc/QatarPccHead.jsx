import React from "react";
import QatarFlag from "./../../../vid&img/Countries_Flag/Qatar.png";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const QatarPccHead = () => {
  return (
    <div className="HeadContainer">
      <div className="HeadCover">
        <h2>
        <TypeWriter txt="Qatar PCC Verification in " />
        </h2>
      </div>
      <img src={QatarFlag} alt="QatarFlag" />
    </div>
  );
};

export default QatarPccHead;
