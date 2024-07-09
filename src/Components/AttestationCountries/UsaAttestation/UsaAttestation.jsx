import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import UsaHeading from "./UsaHeading/UsaHeading";
import UsaCard from "./UsaCard/UsaCard";
import UsaBlore from "./UsaBlore/UsaBlore";
import UsaReq from "./UsaReq/UsaReq";
import UsaCertificate from "./UsaCertificate/UsaCertificate";
import WhyBlock from "../../WhyBlock/WhyBlock";
import UsaMofa from "./UsaMofa/UsaMofa";
import UsaBloreCert from "./UsaBloreCert/UsaBloreCert";
// import UsaService from "./UsaService/UsaService";

const UsaAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <UsaHeading />
      <WhyBlock />
      <UsaCard />
      <UsaCertificate />
      <UsaMofa />
      {/* <UsaService /> */}
      <UsaBloreCert/>
      <UsaBlore />
      <UsaReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default UsaAttestation;
