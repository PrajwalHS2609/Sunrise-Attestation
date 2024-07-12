import React from "react";

const BirthCertExp = () => {
  return (
    <div className="birthCertExpContainer">
      <h2>
        Detailed Explanation of Birth Certificate <span> Apostille </span> in
        Bangalore
      </h2>
      <p>
        To provide a comprehensive understanding, here is a detailed explanation
        of each step involved in the birth certificate apostille process:
      </p>
      <ul>
        <li>
          <h3>
            {" "}
            <span> 1.</span> Notary Attestation:
          </h3>{" "}
          The notary public in Bangalore verifies the authenticity of the birth
          certificate. This involves checking the details on the certificate
          against the records and ensuring that the certificate is not
          fraudulent. The notary then adds their official seal and signature to
          the document, indicating that it has been verified.
        </li>
        <li>
          <h3>
            <span> 2.</span> State Education Department Attestation:
          </h3>{" "}
          After the notary attestation, the document is submitted to the Home
          Department. This department is responsible for verifying the
          authenticity of documents issued within the state. The Home Department
          checks the certificate's details and compares them with their records.
          Once verified, the Home Department adds its seal and signature to the
          document.
        </li>
        <li>
          <h3>
            <span>3.</span> MEA (Ministry of External Affairs) Attestation:
          </h3>
          The final step involves the Ministry of External Affairs. The MEA
          verifies the document and adds its official apostille sticker. This
          sticker contains a unique identification number that can be used to
          verify the document's authenticity online. The MEA apostille confirms
          that the document is genuine and can be used internationally.
        </li>
      </ul>
    </div>
  );
};

export default BirthCertExp;
