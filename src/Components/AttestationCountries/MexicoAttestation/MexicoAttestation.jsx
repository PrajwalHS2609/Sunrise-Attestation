import React from "react";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import MexicoHeading from "./MexicoHeading/MexicoHeading";
import WhyBlock from "../../WhyBlock/WhyBlock";
import MexicoMofa from "./MexicoMofa/MexicoMofa";
import MexicoBlore from "./MexicoBlore/MexicoBlore";
import MexicoCertificate from "./MexicoCertificate/MexicoCertificate";
// import MexicoService from "./MexicoService/MexicoService";
import MexicoCard from "./MexicoCard/MexicoCard";
import MexicoReq from './MexicoReq/MexicoReq';

const MexicoAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <MexicoHeading />
      <WhyBlock />
      <MexicoCard />
      <MexicoCertificate />
      <MexicoMofa />
      {/* <MexicoService /> */}
      <MexicoBlore />
      <MexicoReq />
      {/* <MexicoAbout /> */}
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default MexicoAttestation;
