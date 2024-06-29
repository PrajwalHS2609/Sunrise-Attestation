import React from "react";
import "./Benefits.css";
import benefits from "./../../vid&img/benefits.jpg";
import BenefitsCard from "./BenefitsCard";
const BenefitsMain = () => {
  return (
    <div className="benefitsMainContainer">
      <div className="benefitsMainContentImg">
        <img src={benefits} alt="" />
      </div>
      <div className="benefitsMainContent1">
        <div className="benefitsMainInnerContent">
          <BenefitsCard txt="Government Approved" img="" />
          <BenefitsCard txt="Efficiency" img="" />
          <BenefitsCard txt="Expertise" img="" />
          <BenefitsCard txt="24x7 Customer Support" img="" />
          <BenefitsCard txt="International Reach" img="" />
          <BenefitsCard txt="Transparency" img="" />
          <BenefitsCard txt="Secure Handling" img="" />
          <BenefitsCard txt="Trusted by Clients" img="" />
          <BenefitsCard txt="Competitive Pricing" img="" />
          <BenefitsCard txt="Online Tracking" img="" />
          <BenefitsCard txt="Legal Compliance" img="" />
          <BenefitsCard txt="Timely Delivery" img="" />
        </div>
      </div>
    </div>
  );
};

export default BenefitsMain;
