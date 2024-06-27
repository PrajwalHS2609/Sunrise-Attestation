import React from "react";
import "./HomeFlags.css";
import HomeFlagCard from "./HomeFlagCard";
import bahrainEmbassy from "../../../vid&img/Embassy/Bahrain.png";
import indianEmbassy from "../../../vid&img/Embassy/Indian Embassy.png";
import qatarEmbassy from "../../../vid&img/Embassy/Qatar Embassy.png";
import saudiEmbassy from "../../../vid&img/Embassy/Saudi.png";
import uaeEmbassy from "../../../vid&img/Embassy/UAE Embassy.png";

const HomeFlagsMain = () => {
  return (
    <div className="homeFlagMainContainer">
      <HomeFlagCard
        flag={bahrainEmbassy}
        name="Bahrain Embassy"
        alt="bahrainEmbassy"
      />
      <HomeFlagCard
        flag={indianEmbassy}
        name="Indian Embassy"
        alt="indianEmbassy"
      />
      <HomeFlagCard
        flag={qatarEmbassy}
        name="Qatar Embassy"
        alt="qatarEmbassy"
      />
      <HomeFlagCard
        flag={saudiEmbassy}
        name="Saudi Embassy"
        alt="saudiEmbassy"
      />
      <HomeFlagCard flag={uaeEmbassy} name="UAE Embassy" alt="uaeEmbassy" />
    </div>
  );
};

export default HomeFlagsMain;
