import React from "react";
import "./Marquee.css";
import HomeMarqueeCard from "./HomeMarqueeCard";
import Marquee from "react-fast-marquee";
import australiaFlag from "./../../vid&img/Countries_Flag/australia.png";
import austriaFlag from "./../../vid&img/Countries_Flag/austria.png";
import bahrainFlag from "./../../vid&img/Countries_Flag/Baharain.png";
import egyptFlag from "./../../vid&img/Countries_Flag/Egypt.png";
import franceFlag from "./../../vid&img/Countries_Flag/France.png";
import germanyFlag from "./../../vid&img/Countries_Flag/Germany.png";
import italyFlag from "./../../vid&img/Countries_Flag/Baharain.png";
import kuwaitFlag from "./../../vid&img/Countries_Flag/Kuwait.png";
import malaysiaFlag from "./../../vid&img/Countries_Flag/Malaysia.png";
import mexicoFlag from "./../../vid&img/Countries_Flag/Mexico.png";
import netherlandFlag from "./../../vid&img/Countries_Flag/Netherlands.png";
import nigeriaFlag from "./../../vid&img/Countries_Flag/nigeria.png";
import omanFlag from "./../../vid&img/Countries_Flag/Oman.png";
import philippinesFlag from "./../../vid&img/Countries_Flag/philippines.png";
import qatarFlag from "./../../vid&img/Countries_Flag/Qatar.png";
import saudiFlag from "./../../vid&img/Countries_Flag/Saudi Arabia.png";
import taiwanFlag from "./../../vid&img/Countries_Flag/taiwan.png";
import swedenFlag from "./../../vid&img/Countries_Flag/Sweden.png";
import uaeFlag from "./../../vid&img/Countries_Flag/UAE.png";
import ukFlag from "./../../vid&img/Countries_Flag/UK.png";
import usaFlag from "./../../vid&img/Countries_Flag/USA.png";
import vietnamFlag from "./../../vid&img/Countries_Flag/vietnam.png";
import chinaFlag from "./../../vid&img/Countries_Flag/chinaFlag.png";

import HomeMarqueeHead from "./HomeMarqueeHead";

const HomeMarquee = () => {
  return (
    <div className="marqueeContainer">
      <HomeMarqueeHead />
      <Marquee>
        <HomeMarqueeCard
          img={australiaFlag}
          alt={australiaFlag}
          name="Australia"
        />
        <HomeMarqueeCard img={austriaFlag} alt={austriaFlag} name="Austria" />
        <HomeMarqueeCard img={bahrainFlag} alt={bahrainFlag} name="Bahrain" />
        <HomeMarqueeCard img={egyptFlag} alt={egyptFlag} name="Egypt" />
        <HomeMarqueeCard img={franceFlag} alt={franceFlag} name="France" />
        <HomeMarqueeCard img={germanyFlag} alt={germanyFlag} name="Germany" />
        <HomeMarqueeCard img={italyFlag} alt={italyFlag} name="Italy" />
        <HomeMarqueeCard img={kuwaitFlag} alt={kuwaitFlag} name="Kuwait" />
        <HomeMarqueeCard
          img={malaysiaFlag}
          alt={malaysiaFlag}
          name="Malaysia"
        />
        <HomeMarqueeCard img={mexicoFlag} alt={mexicoFlag} name="Mexico" />
        <HomeMarqueeCard
          img={netherlandFlag}
          alt={netherlandFlag}
          name="Netherland"
        />
        <HomeMarqueeCard img={nigeriaFlag} alt={nigeriaFlag} name="Nigeria" />
        <HomeMarqueeCard img={omanFlag} alt={omanFlag} name="Oman" />
        <HomeMarqueeCard
          img={philippinesFlag}
          alt={philippinesFlag}
          name="Philippines"
        />
        <HomeMarqueeCard img={qatarFlag} alt={qatarFlag} name="Qatar" />
        <HomeMarqueeCard img={saudiFlag} alt={saudiFlag} name="Saudi Arabia" />
        <HomeMarqueeCard img={taiwanFlag} alt={taiwanFlag} name="Taiwan" />
        <HomeMarqueeCard img={swedenFlag} alt={swedenFlag} name="Sweden" />
        <HomeMarqueeCard img={uaeFlag} alt={uaeFlag} name="UAE" />
        <HomeMarqueeCard img={ukFlag} alt={ukFlag} name="United Kingdom" />
        <HomeMarqueeCard img={usaFlag} alt={usaFlag} name="USA" />
        <HomeMarqueeCard img={vietnamFlag} alt={vietnamFlag} name="Vietnam" />
        <HomeMarqueeCard img={chinaFlag} alt={chinaFlag} name="China" />
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
