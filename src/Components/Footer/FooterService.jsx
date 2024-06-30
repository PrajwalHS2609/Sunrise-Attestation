import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterService = () => {
  return (
    <div className="footerServiceContent">
      <h3>Our Services</h3>
      <ul>
        <li>
          <Link to={"/"}>Attestation</Link>
        </li>
        <li>
          <Link to={"/"}>Apostille</Link>
        </li>
        <li>
          <Link to={"/"}>State HRD</Link>
        </li>
        <li>
          <Link to={"/"}>MEA Apostille</Link>
        </li>
        <li>
          <Link to={"/"}>MOFA</Link>
        </li>
        <li>
          <Link to={"/"}>PCC</Link>
        </li>
        <li>
          <Link to={"/"}>WES</Link>
        </li>
        <li>
          <Link to={"/"}>Translation</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterService;
