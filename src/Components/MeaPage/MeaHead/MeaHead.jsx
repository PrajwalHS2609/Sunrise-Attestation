import React from "react";
import "./MeaHead.css";
import mofaBanner from "./../../../vid&img/mofaBanner.jpg";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const MeaHead = () => {
  return (
    <div className="meaHeadContainer">
      <div className="meaHeadCover">
        <h2>
          <TypeWriter txt="MEA Attestation Service in " />
        </h2>
      </div>
      <img src={mofaBanner} alt="mofaBanner" />
    </div>
  );
};

export default MeaHead;
