import React from "react";
import "./AttestationPage.css";
import AttestationFlagMain from "./AttestationFlags/AttestationFlagMain";
import HomeLink from "../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../Marquee/HomeMarquee";
import OurServices from "../HomePage/OurServices/OurServices";
import Benefits from "../Benefits/Benefits";
import Review from "../Review/Review";
import Faq from "../HomePage/Faq/Faq";
import AttestationEdu from "./AttestationEdu/AttestationEdu";
import AttestationBloreCert from "./AttestationBloreCert/AttestationBloreCert";

const AttestationPage = () => {
  return (
    <div className="AttestationPageContainer">
      <AttestationFlagMain />
      <AttestationEdu/>
      <AttestationBloreCert/>
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
