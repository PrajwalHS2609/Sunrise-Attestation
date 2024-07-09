import React from "react";
import "./../BahrainAttestation/BahrainAttestation.css";
import Review from "../../Review/Review";
import Benefits from "../../Benefits/Benefits";
import OurServices from "../../HomePage/OurServices/OurServices";
import HomeMarquee from "../../Marquee/HomeMarquee";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import KuwaitHeading from './KuwaitHeading/KuwaitHeading';
import WhyBlock from "../../WhyBlock/WhyBlock";
import KuwaitCard from './KuwaitCard/KuwaitCard';
import KuwaitCertificate from './KuwaitCertificate/KuwaitCertificate';
import KuwaitMofa from './KuwaitMofa/KuwaitMofa';
import KuwaitBlore from './KuwaitBlore/KuwaitBlore';
import KuwaitReq from "./KuwaitReq/KuwaitReq";
import KuwaitFaq from './KuwaitFaq/KuwaitFaq';

const KuwaitAttestation = () => {
  return (
    <div className="bahrainAttestationPage">
      <KuwaitHeading/>
      <WhyBlock/>
      <KuwaitCard/>
      <KuwaitCertificate/>
      <KuwaitMofa/>
      <KuwaitBlore/>
      <KuwaitReq/>
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <KuwaitFaq />
    </div>
  );
};

export default KuwaitAttestation;
