import React from "react";
import "./Footer.css";
import FooterContact from "./FooterContact";
import FooterServices from "./FooterServices";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <FooterContact />
      </div>
      <div className="footerContent">
        <FooterServices />
      </div>
    </div>
  );
};

export default Footer;
