import React from "react";
import "./Benefits.css";
const BenefitsCard = (props) => {
  return (
    <div className="benefitsCardContainer">
      <div className="benefitsCardWrapper">
        <div className="benefitsCardIcon">
          <img src={props.img} alt="" />
        </div>
        <div className="benefitsTxt">
          <p>{props.txt}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;
