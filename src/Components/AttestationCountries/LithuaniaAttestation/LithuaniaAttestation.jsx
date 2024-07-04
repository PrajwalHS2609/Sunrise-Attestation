import React from "react";
import "./../../AttestationCountries/UaeAttestation/UaeAttestationPage.css";
import HomeMarquee from "../../Marquee/HomeMarquee";
import HomeLink from "../../HomePage/HomeLink.jsx/HomeLink";
import OurServices from "../../HomePage/OurServices/OurServices";
import Benefits from "../../Benefits/Benefits";
import Review from "../../Review/Review";
import Faq from "../../HomePage/Faq/Faq";
import LithuaniaBlore from "./LithuaniaBlore/LithuaniaBlore";
import LithuaniaMofa from "./LithuaniaMofa/LithuaniaMofa";
import LithuaniaCertificate from "./LithuaniaCertificate/LithuaniaCertificate";
import LithuaniaCard from "./LithuaniaCard/LithuaniaCard";
import WhyBlock from "./../../WhyBlock/WhyBlock";
import LithuaniaHeading from "./LithuaniaHeading/LithuaniaHeading";
import LithuaniaReq from "./LithuaniaReq/LithuaniaReq";

const LithuaniaAttestation = () => {
  return (
    <div className="uaeAttestationPage">
      <LithuaniaHeading />
      <WhyBlock />
      <LithuaniaCard />
      <LithuaniaCertificate />
      <LithuaniaMofa />
      {/* <LithuaniaService /> */}
      <LithuaniaBlore />
      <LithuaniaReq />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default LithuaniaAttestation;
