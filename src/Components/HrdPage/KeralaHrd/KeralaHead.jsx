import React from "react";
import keralaHrd from "./../../../vid&img/Hrd/KeralaHrd.png";

const KeralaHead = () => {
  return (
    <div className="mofaHeadContainer">
      <div className="mofaHeadCover">
        <h2>
          MOFA <span>Attestation</span> Services
        </h2>
      </div>
      <img src={keralaHrd} alt="keralaHrd" />
    </div>
  );
};

export default KeralaHead;
