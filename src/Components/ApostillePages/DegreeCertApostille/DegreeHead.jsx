import React from "react";
import DegreeCert from "./../../../vid&img/DegreeCert.jpg";

const DegreeHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <h2>
          Degree <span>Apostille</span> Certificate in Bangalore
        </h2>
      </div>
      <img src={DegreeCert} alt="DegreeCert" />
    </div>
  );
};

export default DegreeHead;
