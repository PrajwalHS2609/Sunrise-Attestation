import React from "react";
import Heading from "./Heading/Heading";
import OurServices from "./OurServices/OurServices";
import HomeMarquee from "../Marquee/HomeMarquee";
import HomeFlags from "./HomeFlags/HomeFlags";
import WhyBlock from "../WhyBlock/WhyBlock";
const HomePage = () => {
  return (
    <div>
      <Heading />
      <WhyBlock/>
      <HomeFlags/>
      <HomeMarquee />
      <OurServices/>
    </div>
  );
};

export default HomePage;
