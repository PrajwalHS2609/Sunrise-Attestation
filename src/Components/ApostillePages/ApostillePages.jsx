import React from "react";
import "./../AttestationPage/AttestationPage.css";
import ApostilleFlagsMain from "./ApostilleFlags/ApostilleFlagsMain";
import WhyBlock from "../WhyBlock/WhyBlock";
import HomeLink from "../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../Marquee/HomeMarquee";
import OurServices from "../HomePage/OurServices/OurServices";
import Benefits from "../Benefits/Benefits";
import Review from "../Review/Review";
import Faq from "../HomePage/Faq/Faq";
import ApostilleBlore from "./ApostilleBlore/ApostilleBlore";
const ApostillePages = () => {
  return (
    <div className="AttestationPageContainer">
      <ApostilleFlagsMain />
      <WhyBlock />
      <ApostilleBlore/>
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default ApostillePages;
