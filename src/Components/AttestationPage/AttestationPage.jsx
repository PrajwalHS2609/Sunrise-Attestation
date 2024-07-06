import React from "react";
import "./AttestationPage.css";
import AttestationFlagMain from "./AttestationFlags/AttestationFlagMain";
import HomeLink from "../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../Marquee/HomeMarquee";
import OurServices from "../HomePage/OurServices/OurServices";
import Benefits from "../Benefits/Benefits";
import Review from "../Review/Review";
import Faq from "../HomePage/Faq/Faq";
import WhyBlock from "../WhyBlock/WhyBlock";
import AttestationBlore from "./AttestationBlore/AttestationBlore";

const AttestationPage = () => {
  return (
    <div className="AttestationPageContainer">
      <AttestationFlagMain />
      <WhyBlock />
      <AttestationBlore/>
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default AttestationPage;
