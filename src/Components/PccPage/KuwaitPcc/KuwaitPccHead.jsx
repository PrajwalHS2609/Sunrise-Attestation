import React from "react";
import KuwaitFlag from "./../../../vid&img/Countries_Flag/Kuwait.png";
import "./KuwaitHead.css"
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";
const KuwaitPccHead = () => {
  return (
    <div className="HeadContainer">
      <div className="HeadCover">
        <h2>
        <TypeWriter txt="Kuwait PCC Verification in " />
        </h2>
      </div>
      <img src={KuwaitFlag} alt="KuwaitFlag" />
    </div>
  );
};

export default KuwaitPccHead;
