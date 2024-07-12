import React from "react";
import "./TranslationHead.css";
import translationBanner from "./../../../vid&img/translationBanner.jpg";

const TranslationHead = () => {
  return (
    <div className="transHeadContainer">
      <div className="transHeadCover">
        <h2>
          Translation Services in Bangalore by <span> Goodway Attestation</span>
        </h2>
      </div>
      <img src={translationBanner} alt="translationBanner" />
    </div>
  );
};

export default TranslationHead;
