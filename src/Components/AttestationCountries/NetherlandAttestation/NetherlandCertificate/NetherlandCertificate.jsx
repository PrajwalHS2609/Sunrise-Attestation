import React from "react";
import UaeCertificateHead from "../../UaeAttestation/UaeCertificate/UaeCertificateHead";
import UaeCertificateMain from "../../UaeAttestation/UaeCertificate/UaeCertificateMain";
import "./../../UaeAttestation/UaeCertificate/UaeCertificate.css";
const NetherlandCertificate = () => {
  return (
    <div className="uaeCertContainer">
      <UaeCertificateHead certHead="Certificates Required For Netherland Embassy Attestation" />
      <UaeCertificateMain />
    </div>
  );
};

export default NetherlandCertificate;
