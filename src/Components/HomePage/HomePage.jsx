import React from "react";
import Heading from "./Heading/Heading";
import OurServices from "./OurServices/OurServices";
import HomeMarquee from "../Marquee/HomeMarquee";
import HomeFlags from "./HomeFlags/HomeFlags";
import Benefits from "../Benefits/Benefits";
import WhyBlock from "../WhyBlock/WhyBlock";
import Review from "../Review/Review";
const HomePage = () => {
  return (
    <div>
      <Heading />
      <WhyBlock />
      <HomeFlags/>
      <HomeMarquee />
      <OurServices/>
      <Benefits/>
      <Review/>
      
    </div>
  );
};

export default HomePage;
