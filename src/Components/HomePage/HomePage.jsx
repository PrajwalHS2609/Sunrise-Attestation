import React from "react";
import Heading from "./Heading/Heading";
import OurServices from "./OurServices/OurServices";
import HomeMarquee from "../Marquee/HomeMarquee";
import HomeFlags from "./HomeFlags/HomeFlags";
import Benefits from "../Benefits/Benefits";
import WhyBlock from "../WhyBlock/WhyBlock";
import Review from "../Review/Review";
import AboutUs from "./AboutUs/AboutUs";
import HomeLink from "./HomeLink.jsx/HomeLink";
import SeoContent from "./SeoContent/SeoContent";
import Faq from "./Faq/Faq";
import Map from "../Map/Map";
const HomePage = () => {
  return (
    <div>
      <Heading />
      <WhyBlock />
      <HomeFlags />
      <HomeMarquee />
      <OurServices />
      <AboutUs />
      <HomeLink />
      <Benefits />
      <Review />
      <SeoContent />
      <Faq />
      <Map />
    </div>
  );
};

export default HomePage;
