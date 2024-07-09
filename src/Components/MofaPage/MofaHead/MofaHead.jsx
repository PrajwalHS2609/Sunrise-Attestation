import React from "react";
import "./MofaHead.css";
import mofaBanner from "./../../../vid&img/mofaBanner.jpg";
const MofaHead = () => {
  return (
    <>
      <div className="mofaHeadContainer">
        <div className="mofaHeadCover">
          <h2>
            MOFA <span>Attestation</span> Services
          </h2>
        </div>
        <img src={mofaBanner} alt="mofaBanner" />
      </div>
    </>
  );
};

export default MofaHead;
