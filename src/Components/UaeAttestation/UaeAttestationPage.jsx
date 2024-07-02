import React from "react";
import "./UaeAttestationPage.css";
import UaeAttestationHeading from "./UaeAttestationHeading/UaeAttestationHeading";
import UaeAttestationCardMain from "./UaeAttestationCard/UaeAttestationCardMain";
import WhyBlock from "./../WhyBlock/WhyBlock";
import UaeCertificate from "./UaeCertificate/UaeCertificate";
import UaeMofa from "./UaeMofa/UaeMofa";
import UaeBlore from "./UaeBlore/UaeBlore";
import UaeReq from "./UaeReq/UaeReq";
import UaeAbout from "./UaeAbout/UaeAbout";
import UaeService from "./UaeService/UaeService";
import HomeMarquee from "../Marquee/HomeMarquee";
import Review from "../Review/Review";
import Benefits from "../Benefits/Benefits";
import OurServices from "../HomePage/OurServices/OurServices";
import uaeAttBanner from "./../../vid&img/UAE Attestation.mp4";
import HomeLink from "../HomePage/HomeLink.jsx/HomeLink";
import UaeFaq from "./UaeFaq/UaeFaq";

const UaeAttestationPage = () => {
  return (
    <div className="uaeAttestationPage">
      <UaeAttestationHeading uaeAttBanner={uaeAttBanner} />
      <WhyBlock />
      <UaeAttestationCardMain />
      <UaeCertificate />
      <UaeMofa />
      <UaeBlore />
      <UaeService />
      <UaeAbout />
      <HomeLink />
      <UaeReq />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <UaeFaq/>
    </div>
  );
};

export default UaeAttestationPage;
