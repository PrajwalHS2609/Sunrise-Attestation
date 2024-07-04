import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import OmanHeading from "./OmanHeading/OmanHeading";
import OmanReq from './OmanReq/OmanReq';
import OmanBlore from "./OmanBlore/OmanBlore";
import OmanService from "./OmanService/OmanService";
import OmanMofa from "./OmanMofa/OmanMofa";
import OmanCertificate from "./OmanCertificate/OmanCertificate";
import OmanCard from "./OmanCard/OmanCard";
import WhyBlock from './../../WhyBlock/WhyBlock';

const OmanAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <OmanHeading/>
      <WhyBlock />
      <OmanCard />
      <OmanCertificate />
      <OmanMofa />
      <OmanService />
      <OmanBlore />
      <OmanReq />
      {/* <OmanAbout /> */}
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default OmanAttestation;
