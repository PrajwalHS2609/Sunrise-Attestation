import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import VietnamHeading from './VietnamHeading/VietnamHeading';
import WhyBlock from "../../WhyBlock/WhyBlock";
import VietnamCard from './VietnamCard/VietnamCard';
import VietnamCertificate from './VietnamCertificate/VietnamCertificate';
import VietnamMofa from './VietnamMofa/VietnamMofa';
import VietnamService from './VietnamService/VietnamService';
import VietnamBlore from './VietnamBlore/VietnamBlore';
import VietnamReq from "./VietnamReq/VietnamReq";

const VietnamAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <VietnamHeading />
      <WhyBlock />
      <VietnamCard />
      <VietnamCertificate />
      <VietnamMofa />
      <VietnamService />
      <VietnamBlore />
      <VietnamReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default VietnamAttestation;
