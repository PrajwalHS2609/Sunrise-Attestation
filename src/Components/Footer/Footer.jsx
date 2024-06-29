import React from "react";
import "./Footer.css";
import FooterContact from "./FooterContact";
import FooterDoc from "./FooterDoc";
import FooterEduCertif from "./FooterEduCertif";
import FooterAttest from "./FooterAttest";
import FooterApo from "./FooterApo";
import FooterService from "./FooterService";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <FooterContact />
      </div>
      <div className="footerContent">
        <FooterService />
      </div>
      <div className="footerContent">
        <FooterDoc />
      </div>
      <div className="footerContent">
        <FooterEduCertif />
      </div>
      <div className="footerContent">
        <FooterAttest />
      </div>
      <div className="footerContent">
        <FooterApo />
      </div>
    </div>
  );
};

export default Footer;
