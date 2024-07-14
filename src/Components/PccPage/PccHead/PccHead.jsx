import React from "react";
import Pcc from "./../../../vid&img/mofa.png";

const PccHead = () => {
  return (
    <div className="mofaHeadContainer">
    <div className="mofaHeadCover">
      <h2>
      Pcc <span>Attestation</span> Services
      </h2>
    </div>
    <img src={Pcc} alt="mofaBanner" />
  </div>
  );
};

export default PccHead;
