import React from "react";
import "./QatarAttestation.css";
import QatarCardMain from "./QatarCard/QatarCardMain";
import QatarHeading from "./QatarHeading/QatarHeading";

import QatarMofa from "./QatarMofa/QatarMofa";
import QatarCertificate from "./QatarCertificate/QatarCertificate";
import QatarBlore from "./QatarBlore/QatarBlore";
import QatarReq from "./QatarReq/QatarReq";
import QatarAbout from "./QatarAbout/QatarAbout";
import HomeMarquee from './../../Marquee/HomeMarquee';
import OurServices from './../../HomePage/OurServices/OurServices';
import Benefits from './../../Benefits/Benefits';
import Review from './../../Review/Review';
import Faq from './../../HomePage/Faq/Faq';
import WhyBlock from './../../WhyBlock/WhyBlock';
import HomeLink from './../../HomePage/HomeLink.jsx/HomeLink';
const QatarAttestation = () => {
  return (
    <div className="qatarAttestationPage">
      <QatarHeading />
      <WhyBlock />
      <QatarCardMain />
      <QatarCertificate />
      <QatarMofa />
      <QatarBlore />
      <QatarReq />
      <QatarAbout />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default QatarAttestation;
