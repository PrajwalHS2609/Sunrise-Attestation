import React from "react";
import "./UaeAttestationPage.css";
import UaeAttestationHeading from "./UaeAttestationHeading/UaeAttestationHeading";
import UaeAttestationCardMain from "./UaeAttestationCard/UaeAttestationCardMain";
import WhyBlock from './../WhyBlock/WhyBlock';
import UaeCertificate from "./UaeCertificate/UaeCertificate";

const UaeAttestationPage = () => {
  return (
    <div className="uaeAttestationPage">
      <UaeAttestationHeading />
      <WhyBlock />
      <UaeAttestationCardMain />
      <UaeCertificate/>
    </div>
  );
};

export default UaeAttestationPage;
