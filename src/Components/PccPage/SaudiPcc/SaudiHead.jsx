import React from "react";
import SaudiFlag from "./../../../vid&img/Countries_Flag/Saudi Arabia.png";

const SaudiHead = () => {
  return (
    <div className="HeadContainer">
      <div className="HeadCover">
        <h2>
          Saudi PCC Verification in Bangalore: Seamless Services by{" "}
          <span>Goodway Attestation</span>
        </h2>
      </div>
      <img src={SaudiFlag} alt="SaudiFlag" />
    </div>
  );
};

export default SaudiHead;
