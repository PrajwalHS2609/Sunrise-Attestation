import React from "react";
import "./Benefits.css";
import quality from "./../../vid&img/quality blue.png";
const BenefitsCard = (props) => {
  return (
    <div className="benefitsCardContainer">
      <div className="benefitsCardWrapper">
        <div className="benefitsCardIcon">
          <img src={quality} alt="" />
        </div>
        <div className="benefitsTxt">
          <p>{props.txt}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;
