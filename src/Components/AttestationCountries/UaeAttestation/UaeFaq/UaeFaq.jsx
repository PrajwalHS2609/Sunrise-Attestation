import React from "react";
import FaqHead from "./../../HomePage/Faq/FaqHead";
import FaqMain from "./FaqMain";
import "./Faq.css";

const UaeFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead
          heading="FAQs for UAE Attestation in Bangalore - Goodway Attestation"/>
        <FaqMain />
      </div>
    </div>
  );
};

export default UaeFaq;
