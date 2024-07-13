import React from "react";
import KuwaitFlag from "./../../../vid&img/Countries_Flag/Kuwait.png";
import "./KuwaitHead.css"
const KuwaitPccHead = () => {
  return (
    <div className="HeadContainer">
      <div className="HeadCover">
        <h2>
          Kuwait PCC Verification in Bangalore: Seamless Services by{" "}
          <span>Goodway Attestation</span>
        </h2>
      </div>
      <img src={KuwaitFlag} alt="KuwaitFlag" />
    </div>
  );
};

export default KuwaitPccHead;
