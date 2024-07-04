import React from "react";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../../Marquee/HomeMarquee";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import NetherlandHeading from './NetherlandHeading/NetherlandHeading';
import WhyBlock from './../../WhyBlock/WhyBlock';
import NetherlandCard from './NetherlandCard.jsx/NetherlandCard';
import NetherlandCertificate from './NetherlandCertificate/NetherlandCertificate';
import NetherlandMofa from './NetherlandMofa/NetherlandMofa';
import NetherlandBlore from "./NetherlandBlore/NetherlandBlore";
import NetherlandReq from './NetherlandReq/NetherlandReq';

const NetherlandAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <NetherlandHeading />
      <WhyBlock />
      <NetherlandCard />
      <NetherlandCertificate />
      <NetherlandMofa />
      {/* <NetherlandAbout /> */}
      {/* <NetherlandService /> */}
      <NetherlandBlore />
      <NetherlandReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default NetherlandAttestation;
