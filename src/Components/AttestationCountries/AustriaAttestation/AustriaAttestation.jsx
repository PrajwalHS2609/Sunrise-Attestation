import React from "react";
import HomeLink from "./../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import AustriaHeading from "./AustriaHeading/AustriaHeading";
import AustriaBlore from './AustriaBlore/AustriaBlore';
import AustriaReq from "./AustriaReq/AustriaReq";
// import AustriaService from './AustriaService/AustriaService';
import AustriaMofa from './AustriaMofa/AustriaMofa';
import AustriaCertificate from './AustriaCertificate/AustriaCertificate';
import AustriaCard from './AustriaCard/AustriaCard';
import AustriaBloreCert from "./AustriaBloreCert/AustriaBloreCert";

const AustriaAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <AustriaHeading />
      <AustriaCard />
      <AustriaCertificate />
      <AustriaMofa />
      {/* <AustriaService /> */}
      <AustriaBloreCert/>
      <AustriaBlore />
      <AustriaReq />
      {/* <AustriaAbout /> */}
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default AustriaAttestation;
