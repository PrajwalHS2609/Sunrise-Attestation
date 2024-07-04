import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import UkHeading from "./UkHeading/UkHeading";
import WhyBlock from "./../../WhyBlock/WhyBlock";
import UkCard from "./UkCard/UkCard";
import UkCertificate from "./UkCertificate/UkCertificate";
import UkMofa from "./UkMofa/UkMofa";
// import UkService from "./UkService/UkService";
import UkBlore from "./UkBlore/UkBlore";
import UkReq from "./UkReq/UkReq";

const UkAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <UkHeading />
      <WhyBlock />
      <UkCard />
      <UkCertificate />
      <UkMofa />
      {/* <UkService /> */}
      <UkBlore />
      <UkReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default UkAttestation;
