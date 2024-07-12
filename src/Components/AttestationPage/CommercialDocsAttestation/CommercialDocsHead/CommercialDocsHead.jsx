import React from "react";
import CommercialDocs from "./../../../../vid&img/CommercialDocs.jpg";

const CommercialDocsHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <h2>
          Commercial Documents <span>Attestation</span> in Bangalore
        </h2>
      </div>
      <img src={CommercialDocs} alt="CommercialDocs" />
    </div>
  );
};

export default CommercialDocsHead;
