import React from "react";
import UaeFlag from "./../../../vid&img/Countries_Flag/UAE.png";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const UaePccHead = () => {
  return (
    <div className="HeadContainer">
      <div className="HeadCover">
        <h2>
          <TypeWriter txt="UAE PCC Verification in " />
        </h2>
      </div>
      <img src={UaeFlag} alt="UaeFlag" />
    </div>
  );
};

export default UaePccHead;
