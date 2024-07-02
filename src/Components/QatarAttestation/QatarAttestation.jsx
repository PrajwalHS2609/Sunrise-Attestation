import React from "react";
import "./QatarAttestation.css";
import QatarCardMain from "./QatarCard/QatarCardMain";
import QatarHeading from "./QatarHeading/QatarHeading";
import WhyBlock from "../WhyBlock/WhyBlock";
import HomeMarquee from "../Marquee/HomeMarquee";
import OurServices from "../HomePage/OurServices/OurServices";
import Benefits from "../Benefits/Benefits";
import Review from "../Review/Review";
import Faq from "../HomePage/Faq/Faq";
import QatarMofa from "./QatarMofa/QatarMofa";
import QatarCertificate from "./QatarCertificate/QatarCertificate";
const QatarAttestation = () => {
  return (
    <div className="qatarAttestationPage">
      <QatarHeading />
      <WhyBlock />
      <QatarCardMain />
      <QatarCertificate />
      <QatarMofa/>
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default QatarAttestation;
