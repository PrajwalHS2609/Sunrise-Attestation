import React from "react";
import "./MofaPage.css";
import MofaHead from "./MofaHead/MofaHead";
import MofaContent from "./MofaContent/MofaHeadContent";
import MofaMain from "./MofaMain/MofaMain";
import MofaBlore from "./MofaBlore/MofaBlore";
import MofaTime from "./MofaTime/MofaTime";
import MofaBloreCert from "./MofaBloreCert/MofaBloreCert";
import HomeLink from "../HomePage/HomeLink.jsx/HomeLink";
import HomeMarquee from "../Marquee/HomeMarquee";
import OurServices from "../HomePage/OurServices/OurServices";
import Benefits from "../Benefits/Benefits";
import Review from "../Review/Review";
import Faq from "../HomePage/Faq/Faq";
const MofaPage = () => {
  return (
    <div className="mofaContainer">
      <MofaHead />
      <MofaContent />
      <MofaMain />
      <MofaBlore />
      <MofaTime />
      <MofaBloreCert />
      <HomeLink />
      <HomeMarquee />
      <OurServices />
      <Benefits />
      <Review />
      <Faq />
    </div>
  );
};

export default MofaPage;
