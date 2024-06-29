import React from "react";
import "./Benefits.css";
import BenefitsHead from "./BenefitsHead";
import BenefitsMain from "./BenefitsMain";
const Benefits = () => {
  return (
    <div className="benefitsContainer">
      <div className="benefitsContent" id="benefitsContent1">
        <BenefitsHead />
      </div>
      <div className="benefitsContent" id="benefitsContent2">
        <BenefitsMain />
      </div>
    </div>
  );
};

export default Benefits;
