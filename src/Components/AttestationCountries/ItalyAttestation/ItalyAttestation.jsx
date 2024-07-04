import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeLink from "./../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
// import ItalyService from "./ItalyService/ItalyService";
import ItalyMofa from "./ItalyMofa/ItalyMofa";
import ItalyCertificate from "./ItalyCertificate/ItalyCertificate";
import ItalyCard from "./ItalyCard/ItalyCard";
import WhyBlock from "./../../WhyBlock/WhyBlock";
import ItalyHeading from "./ItalyHeading/ItalyHeading";
import ItalyBlore from './ItalyBlore/ItalyBlore';
import ItalyReq from './ItalyReq/ItalyReq';

const ItalyAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <ItalyHeading />
      <WhyBlock />
      <ItalyCard />
      <ItalyCertificate />
      <ItalyMofa />
      {/* <ItalyService /> */}
      <ItalyBlore />
      <ItalyReq />
      {/* <ItalyAbout /> */}
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default ItalyAttestation;
