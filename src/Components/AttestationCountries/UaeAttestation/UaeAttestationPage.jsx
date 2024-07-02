import React from "react";
import "./UaeAttestationPage.css";
import UaeAttestationHeading from "./UaeAttestationHeading/UaeAttestationHeading";
import UaeAttestationCardMain from "./UaeAttestationCard/UaeAttestationCardMain";
import WhyBlock from "./../../WhyBlock/WhyBlock";
import UaeCertificate from "./UaeCertificate/UaeCertificate";
import UaeMofa from "./UaeMofa/UaeMofa";
import UaeBlore from "./UaeBlore/UaeBlore";
import UaeReq from "./UaeReq/UaeReq";
import UaeAbout from "./UaeAbout/UaeAbout";
import UaeService from "./UaeService/UaeService";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";


const UaeAttestationPage = () => {
  return (
    <div className="uaeAttestationPage">
      <UaeAttestationHeading />
      <WhyBlock />
      <UaeAttestationCardMain />
      <UaeCertificate />
      <UaeMofa />
      <UaeService />
      <UaeBlore />
      <UaeReq />
      <UaeAbout />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default UaeAttestationPage;
