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
        flag={indianEmbassy}
        name="INDIAN EMBASSY"
        alt="indianEmbassy"
      />
      <HomeFlagCard flag={uaeEmbassy} name="UAE EMBASSY" alt="uaeEmbassy" />
      <HomeFlagCard
        flag={saudiEmbassy}
        name="SAUDI EMBASSY"
        alt="saudiEmbassy"
      />
      <HomeFlagCard
        flag={qatarEmbassy}
        name="QATAR EMBASSY"
        alt="qatarEmbassy"
      />
      <HomeFlagCard
        flag={bahrainEmbassy}
        name="BAHRAIN EMBASSY"
        alt="bahrainEmbassy"
      />
    </div>
  );
};

export default HomeFlagsMain;
