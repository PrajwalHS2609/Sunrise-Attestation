import React from "react";
import Heading from "./Heading/Heading";
import OurServices from "./OurServices/OurServices";
import HomeMarquee from "../Marquee/HomeMarquee";
import HomeFlags from "./HomeFlags/HomeFlags";
const HomePage = () => {
  return (
    <div>
      <Heading />
      <HomeFlags/>
      <HomeMarquee />
      <OurServices/>
    </div>
  );
};

export default HomePage;
