import React from "react";
import keralaHrd from "./../../../vid&img/Hrd/KeralaHrd.png";

const KeralaHead = () => {
  return (
    <div className="kaHeadContainer">
    <div className="kaHeadCover">
      <h2>
      HRD Attestation in Kerala by <span>Goodway Attestation</span>
      </h2>
    </div>
    <img src={keralaHrd} alt="keralaHrd" />
  </div>
  );
};

export default KeralaHead;
