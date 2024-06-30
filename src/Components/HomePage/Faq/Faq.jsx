import React from "react";
import "./Faq.css";
import FaqHead from "./FaqHead";
import FaqMain from "./FaqMain";
const Faq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead />
        <FaqMain />
      </div>
    </div>
  );
};

export default Faq;
