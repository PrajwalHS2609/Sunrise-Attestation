import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import SaudiHeading from "./SaudiHeading/SaudiHeading";
import SaudiMainCard from "./SaudiCard/SaudiMainCard";
import SaudiCertificate from "./SaudiCertificate/SaudiCertificate";
import SaudiMofa from "./SaudiMofa/SaudiMofa";
import SaudiBlore from "./SaudiBlore/SaudiBlore";
import SaudiReq from "./SaudiReq/SaudiReq";
import SaudiAbout from "./SaudiAbout/SaudiAbout";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import WhyBlock from './../../WhyBlock/WhyBlock';

const SaudiAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <SaudiHeading />
      <WhyBlock />
      <SaudiMainCard />
      <SaudiCertificate />
      <SaudiMofa />
      <SaudiBlore />
      <SaudiReq />
      <SaudiAbout />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default SaudiAttestation;
