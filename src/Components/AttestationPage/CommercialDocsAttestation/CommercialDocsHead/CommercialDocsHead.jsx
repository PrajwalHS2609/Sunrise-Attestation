import React from "react";
import CommercialDocs from "./../../../../vid&img/CommercialDocs.jpg";
import TypeWriter from "../../BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const CommercialDocsHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <h2>
        <TypeWriter txt="Commercial Documents Certificate Attestation in" />
        </h2>
      </div>
      <img src={CommercialDocs} alt="CommercialDocs" />
    </div>
  );
};

export default CommercialDocsHead;
