import React from "react";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import DegreeCertHead from "./DegreeCertHead";
import DegreeCertHeadContent from "./DegreeCertHeadContent";
import DegreeCertImp from "./DegreeCertImp";
import DegreeCertProcess from "./DegreeCertProcess";
import DegreeCertReq from "./DegreeCertReq";
import DegreeCertAssist from "./DegreeCertAssist";
import DegreeGuide from './DegreeGuide';

const DegreeCertAttestation = () => {
  return (
    <div className="birthCertContainer">
      <DegreeCertHead />
      <DegreeCertHeadContent />
      <DegreeCertImp />
      <DegreeCertProcess />
      <DegreeCertReq />
      <DegreeCertAssist />
      <DegreeGuide/>
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default DegreeCertAttestation;
